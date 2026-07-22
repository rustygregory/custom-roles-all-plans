import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const NavPanel = styled.nav`
  width: 240px;
  min-width: 240px;
  background: transparent;
  overflow-y: auto;
  padding: 16px 12px;
  height: 100%;
  box-sizing: border-box;
`

const SectionHeader = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #68737d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 12px 12px 4px;
  margin-top: ${p => p.$first ? '0' : '8px'};
`

const NavItem = styled.div`
  padding: 6px 12px;
  font-size: 14px;
  color: ${p => p.$active ? '#fff' : '#2f3941'};
  font-weight: ${p => p.$active ? '500' : '400'};
  background: ${p => p.$active ? '#2f3941' : 'transparent'};
  border-radius: 6px;
  cursor: ${p => p.$clickable ? 'pointer' : 'default'};
  margin: 1px 0;

  &:hover {
    background: ${p => p.$clickable ? (p.$active ? '#2f3941' : '#e9ebed') : 'transparent'};
  }
`

const PageTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #2f3941;
  padding: 4px 12px 12px;
`

export default function AdminCenterNav() {
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname

  const isTeamMembers = path.startsWith('/team-members')
  const isRoles = path.startsWith('/roles')

  return (
    <NavPanel>
      <PageTitle>People</PageTitle>

      <SectionHeader $first>Team</SectionHeader>
      <NavItem $active={isTeamMembers} $clickable onClick={() => navigate('/team-members')}>
        Team members
      </NavItem>
      <NavItem $active={isRoles} $clickable onClick={() => navigate('/roles')}>
        Roles
      </NavItem>
      <NavItem>Groups</NavItem>

      <SectionHeader>Configuration</SectionHeader>
      <NavItem>User fields</NavItem>
      <NavItem>Organization fields</NavItem>
      <NavItem>Events</NavItem>
      <NavItem>Profiles</NavItem>
      <NavItem>End users</NavItem>
      <NavItem>Tags</NavItem>

      <SectionHeader>Bulk actions</SectionHeader>
      <NavItem>Import users</NavItem>
      <NavItem>Import organizations</NavItem>

      <SectionHeader>Deleted users</SectionHeader>
      <NavItem>Deleted users</NavItem>

      <SectionHeader>Restrictions</SectionHeader>
      <NavItem>Banned IP addresses</NavItem>
    </NavPanel>
  )
}
