import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Anchor } from '@zendeskgarden/react-buttons'
import { useAppContext } from '../context/AppContext'
import Breadcrumbs from './Breadcrumbs'
import CreateRoleTypeModal from './CreateRoleTypeModal'

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

/* Flora Typography Large / Default — 26/32, fg/default (neutralHue.900). */
const Title = styled.h1`
  font-size: 26px;
  line-height: 32px;
  font-weight: 400;
  color: #2f3130;
  margin: 0 0 4px;
`

/* Flora Medium / Default — fg/default (main page copy, not subtle). */
const Subtitle = styled.p`
  font-size: 14px;
  color: #2f3130;
  margin: 0;
`

/* Flora Anchor (primary, underlined) + isExternal → Flora/Garden external icon. */
const SubtitleLink = styled(Anchor)`
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  vertical-align: baseline;
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

/* Flora fg/subtle — count metadata */
const CountLabel = styled.div`
  font-size: 14px;
  color: #646864;
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
  color: #2f3130;
  border-bottom: 1px solid #d8dcde;
`

const Td = styled.td`
  padding: 16px;
  font-size: 14px;
  color: #2f3130;
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
  color: #2f3130;
`

const Hint = styled.span`
  color: #646864;
  font-weight: 400;
`

/* Flora fg/subtle — description is supporting content */
const DescCell = styled.span`
  color: #646864;
`

const TypeTag = styled.span`
  display: inline-flex;
  align-items: center;
  background: ${p => p.$system ? '#e9ebed' : '#edf7f0'};
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 500;
  color: ${p => p.$system ? '#646864' : '#2f3130'};
`

const CountCell = styled.span`
  font-size: 14px;
  color: #2f3130;
`

export default function RolesList() {
  const navigate = useNavigate()
  const { roles, roleAssignments, version } = useAppContext()
  const [showRoleTypeModal, setShowRoleTypeModal] = useState(false)
  /* Role-type packages — V4 accordion, V5 domain map, V6 layer cake. */
  const isRolePackageVersion = version === 'v4' || version === 'v5' || version === 'v6' || version === 'v6.5' || version === 'v7'

  /* The count is the assignment list, nothing else — seeded roles start with
     their rosters, created roles start empty and grow as members are assigned. */
  const memberCount = (role) => (roleAssignments[role.id] || []).length

  const handleCreateRole = () => {
    if (isRolePackageVersion) {
      setShowRoleTypeModal(true)
      return
    }
    navigate('/roles/create')
  }

  return (
    <Container>
      {isRolePackageVersion && showRoleTypeModal && (
        <CreateRoleTypeModal
          onClose={() => setShowRoleTypeModal(false)}
          onContinue={(rolePackage) => {
            setShowRoleTypeModal(false)
            navigate('/roles/create', { state: { rolePackage } })
          }}
        />
      )}
      <Breadcrumbs items={[
        { label: 'People' },
        { label: 'Team' },
        { label: 'Roles' },
      ]} />
      <PageHeader>
        <div>
          <Title>Roles</Title>
          <Subtitle>
            Create, assign, and manage roles for your team.{' '}
            <SubtitleLink isExternal href="#">
              Learn about managing roles
            </SubtitleLink>
          </Subtitle>
        </div>
        <HeaderActions>
          <CompareLink>Compare roles</CompareLink>
          <AddButton onClick={handleCreateRole}>
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
              <Td>
                <NameCell>
                  {role.name}
                  {role.id === 'counselor' && <Hint> (Error state here)</Hint>}
                </NameCell>
              </Td>
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
