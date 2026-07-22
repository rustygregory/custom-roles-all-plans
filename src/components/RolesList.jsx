import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Container = styled.div`
  padding: 24px 32px;
  overflow-y: auto;
  flex: 1;
`

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
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
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const CompareLink = styled.span`
  color: #1f73b7;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const CountLabel = styled.div`
  font-size: 14px;
  color: #49545c;
  margin-bottom: 12px;
`

const AddButton = styled.button`
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
`

const Th = styled.th`
  text-align: left;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  border-bottom: 1px solid #d8dcde;
`

const Td = styled.td`
  padding: 16px;
  font-size: 14px;
  color: #2f3941;
  border-bottom: 1px solid #e9ebed;
  vertical-align: middle;
`

const ClickableRow = styled.tr`
  cursor: pointer;

  &:hover {
    background: #f8f9f9;
  }

  &:last-child td {
    border-bottom: none;
  }
`

const NameCell = styled.span`
  color: #2f3941;
`

const DescCell = styled.span`
  color: #49545c;
`

const TypeTag = styled.span`
  display: inline-flex;
  align-items: center;
  background: ${p => p.$system ? '#e9ebed' : '#edf7f0'};
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 500;
  color: ${p => p.$system ? '#68737d' : '#2f3941'};
`

const CountCell = styled.span`
  font-size: 14px;
  color: #2f3941;
`

export default function RolesList() {
  const navigate = useNavigate()
  const { roles, roleAssignments } = useAppContext()

  const memberCount = (role) => {
    const base = role.teamMembers || 0
    const assigned = (roleAssignments[role.id] || []).length
    return base + assigned
  }

  return (
    <Container>
      <PageHeader>
        <div>
          <Title>Roles</Title>
          <Subtitle>
            Create, assign, and manage roles for your team.{' '}
            <SubtitleLink href="#">Learn about managing roles ↗</SubtitleLink>
          </Subtitle>
        </div>
        <HeaderActions>
          <CompareLink>Compare roles</CompareLink>
          <AddButton onClick={() => navigate('/roles/create')}>
            Create role
          </AddButton>
        </HeaderActions>
      </PageHeader>

      <CountLabel>{roles.length} roles</CountLabel>

      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Team members</Th>
            <Th>Description</Th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <ClickableRow key={role.id} onClick={() => navigate(`/roles/${role.id}`)}>
              <Td><NameCell>{role.name}</NameCell></Td>
              <Td>{role.type && <TypeTag $system={role.type === 'System'}>{role.type}</TypeTag>}</Td>
              <Td><CountCell>{memberCount(role)}</CountCell></Td>
              <Td><DescCell>{role.description}</DescCell></Td>
            </ClickableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
