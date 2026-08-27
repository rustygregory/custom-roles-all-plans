import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/mockData'
import Breadcrumbs from './Breadcrumbs'

const Container = styled.div`
  padding: 24px 32px;
  overflow-y: auto;
  flex: 1;
`

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 4px;
`

const Subtitle = styled.p`
  font-size: 14px;
  color: #49545c;
  margin: 0;
`

const SubtitleLink = styled.a`
  color: #1f73b7;
  text-decoration: underline;

  &:hover {
    color: #144a75;
  }
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const ActionsButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #1f73b7;
  border-radius: 4px;
  background: #fff;
  color: #1f73b7;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #edf5fa;
  }
`

const CreateButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #1f73b7;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #144a75;
  }
`

const SearchLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`

const SearchField = styled.div`
  position: relative;
  max-width: 560px;
  margin-bottom: 16px;

  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #68737d;
    pointer-events: none;
  }
`

const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px 10px 36px;
  border: 1px solid #87929d;
  border-radius: 4px;
  font-size: 14px;
  color: #2f3941;

  &:focus {
    outline: none;
    border-color: #1f73b7;
    box-shadow: 0 0 0 3px rgba(31, 115, 183, 0.25);
  }
`

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #1f73b7;
  border-radius: 4px;
  background: #fff;
  color: #1f73b7;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background: #edf5fa;
  }
`

const CountRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 8px;
`

const CountLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`

const BulkManageLink = styled.a`
  font-size: 14px;
  color: #1f73b7;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #144a75;
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
`

const Th = styled.th`
  text-align: left;
  padding: 12px 16px 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  border-bottom: 1px solid #d8dcde;
  white-space: nowrap;

  &:first-child {
    padding-left: 0;
    width: 32px;
  }
`

const SortIcon = styled.span`
  color: #87929d;
  margin-left: 4px;
  font-size: 11px;
`

const Td = styled.td`
  padding: 12px 16px 12px 0;
  font-size: 14px;
  color: #2f3941;
  border-bottom: 1px solid #e9ebed;
  vertical-align: middle;
`

const Row = styled.tr`
  &:last-child td {
    border-bottom: none;
  }
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #1f73b7;
`

const MemberCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

/* Initial-letter avatar — hue picked from the first letter so each member
   keeps a stable color. */
const AVATAR_COLORS = [
  ['#d4e7f5', '#17494d'],
  ['#f5d4d8', '#8c232c'],
  ['#e2d9f3', '#55237a'],
  ['#d3f0e2', '#186146'],
  ['#f8e5c8', '#8a5a1e'],
]

const Avatar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 600;
  background: ${p => p.$bg};
  color: ${p => p.$fg};
`

const MemberName = styled.span`
  display: block;
  color: #1f73b7;
  font-weight: 500;
`

const MemberEmail = styled.span`
  display: block;
  color: #68737d;
  font-size: 13px;
  margin-top: 2px;
`

const ExtraBrands = styled.span`
  display: block;
  color: #1f73b7;
  font-size: 13px;
  margin-top: 2px;
`

const OverflowButton = styled.button`
  border: none;
  background: transparent;
  color: #68737d;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;

  &:hover {
    background: #e9ebed;
  }
`

export default function TeamMembersList() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()
  const visible = q
    ? teamMembers.filter(m => m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q))
    : teamMembers

  return (
    <Container>
      <Breadcrumbs items={[
        { label: 'People' },
        { label: 'Team' },
        { label: 'Team members' },
      ]} />

      <PageHeader>
        <div>
          <Title>Team members</Title>
          <Subtitle>
            Find and manage team members, from agents to admins.
            <br />
            <SubtitleLink href="#">Learn about the Team members page ↗</SubtitleLink>
          </Subtitle>
        </div>
        <HeaderActions>
          <ActionsButton>
            Actions
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </ActionsButton>
          <CreateButton>Create team member</CreateButton>
        </HeaderActions>
      </PageHeader>

      <SearchLabel>Search team members</SearchLabel>
      <SearchField>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
      </SearchField>

      <FilterButton>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 3h10M4 7h6M6 11h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        Filter
      </FilterButton>

      <CountRow>
        <CountLabel>{visible.length} team members</CountLabel>
        <BulkManageLink>Bulk manage ↗</BulkManageLink>
      </CountRow>

      <Table>
        <thead>
          <tr>
            <Th><Checkbox /></Th>
            <Th>Team member</Th>
            <Th>Brand</Th>
            <Th>Group</Th>
            <Th>Product access</Th>
            <Th>Support role</Th>
            <Th>Last sign-in<SortIcon>⇅</SortIcon></Th>
            <Th />
          </tr>
        </thead>
        <tbody>
          {visible.map(member => {
            const initial = member.name.charAt(0).toUpperCase()
            const [bg, fg] = AVATAR_COLORS[initial.charCodeAt(0) % AVATAR_COLORS.length]
            return (
              <Row key={member.id}>
                <Td><Checkbox onClick={(e) => e.stopPropagation()} /></Td>
                <Td onClick={() => navigate(`/team-members/${member.id}`)} style={{ cursor: 'pointer' }}>
                  <MemberCell>
                    <Avatar $bg={bg} $fg={fg}>{initial}</Avatar>
                    <div>
                      <MemberName>{member.name}</MemberName>
                      <MemberEmail>{member.email}</MemberEmail>
                    </div>
                  </MemberCell>
                </Td>
                <Td>
                  {member.brand}
                  {member.extraBrands > 0 && <ExtraBrands>+{member.extraBrands} more</ExtraBrands>}
                </Td>
                <Td>{member.group}</Td>
                <Td>{member.productAccess}</Td>
                <Td>{member.role}</Td>
                <Td>{member.lastSignIn}</Td>
                <Td><OverflowButton aria-label={`More actions for ${member.name}`}>⋮</OverflowButton></Td>
              </Row>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}
