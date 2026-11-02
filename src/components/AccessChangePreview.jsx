import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Anchor, Button } from '@zendeskgarden/react-buttons'
import { Field, MediaInput, Select } from '@zendeskgarden/react-forms'
import { OffsetPagination } from '@zendeskgarden/react-pagination'
import { Table } from '@zendeskgarden/react-tables'
import Breadcrumbs from './Breadcrumbs'
import { useAppContext } from '../context/AppContext'
import { teamMembers, RADIO_PRODUCTS } from '../data/mockData'
import { PALETTE } from '../flora-theme/elements/palette'
import { getAccessChangePreview } from '../utils/accessChanges'

const PAGE_SIZE = 100
const RULE = `1px solid ${PALETTE.grey[200]}`

const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
`

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
`

const Container = styled.div`
  padding: 24px 40px 40px 32px;
  width: 100%;
  box-sizing: border-box;
`

/* Flora Typography Large / Medium — 26/32, fg/default. */
const Title = styled.h1`
  font-size: 26px;
  line-height: 32px;
  font-weight: 500;
  color: #2f3130;
  margin: 0 0 4px;
`

/* Flora Typography Medium / Default — 14/20, fg/default. */
const Subtitle = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2f3130;
  margin: 0 0 24px;
  max-width: 726px;
`

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px 16px;
  margin-bottom: 12px;
`

const SearchWrap = styled.div`
  width: 400px;
  min-width: 400px;
  max-width: 400px;
  flex: 0 0 400px;
`

const FilterWrap = styled.div`
  width: 200px;
`

const ResultMeta = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: #2f3130;
  /* 8px between counter and table header */
  margin-bottom: 8px;
`

const MemberAnchor = styled(Anchor)`
  font-size: 14px;
  color: ${PALETTE.blue[700]} !important;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${PALETTE.blue[800]} !important;
    text-decoration: underline;
  }

  &:active {
    color: ${PALETTE.blue[900]} !important;
    text-decoration: underline;
  }
`

const Pager = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const Empty = styled.div`
  padding: 40px 16px;
  text-align: center;
  color: ${PALETTE.grey[700]};
  font-size: 14px;
`

const BottomBar = styled.div`
  height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 40px 0 32px;
  border-top: 1px solid ${PALETTE.grey[300]};
  background: ${PALETTE.white};
`

const TableFrame = styled.div`
  width: 100%;
`

/*
 * Body sketch pattern (IMG_6367):
 * 1. Name once via rowspan, top-aligned with first product
 * 2. Partial horizontal rules between products — Product / Current / New only
 *    (do not cross into Team member)
 * 3. Full-width horizontal rules between different team members
 *
 * Header: Flora Core Header cell — bg/subtle, Medium/Bold 14/20, fg/default,
 * inset/sm 12, control radius 8 on first/last, 4px gap to body.
 */
const SketchTable = styled(Table)`
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;

  [data-garden-id='tables.header_row'],
  [data-garden-id='tables.row'] {
    border-bottom: none !important;
    background-color: transparent !important;
  }

  /* Group hover: name + every product row for that member. */
  [data-garden-id='tables.row'][data-group-hover='true'],
  [data-garden-id='tables.row'][data-group-hover='true'] [data-garden-id='tables.cell'] {
    background-color: ${PALETTE.grey[100]} !important;
  }

  [data-garden-id='tables.header_cell'],
  [data-garden-id='tables.cell'] {
    padding: 0 12px !important;
    box-shadow: none !important;
    border-bottom: none !important;
  }

  /* Flora 🌸 Header cell — Default / Default */
  [data-garden-id='tables.header_cell'] {
    height: 48px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
    background-color: #f7f7f7 !important;
    background-clip: padding-box;
    /* Flora spacing/block/xs — 4px gap between header and body */
    border-bottom: 4px solid transparent !important;
  }

  [data-garden-id='tables.header_cell']:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  [data-garden-id='tables.header_cell']:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  /* Flora 🌸 Header cell — Sortable (label + chevron-up-down, gap 4px) */
  [data-garden-id='tables.sortable'] {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    max-width: 100%;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #2f3130;
    /* Room for the absolute-positioned Garden sort icon */
    padding-right: 20px !important;
  }

  [data-garden-id='tables.sortable'] svg {
    color: #646864;
  }

  [data-garden-id='tables.cell'] {
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
  }

  /* Must beat the cell reset above — sketch rules live on these attrs. */
  [data-garden-id='tables.cell'][data-sketch='member'],
  [data-garden-id='tables.cell'][data-sketch='side'] {
    border-bottom: ${RULE} !important;
  }

  [data-garden-id='tables.cell'][data-sketch='member'] {
    /* Match middle-aligned product text in the first span row (40px / 20px lh). */
    vertical-align: top !important;
    padding-top: 10px !important;
  }
