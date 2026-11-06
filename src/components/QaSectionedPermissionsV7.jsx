import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Checkbox, Field } from '@zendeskgarden/react-forms'
import { Notification } from '@zendeskgarden/react-notifications'
import { Table } from '@zendeskgarden/react-tables'
import { Tag } from '@zendeskgarden/react-tags'
import { useAppContext } from '../context/AppContext'
import { highlightText } from '../utils/highlight'
import { PALETTE } from '../flora-theme/elements/palette'
import {
  QA_ACCESS_OPTIONS,
  QA_PERMISSION_GROUPS,
  qaPermissionsForAccess,
  isPresetMatch,
  groupsMatchingQuery,
  groupsDivergedFromPreset,
} from '../data/qaPermissions'

const ALL_PERMISSIONS = QA_PERMISSION_GROUPS.flatMap((g) =>
  g.permissions.map((p) => ({ ...p, groupTitle: g.title, groupId: g.id })),
)

export function qaSectionedV7SearchText() {
  return [
    'Quality assurance',
    'Role type',
    'Access summary',
    'Reset to default',
    'Open all',
    'Close all',
    'Added',
    'Removed',
    'Customized',
    'permissions',
    ...QA_ACCESS_OPTIONS.flatMap((o) => [o.label, o.description]),
    ...QA_PERMISSION_GROUPS.flatMap((g) => [
      g.title,
      ...g.permissions.map((p) => p.label),
    ]),
  ].join(' ')
}

const ToastWrapper = styled.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id='notifications.notification'] {
    min-width: 410px;
  }
`

const Section = styled.div`
  padding-bottom: 8px;
`

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const RadioLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`

const RadioInput = styled.input.attrs({ type: 'radio' })`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`

const RadioTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const RadioTitleRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`

const RadioTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3130;
`

const CustomizedTag = styled(Tag).attrs({
  size: 'small',
  isPill: true,
})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: #fae7d7;
  color: #4a290c;

  &:hover {
    color: #4a290c;
  }
`

const DeltaTag = styled(Tag).attrs({
  size: 'small',
  isPill: true,
})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: ${(p) => (p.$added ? '#ddf0c9' : '#f7e5e6')};
  color: ${(p) => (p.$added ? '#25390f' : '#5f1c20')};

  &:hover {
    color: ${(p) => (p.$added ? '#25390f' : '#5f1c20')};
  }
`

const RadioHint = styled.span`
  font-size: 13px;
  line-height: 20px;
  margin-top: 2px;
  color: #646864;
`

const RoleTypeLabel = styled.p`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`

/* Accordion help under title — Flora medium/default 14/20, fg/subtle; 0 margin. */
const AccordionHint = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #646864;
`

const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  border-top: 1px solid #e9ebed;
`

const AccordionItem = styled.div`
  border-bottom: 1px solid #e9ebed;
  background: transparent;
`

const AccordionHeader = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  margin: 0;
  padding: 16px 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
`

const AccordionHeaderText = styled.span`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`

const AccordionTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`

/* Same meta counter as V4 nested groups — e.g. “3/7 on”. */
const AccordionMeta = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #646864;
  margin-left: 8px;
`

const AccordionChevron = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  margin-top: 2px;
  color: #646864;

  svg {
    display: block;
    width: 16px;
    height: 16px;
    transform: ${(p) => (p.$open ? 'rotate(180deg)' : 'none')};
    transition: transform 120ms ease;
  }
`

const AccordionBody = styled.div`
  padding: 0 0 16px;
`

const ResolvedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  columns: 2;
  column-gap: 24px;
`

const ResolvedItem = styled.li`
  break-inside: avoid;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${(p) => (p.$on ? '#2f3130' : '#646864')};
  margin-bottom: 4px;

  &::before {
    content: ${(p) => (p.$on ? '"✓ "' : '"– "')};
  }
`

const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
`

const ResetButton = styled(Button).attrs({
  isBasic: true,
  size: 'small',
})`
  flex-shrink: 0;
`

