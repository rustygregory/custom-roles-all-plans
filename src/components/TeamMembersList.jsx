import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/mockData'

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
  margin: 0;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  overflow: hidden;
`

const Th = styled.th`
  text-align: left;
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #68737d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid #d8dcde;
  background: #f8f9f9;
`

const Td = styled.td`
  padding: 12px 16px;
  font-size: 14px;
  color: #2f3941;
  border-bottom: 1px solid #e9ebed;
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
  color: #1f73b7;
  font-weight: 500;
`

const TeamMembersCount = styled.span`
  font-size: 14px;
  color: #68737d;
  margin-left: 8px;
`

export default function TeamMembersList() {
  const navigate = useNavigate()

  return (
    <Container>
      <PageHeader>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <Title>Team members</Title>
          <TeamMembersCount>{teamMembers.length} members</TeamMembersCount>
        </div>
      </PageHeader>

      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Role</Th>
            <Th>Email</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map(member => (
            <ClickableRow key={member.id} onClick={() => navigate(`/team-members/${member.id}`)}>
              <Td><NameCell>{member.name}</NameCell></Td>
              <Td>{member.role}</Td>
              <Td>{member.email}</Td>
              <Td>{member.status}</Td>
            </ClickableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