`

const MemberCell = styled(Table.Cell).attrs({ 'data-sketch': 'member' })``

const SideCell = styled(Table.Cell).attrs({ 'data-sketch': 'side' })``

const ColGroup = () => (
  <colgroup>
    <col style={{ width: '28%' }} />
    <col style={{ width: '24%' }} />
    <col style={{ width: '24%' }} />
    <col style={{ width: '24%' }} />
  </colgroup>
)

function annotateMemberGroups(rows) {
  const annotated = []
  let i = 0
  while (i < rows.length) {
    let j = i + 1
    while (j < rows.length && rows[j].memberId === rows[i].memberId) j += 1
    const span = j - i
    for (let k = i; k < j; k += 1) {
      annotated.push({
        ...rows[k],
        isFirstInGroup: k === i,
        isLastInGroup: k === j - 1,
        rowSpan: k === i ? span : 0,
      })
    }
    i = j
  }
  return annotated
}

export default function AccessChangePreview() {
  const { id: roleId } = useParams()
  const navigate = useNavigate()
  const {
    version,
    roles,
    roleAssignments,
    getProductAccess,
    getAiAgentsState,
  } = useAppContext()

  const role = roles.find((r) => r.id === roleId)
  const roleName = role?.name || 'Role'

  const assignedMembers = useMemo(() => {
    const ids = roleAssignments[roleId] || []
    return ids.map((mid) => teamMembers.find((m) => m.id === mid)).filter(Boolean)
  }, [roleAssignments, roleId])

  const preview = useMemo(
    () =>
      getAccessChangePreview({
        members: assignedMembers,
        version,
        roleKey: roleId,
        getProductAccess,
        getAiAgentsState,
        radioProducts: RADIO_PRODUCTS,
      }),
    [assignedMembers, version, roleId, getProductAccess, getAiAgentsState],
  )

  const [query, setQuery] = useState('')
  const [productFilter, setProductFilter] = useState('all')
  const [page, setPage] = useState(1)
  const [hoveredMemberId, setHoveredMemberId] = useState(null)
  /* Flora table sort: none → asc → desc → none */
  const [memberSort, setMemberSort] = useState(undefined)

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return preview.rows.filter((row) => {
      if (productFilter !== 'all' && row.productId !== productFilter) return false
      if (q && !row.memberName.toLowerCase().includes(q)) return false
      return true
    })
  }, [preview.rows, query, productFilter])

  const memberIdsInOrder = useMemo(() => {
    const ids = []
    const namesById = new Map()
    const seen = new Set()
    for (const row of filteredRows) {
      if (!seen.has(row.memberId)) {
        seen.add(row.memberId)
        ids.push(row.memberId)
        namesById.set(row.memberId, row.memberName)
      }
    }
    if (!memberSort) return ids
    const sorted = [...ids]
    sorted.sort((a, b) => {
      const cmp = (namesById.get(a) || '').localeCompare(namesById.get(b) || '', undefined, {
        sensitivity: 'base',
      })
      return memberSort === 'asc' ? cmp : -cmp
    })
    return sorted
  }, [filteredRows, memberSort])

  const cycleMemberSort = () => {
    setMemberSort((prev) => {
      if (prev === undefined) return 'asc'
      if (prev === 'asc') return 'desc'
      return undefined
    })
    setPage(1)
  }

  const totalMemberCount = memberIdsInOrder.length
  const pageCount = Math.max(1, Math.ceil(totalMemberCount / PAGE_SIZE))
  const safePage = Math.min(page, pageCount)
  const pageMemberIdList = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE
    return memberIdsInOrder.slice(start, start + PAGE_SIZE)
  }, [memberIdsInOrder, safePage])
  const pageMemberCount = pageMemberIdList.length
  const pageRows = useMemo(() => {
    const pageSet = new Set(pageMemberIdList)
    const rowsByMember = new Map()
    for (const row of filteredRows) {
      if (!pageSet.has(row.memberId)) continue
      const list = rowsByMember.get(row.memberId)
      if (list) list.push(row)
      else rowsByMember.set(row.memberId, [row])
    }
    return pageMemberIdList.flatMap((id) => rowsByMember.get(id) || [])
  }, [filteredRows, pageMemberIdList])
  const groupedPageRows = annotateMemberGroups(pageRows)

  const backToRole = () => navigate(`/roles/${roleId}`)

  return (
    <PageWrapper>
      <ScrollArea>
        <Container>
          <Breadcrumbs
            items={[
              { label: 'People' },
              { label: 'Team' },
              { label: 'Roles', path: '/roles' },
              { label: roleName, path: `/roles/${roleId}` },
              { label: 'Preview team members access change' },
            ]}
          />

          <Title>Preview team members access change</Title>
          <Subtitle>
            Review how saving this role would change product access for assigned team members.
            Select a name to open their profile.
          </Subtitle>

          <Toolbar>
            <SearchWrap>
              <Field>
                <Field.Label>Search team members</Field.Label>
                <MediaInput
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setPage(1)
                  }}
                  start={
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M11.2 11.2L15 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  }
                />
              </Field>
            </SearchWrap>
            <FilterWrap>
              <Field>
                <Field.Label>Product</Field.Label>
                <Select
                  value={productFilter}
                  onChange={(e) => {
                    setProductFilter(e.target.value)
                    setPage(1)
                  }}
                >
                  <option value="all">All products</option>
                  {preview.products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </Select>
              </Field>
            </FilterWrap>
          </Toolbar>

          <ResultMeta>
            {totalMemberCount === 0
              ? 'No matching access changes'
              : `${pageMemberCount} of ${totalMemberCount} team members`}
          </ResultMeta>

          {pageRows.length === 0 ? (
            <Empty>
              {preview.rows.length === 0
                ? 'There are no pending access changes for this role.'
                : 'No rows match your search or filter.'}
            </Empty>
          ) : (
            <TableFrame>
              <SketchTable size="medium" isReadOnly aria-label="Preview team members access change">
                <ColGroup />
                <Table.Head>
                  <Table.HeaderRow>
                    <Table.SortableCell
                      sort={memberSort}
                      onClick={cycleMemberSort}
                      aria-label={
                        memberSort === 'asc'
                          ? 'Team member, sorted ascending'
                          : memberSort === 'desc'
                            ? 'Team member, sorted descending'
                            : 'Team member, not sorted'
                      }
                    >
                      Team member
                    </Table.SortableCell>
                    <Table.HeaderCell>Product</Table.HeaderCell>
                    <Table.HeaderCell>Current access</Table.HeaderCell>
                    <Table.HeaderCell>New access</Table.HeaderCell>
                  </Table.HeaderRow>
                </Table.Head>
                <Table.Body>
                  {groupedPageRows.map((row) => (
                    <Table.Row
                      key={`${row.memberId}-${row.productId}`}
                      data-member={row.memberId}
                      data-group-hover={hoveredMemberId === row.memberId ? 'true' : undefined}
                      onMouseEnter={() => setHoveredMemberId(row.memberId)}
                      onMouseLeave={(e) => {
                        const next = e.relatedTarget
                        if (
                          next instanceof Element &&
                          next.closest(`[data-member="${row.memberId}"]`)
                        ) {
                          return
                        }
                        setHoveredMemberId(null)
                      }}
                    >
                      {row.isFirstInGroup && (
                        <MemberCell rowSpan={row.rowSpan}>
                          <MemberAnchor
                            isUnderlined={false}
                            href={`#/team-members/${row.memberId}`}
                            onClick={(e) => {
                              e.preventDefault()
                              navigate(`/team-members/${row.memberId}`, {
                                state: {
                                  fromRoleId: roleId,
                                  fromAccessPreview: true,
                                },
                              })
                            }}
                          >
                            {row.memberName}
                          </MemberAnchor>
                        </MemberCell>
                      )}
                      <SideCell>{row.product}</SideCell>
                      <SideCell>{row.current}</SideCell>
                      <SideCell>{row.next}</SideCell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </SketchTable>
            </TableFrame>
          )}

          {totalMemberCount > PAGE_SIZE && (
            <Pager>
              <OffsetPagination
                totalPages={pageCount}
                currentPage={safePage}
                onChange={(nextPage) => setPage(nextPage)}
                aria-label="Pagination"
              />
            </Pager>
          )}
        </Container>
      </ScrollArea>

      <BottomBar>
        <Button onClick={backToRole}>Back to role</Button>
      </BottomBar>
    </PageWrapper>
  )
}