const OpenAllButton = styled(Button).attrs({
  isBasic: true,
  size: 'small',
})`
  flex-shrink: 0;
`

/* Count — Flora medium/default 14/20, fg/default; 8px above table. */
const TableCounter = styled.p`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2f3130;
`

const FloraTableWrap = styled.div`
  max-height: 420px;
  overflow: auto;
  background: ${PALETTE.white};
`

const FloraTable = styled(Table)`
  width: 100%;

  [data-garden-id='tables.header_cell'],
  [data-garden-id='tables.cell'] {
    padding: 0 12px !important;
    box-shadow: none !important;
  }

  [data-garden-id='tables.header_cell'] {
    height: 48px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
    background-color: ${PALETTE.grey[100]} !important;
    background-clip: padding-box;
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

  [data-garden-id='tables.cell'] {
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
    border-bottom: 1px solid ${PALETTE.grey[200]} !important;
  }

  /* Hover / focus only — no persistent selected (blue) row. */
  [data-garden-id='tables.row'],
  [data-garden-id='tables.row'][aria-selected='true'],
  [data-garden-id='tables.row'][data-garden-selected='true'] {
    background-color: transparent !important;
  }

  [data-garden-id='tables.row']:hover,
  [data-garden-id='tables.row']:hover [data-garden-id='tables.cell'] {
    background-color: ${PALETTE.grey[100]} !important;
  }

  [data-garden-id='tables.row']:focus-visible,
  [data-garden-id='tables.row']:focus-visible [data-garden-id='tables.cell'] {
    background-color: ${PALETTE.grey[100]} !important;
  }

  [data-garden-id='tables.row']:last-child [data-garden-id='tables.cell'] {
    border-bottom: none !important;
  }
`

const CheckboxField = styled(Field)`
  margin: 0;
  display: flex;
  align-items: center;
`

