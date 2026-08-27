import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { rolesAndAccessData, AI_ACCESS_LABELS } from '../data/mockData'

const TableWrapper = styled.div`
  max-width: 640px;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  overflow: hidden;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const Th = styled.th`
  text-align: left;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 400;
  color: #68737d;
  border-bottom: 1px solid #d8dcde;
`

const Td = styled.td`
  padding: 20px 16px;
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

const ProductCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const ProductIcon = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #68737d;
`

const Select = styled.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 14px;
  color: #2f3941;
  background: #fff;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2368737D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  cursor: pointer;
  min-width: 180px;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #2f3941;
`

const InfoIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #87929d;
  font-size: 10px;
  color: #87929d;
  margin-left: 8px;
  cursor: help;
`

const DisabledText = styled.span`
  color: #87929d;
  font-size: 14px;
`

const MigratedMessage = styled.div`
  font-size: 14px;
  color: #49545c;
`

const RolesLink = styled.span`
  color: #1f73b7;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #144a75;
  }
`

export default function RolesAndAccessTab({ memberId }) {
  const { isMemberAiAgentsMigrated, aiAgentsRoleId, roles, getMemberAssignedRole, getAiAgentsState } = useAppContext()
  const navigate = useNavigate()

  // AI agents is only migrated for members assigned to the migrated role.
  const migrated = memberId ? isMemberAiAgentsMigrated(memberId) : false
  const migratedRole = roles.find(r => r.id === aiAgentsRoleId)
  const migratedRoleName = migratedRole?.name || 'Roles'
  const migratedAccessLabel = migrated
    ? AI_ACCESS_LABELS[getAiAgentsState(aiAgentsRoleId).accessLevel]
    : null

  // The role this member is assigned to (drives the Support product's role dropdown).
  const assignedRole = memberId ? getMemberAssignedRole(memberId) : null

  const goToMigratedRole = () => {
    navigate(`/roles/${aiAgentsRoleId}`, { state: { scrollToAiAgents: true } })
  }

  const renderAccessCell = (item) => {
    if (item.access === 'yes') {
      return <span>Yes</span>
    }
    if (item.access === 'checkbox') {
      return <Checkbox defaultChecked={item.checked} />
    }
    if (item.access === 'disabled') {
      return null
    }
    if (item.access === 'ai_agents') {
      // Once the role has migrated the product's settings, the Access checkbox
      // goes with them — the row carries the role's access level instead.
      if (migrated) return migratedAccessLabel ? <span>{migratedAccessLabel}</span> : null
      return <Checkbox defaultChecked={item.checked} />
    }
    return null
  }

  const renderRoleCell = (item) => {
    if (item.access === 'disabled') {
      return <DisabledText>{item.message}</DisabledText>
    }
    if (item.access === 'ai_agents' && migrated) {
      return (
        <MigratedMessage>
          Settings for {item.product} can be found in roles.
          <br />
          <RolesLink onClick={goToMigratedRole}>View {migratedRoleName} role</RolesLink>
        </MigratedMessage>
      )
    }
    // The Support product's role reflects whatever role the member is assigned.
    if (item.icon === 'support' && assignedRole) {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Select value={assignedRole.name} onChange={() => {}}>
            <option value={assignedRole.name}>{assignedRole.name}</option>
          </Select>
        </div>
      )
    }
    if (item.role) {
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Select defaultValue={item.role}>
            <option value="Admin">Admin</option>
            <option value="Agent">Agent</option>
            <option value="Client admin">Client admin</option>
          </Select>
          {item.hasInfo && <InfoIcon>i</InfoIcon>}
        </div>
      )
    }
    return null
  }

  const productIcons = {
    support: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14.4c-1.77 0-3.2-1.43-3.2-3.2h1.6c0 .88.72 1.6 1.6 1.6s1.6-.72 1.6-1.6h1.6c0 1.77-1.43 3.2-3.2 3.2zM10 4c2.65 0 4.8 2.15 4.8 4.8v1.6H5.2V8.8C5.2 6.15 7.35 4 10 4z" fill="currentColor"/>
      </svg>
    ),
    knowledge: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 3h12v14H4V3zm2 2v10h8V5H6zm1 2h6v1H7V7zm0 3h6v1H7v-1zm0 3h4v1H7v-1z" fill="currentColor"/>
      </svg>
    ),
    analytics: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 15h3V8H4v7zm5 0h3V5H9v10zm5 0h3v-4h-3v4z" fill="currentColor"/>
      </svg>
    ),
    voice: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5.2 3h2.4l2 4-1.5 1.1c.7 1.4 1.8 2.5 3.2 3.2L12.4 9.8l4 2v2.4c0 .9-.7 1.6-1.6 1.6C8.8 15.8 4.2 11.2 4.2 4.6c0-.9.7-1.6 1.6-1.6z" fill="currentColor"/>
      </svg>
    ),
    chat: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h12v9H7l-3 3V4zm2 3h8v1H6V7zm0 3h6v1H6v-1z" fill="currentColor"/>
      </svg>
    ),
    ai_agents: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L4 5v4c0 4.1 2.6 7.8 6 9 3.4-1.2 6-4.9 6-9V5l-6-3zm-1 12l-3-3 1.4-1.4L9 11.2l3.6-3.6L14 9l-5 5z" fill="currentColor"/>
      </svg>
    ),
    qa: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h12v12H4V4zm2 2v8h8V6H6zm1 1h2v2H7V7zm3 0h2v2h-2V7zm-3 3h2v2H7v-2zm3 0h2v2h-2v-2z" fill="currentColor"/>
      </svg>
    ),
  }

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <Th>Product</Th>
            <Th>Role</Th>
            <Th>Access</Th>
          </tr>
        </thead>
        <tbody>
          {rolesAndAccessData.map((item, i) => (
            <Row key={i}>
              <Td>
                <ProductCell>
                  <ProductIcon>
                    {productIcons[item.icon]}
                  </ProductIcon>
                  {item.product}
                </ProductCell>
              </Td>
              <Td>{renderRoleCell(item)}</Td>
              <Td>{renderAccessCell(item)}</Td>
            </Row>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  )
}