const StatusCell = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 16px;
`

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function initialValuesByLevel() {
  return Object.fromEntries(
    QA_ACCESS_OPTIONS.map((o) => [o.value, qaPermissionsForAccess(o.value)]),
  )
}

function selectAllState(rows, values) {
  if (rows.length === 0) {
    return { checked: false, indeterminate: false }
  }
  const onCount = rows.reduce((n, p) => n + (values[p.id] ? 1 : 0), 0)
  return {
    checked: onCount === rows.length,
    indeterminate: onCount > 0 && onCount < rows.length,
  }
}

function countEnabled(group, values) {
  return group.permissions.filter((p) => values[p.id]).length
}

function PermissionTable({
  rows,
  values,
  preset,
  query,
  onToggle,
  onSelectAll,
  counterLabel,
}) {
  const selectAll = selectAllState(rows, values)

  return (
    <>
      <TableCounter>{counterLabel}</TableCounter>
      <FloraTableWrap>
        <FloraTable>
          <Table.Head isSticky>
            <Table.HeaderRow>
              <Table.HeaderCell isMinimum>
                <CheckboxField>
                  <Checkbox
                    checked={selectAll.checked}
                    indeterminate={selectAll.indeterminate}
                    onChange={(e) => onSelectAll(e.target.checked)}
                  >
                    <Field.Label hidden>Select all permissions</Field.Label>
                  </Checkbox>
                </CheckboxField>
              </Table.HeaderCell>
              <Table.HeaderCell>Permission</Table.HeaderCell>
              <Table.HeaderCell width={120}>Status</Table.HeaderCell>
            </Table.HeaderRow>
          </Table.Head>
          <Table.Body>
            {rows.map((p) => {
              const on = Boolean(values[p.id])
              const inheritedOn = Boolean(preset[p.id])
              const isOverride = on !== inheritedOn
              return (
                <Table.Row key={p.id}>
                  <Table.Cell isMinimum>
                    <CheckboxField>
                      <Checkbox
                        checked={on}
                        onChange={(e) => onToggle(p.id, e.target.checked)}
                      >
                        <Field.Label hidden>{p.label}</Field.Label>
                      </Checkbox>
                    </CheckboxField>
                  </Table.Cell>
                  <Table.Cell>{highlightText(p.label, query)}</Table.Cell>
                  <Table.Cell>
                    <StatusCell>
                      {isOverride && (
                        <DeltaTag $added={on}>
                          {on ? 'Added' : 'Removed'}
                        </DeltaTag>
                      )}
                    </StatusCell>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </FloraTable>
      </FloraTableWrap>
    </>
  )
}

export default function QaSectionedPermissionsV7({
  roleId,
  query,
  packageAccessLevel,
  onPackageDivergenceChange,
}) {
  const { getProductAccess, updateProductAccess } = useAppContext()
  const { accessLevel: storedLevel } = getProductAccess(roleId, 'qa')
  const accessLevel = storedLevel || 'agent'
  const q = (query || '').trim()

  const [valuesByLevel, setValuesByLevel] = useState(initialValuesByLevel)
  const [openGroups, setOpenGroups] = useState({})
  const [summaryOpen, setSummaryOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const values = valuesByLevel[accessLevel] || qaPermissionsForAccess(accessLevel)
  const typeLabel =
    QA_ACCESS_OPTIONS.find((o) => o.value === accessLevel)?.label || 'Agent'
  const matchingPreset = isPresetMatch(accessLevel, values)
  const preset = qaPermissionsForAccess(accessLevel)

  const searchOpenIds = useMemo(() => groupsMatchingQuery(q), [q])
  const divergedIds = useMemo(
    () => groupsDivergedFromPreset(accessLevel, values),
    [accessLevel, values],
  )

  const visibleGroups = useMemo(() => {
    if (!q) return QA_PERMISSION_GROUPS
    const matchIds = new Set(searchOpenIds)
    return QA_PERMISSION_GROUPS.filter((g) => matchIds.has(g.id))
  }, [q, searchOpenIds])

  useEffect(() => {
    if (!onPackageDivergenceChange || !packageAccessLevel) return
    const packageValues = valuesByLevel[packageAccessLevel]
    onPackageDivergenceChange(!isPresetMatch(packageAccessLevel, packageValues))
  }, [valuesByLevel, packageAccessLevel, onPackageDivergenceChange])

  /* Open sections that match search or diverge from the active preset. */
  useEffect(() => {
    if (searchOpenIds.length === 0 && divergedIds.length === 0) return
    setOpenGroups((prev) => {
      const next = { ...prev }
      let changed = false
      ;[...searchOpenIds, ...divergedIds].forEach((id) => {
        if (!next[id]) {
          next[id] = true
          changed = true
        }
      })
      return changed ? next : prev
    })
  }, [searchOpenIds, divergedIds])

  const setAccessLevel = (level) => {
    updateProductAccess(roleId, 'qa', {
      optedIn: true,
      saved: false,
      accessLevel: level,
    })
  }

  const applyOverride = (permId, turnOn) => {
    setValuesByLevel((prev) => ({
      ...prev,
      [accessLevel]: { ...prev[accessLevel], [permId]: turnOn },
    }))
  }

  const applySelectAllInGroup = (group, turnOn) => {
    const rows = group.permissions.filter((p) => {
      if (!q) return true
      return `${p.label} ${group.title}`.toLowerCase().includes(q.toLowerCase())
    })
    setValuesByLevel((prev) => {
      const next = { ...prev[accessLevel] }
      for (const p of rows) {
        next[p.id] = turnOn
      }
      return { ...prev, [accessLevel]: next }
    })
  }

  const resetToDefault = () => {
    if (matchingPreset) return
    setValuesByLevel((prev) => ({
      ...prev,
      [accessLevel]: qaPermissionsForAccess(accessLevel),
    }))
    setToastMessage(
      `Quality assurance ${typeLabel.toLowerCase()} reset to default.`,
    )
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  const toggleGroup = (id) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const allGroupsOpen =
    visibleGroups.length > 0 &&
    visibleGroups.every((g) => openGroups[g.id])

  const toggleAllGroups = () => {
    if (allGroupsOpen) {
      setOpenGroups({})
      return
    }
    setOpenGroups(
      Object.fromEntries(visibleGroups.map((g) => [g.id, true])),
    )
  }

  const rowsForGroup = (group) => {
    if (!q) return group.permissions
    return group.permissions.filter((p) =>
      `${p.label} ${group.title}`.toLowerCase().includes(q.toLowerCase()),
    )
  }

  return (
    <Section>
      {showToast && (
        <ToastWrapper>
          <Notification type="success">
            <Notification.Title>{toastMessage}</Notification.Title>
            <Notification.Close aria-label="Close" onClick={() => setShowToast(false)} />
          </Notification>
        </ToastWrapper>
      )}

      <RoleTypeLabel>Role type</RoleTypeLabel>
      <RadioGroup>
        {QA_ACCESS_OPTIONS.map((option) => {
          const optionCustomized = !isPresetMatch(
            option.value,
            valuesByLevel[option.value],
          )
          return (
            <RadioLabel key={option.value}>
              <RadioInput
                name={`qa-sectioned-v7-access-${roleId}`}
                value={option.value}
                checked={accessLevel === option.value}
                onChange={() => setAccessLevel(option.value)}
              />
              <RadioTextWrap>
                <RadioTitleRow>
                  <RadioTitle>{highlightText(option.label, q)}</RadioTitle>
                  {optionCustomized && <CustomizedTag>Customized</CustomizedTag>}
                </RadioTitleRow>
                <RadioHint>{highlightText(option.description, q)}</RadioHint>
              </RadioTextWrap>
            </RadioLabel>
          )
        })}
      </RadioGroup>

      <ActionsRow>
        <ResetButton onClick={resetToDefault}>Reset to default</ResetButton>
        <OpenAllButton onClick={toggleAllGroups}>
          {allGroupsOpen ? 'Close all' : 'Open all'}
        </OpenAllButton>
      </ActionsRow>

      <AccordionList>
        {visibleGroups.map((group) => {
          const open = Boolean(openGroups[group.id])
          const rows = rowsForGroup(group)
          const enabled = countEnabled(group, values)
          if (rows.length === 0) return null
          return (
            <AccordionItem key={group.id}>
              <AccordionHeader
                aria-expanded={open}
                onClick={() => toggleGroup(group.id)}
              >
                <AccordionHeaderText>
                  <span>
                    <AccordionTitle>
                      {highlightText(group.title, q)}
                    </AccordionTitle>
                    <AccordionMeta>
                      {enabled}/{group.permissions.length} on
                    </AccordionMeta>
                  </span>
                </AccordionHeaderText>
                <AccordionChevron $open={open}>
                  <ChevronIcon />
                </AccordionChevron>
              </AccordionHeader>
              {open && (
                <AccordionBody>
                  <PermissionTable
                    rows={rows}
                    values={values}
                    preset={preset}
                    query={q}
                    counterLabel={`${group.permissions.length} permissions`}
                    onToggle={applyOverride}
                    onSelectAll={(turnOn) =>
                      applySelectAllInGroup(group, turnOn)
                    }
                  />
                </AccordionBody>
              )}
            </AccordionItem>
          )
        })}

        <AccordionItem>
          <AccordionHeader
            aria-expanded={summaryOpen}
            onClick={() => setSummaryOpen((o) => !o)}
          >
            <AccordionHeaderText>
              <AccordionTitle>Access summary</AccordionTitle>
              <AccordionHint>
                Read-only view of what {typeLabel} plus this role’s changes add up to.
              </AccordionHint>
            </AccordionHeaderText>
            <AccordionChevron $open={summaryOpen}>
              <ChevronIcon />
            </AccordionChevron>
          </AccordionHeader>
          {summaryOpen && (
            <AccordionBody>
              <ResolvedList>
                {ALL_PERMISSIONS.map((p) => (
                  <ResolvedItem key={p.id} $on={Boolean(values[p.id])}>
                    {highlightText(p.label, q)}
                  </ResolvedItem>
                ))}
              </ResolvedList>
            </AccordionBody>
          )}
        </AccordionItem>
      </AccordionList>
    </Section>
  )
}
