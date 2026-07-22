import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Notification } from '@zendeskgarden/react-notifications'
import Breadcrumbs from './Breadcrumbs'
import AIAgentsSection from './AIAgentsSection'
import AssignRoleModal from './AssignRoleModal'
import { useAppContext } from '../context/AppContext'
import { teamMembers } from '../data/mockData'

const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
`

const ScrollArea = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`

const Container = styled.div`
  padding: 24px 32px;
  flex: 1;
`

const SidePanel = styled.aside`
  width: 380px;
  min-width: 380px;
  padding: 24px;
  box-sizing: border-box;
  border-left: 1px solid #e9ebed;
  position: sticky;
  top: 0;
  align-self: flex-start;
  height: 100%;
  overflow-y: auto;
`

const SidePanelTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 24px;
`

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
`

const EmptyStateTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`

const EmptyStateText = styled.div`
  font-size: 14px;
  color: #68737d;
  line-height: 1.5;
  margin-bottom: 16px;
`

const SidePanelHint = styled.p`
  font-size: 14px;
  color: #68737d;
  line-height: 1.5;
  margin: 0 0 24px;
`

const MemberTable = styled.div`
  border-top: 1px solid #e9ebed;
`

const MemberTableHead = styled.div`
  padding: 12px 0;
  font-size: 13px;
  font-weight: 600;
  color: #2f3941;
  border-bottom: 1px solid #e9ebed;
`

const MemberRow = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid #e9ebed;
`

const MemberLink = styled.span`
  font-size: 14px;
  color: #1f73b7;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const BottomBar = styled.div`
  height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 32px;
  border-top: 1px solid #e9ebed;
  background: #fff;
`

const ToastWrapper = styled.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id="notifications.notification"] {
    min-width: 410px;
  }
`

const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`

const ActionsWrap = styled.div`
  position: relative;
  flex-shrink: 0;
  /* Container already pads 24px top / 32px right — add the remainder for 40px total */
  margin-top: 16px;
  margin-right: 8px;
`

const ActionsButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #1f73b7;
  border-color: #1f73b7;

  &:hover {
    color: #144a75;
    border-color: #144a75;
  }
`

const ActionsChevron = styled.span`
  display: inline-flex;
  transform: ${p => p.$open ? 'rotate(180deg)' : 'none'};
`

const ActionsMenu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 200px;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  padding: 8px 0;
  z-index: 20;
`

const ActionsMenuItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 20px;
  border: none;
  background: none;
  font-size: 15px;
  color: ${p => p.$danger ? '#cc3340' : '#2f3941'};
  cursor: pointer;

  &:hover {
    background: #f8f9f9;
  }
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 4px;
`

const Subtitle = styled.p`
  font-size: 13px;
  color: #68737d;
  margin: 0 0 24px;
`

const FormSection = styled.div`
  margin-bottom: 28px;
`

const SectionHeader = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 16px;
  padding-bottom: 8px;
`

const SubSectionHeader = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin: 16px 0 8px;
`

const FieldGroup = styled.div`
  margin-bottom: 16px;
`

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #2f3941;
  margin-bottom: 4px;
`

const HintText = styled.span`
  font-size: 12px;
  color: #68737d;
  font-weight: 400;
`

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 8px 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #1f73b7;
    box-shadow: 0 0 0 3px rgba(31, 115, 183, 0.15);
  }
`

const Textarea = styled.textarea`
  width: 100%;
  max-width: 400px;
  padding: 8px 12px;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  font-size: 14px;
  min-height: 60px;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #1f73b7;
    box-shadow: 0 0 0 3px rgba(31, 115, 183, 0.15);
  }
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
`

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 1px;
`

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
`

const RadioLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
`

const RadioInput = styled.input.attrs({ type: 'radio' })`
  width: 16px;
  height: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 1px;
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e9ebed;
  margin: 32px 0;
`


const LinkText = styled.span`
  color: #1f73b7;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`

export default function RoleDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const {
    aiAgentsOptedIn,
    setAiAgentsSaved,
    roles,
    addRole,
    setAiAgentsRoleId,
    roleAssignments,
    assignMembersToRole,
  } = useAppContext()
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('Role saved successfully')
  const [showAssignModal, setShowAssignModal] = useState(false)
  const [showActionsMenu, setShowActionsMenu] = useState(false)
  const actionsRef = useRef(null)

  const isCreate = id === 'create'
  const role = !isCreate ? roles.find(r => r.id === id) : null
  const roleName = role?.name || ''

  // After a new role is created we stay on the page in "saved" mode for this role.
  const [savedRoleId, setSavedRoleId] = useState(null)
  const currentRoleId = isCreate ? savedRoleId : id

  const [nameValue, setNameValue] = useState(role?.name || '')
  const [descValue, setDescValue] = useState(role?.description || '')

  const aiAgentsRef = useRef(null)

  useEffect(() => {
    setNameValue(role?.name || '')
    setDescValue(role?.description || '')
  }, [id, role?.name, role?.description])

  // Auto-scroll to the AI Agents section when arriving from the "Roles" link.
  useEffect(() => {
    if (location.state?.scrollToAiAgents) {
      setTimeout(() => {
        aiAgentsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [location.state])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (actionsRef.current && !actionsRef.current.contains(e.target)) {
        setShowActionsMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const assignedMemberIds = currentRoleId ? (roleAssignments[currentRoleId] || []) : []
  const assignedMembers = assignedMemberIds
    .map(mid => teamMembers.find(m => m.id === mid))
    .filter(Boolean)

  const hasSaved = isCreate ? Boolean(savedRoleId) : true
  // Actions menu shows as soon as the role is saved (same time as the Team members panel).
  const showActions = hasSaved

  const handleSave = () => {
    if (aiAgentsOptedIn) {
      setAiAgentsSaved(true)
    }
    if (isCreate && nameValue.trim()) {
      const newId = nameValue.toLowerCase().replace(/\s+/g, '-')
      if (!roles.some(r => r.id === newId)) {
        addRole({
          id: newId,
          name: nameValue.trim(),
          type: 'Custom',
          description: descValue.trim(),
          teamMembers: 0,
        })
      }
      setSavedRoleId(newId)
      if (aiAgentsOptedIn) {
        setAiAgentsRoleId(newId)
      }
    } else if (!isCreate && aiAgentsOptedIn) {
      setAiAgentsRoleId(id)
    }
    setToastMessage(isCreate ? 'Role created' : 'Role saved successfully')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  const handleAssign = (memberIds) => {
    if (currentRoleId) {
      assignMembersToRole(currentRoleId, memberIds)
    }
    setShowAssignModal(false)
    setToastMessage('Team member assigned')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  return (
    <PageWrapper>
      {showToast && (
        <ToastWrapper>
          <Notification type="success">
            <Notification.Title>{toastMessage}</Notification.Title>
            <Notification.Close aria-label="Close" onClick={() => setShowToast(false)} />
          </Notification>
        </ToastWrapper>
      )}
      <ScrollArea>
        <Container>
          <Breadcrumbs items={[
            { label: 'People', path: '/roles' },
            { label: 'Team', path: '/roles' },
            { label: 'Roles', path: '/roles' },
            { label: hasSaved && isCreate ? 'Edit role' : (isCreate ? 'Create role' : roleName) },
          ]} />

      <HeaderRow>
        <div>
          <Title>{isCreate ? (hasSaved ? nameValue : 'Create role') : roleName}</Title>
          <Subtitle>Learn about role permissions and access</Subtitle>
        </div>
        {showActions && (
          <ActionsWrap ref={actionsRef}>
            <ActionsButton onClick={() => setShowActionsMenu(o => !o)}>
              Actions
              <ActionsChevron $open={showActionsMenu}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ActionsChevron>
            </ActionsButton>
            {showActionsMenu && (
              <ActionsMenu>
                <ActionsMenuItem onClick={() => setShowActionsMenu(false)}>Clone role</ActionsMenuItem>
                <ActionsMenuItem onClick={() => { setShowActionsMenu(false); setShowAssignModal(true) }}>Assign role</ActionsMenuItem>
                <ActionsMenuItem $danger onClick={() => setShowActionsMenu(false)}>Delete role</ActionsMenuItem>
              </ActionsMenu>
            )}
          </ActionsWrap>
        )}
      </HeaderRow>

      {/* Name & Description */}
      <FormSection>
        <FieldGroup>
          <Label>Name* (required)</Label>
          <Input value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
        </FieldGroup>
        <FieldGroup>
          <Label>Description</Label>
          <Textarea value={descValue} onChange={(e) => setDescValue(e.target.value)} />
        </FieldGroup>
      </FormSection>


      {/* Permissions */}
      <SectionHeader>Permissions</SectionHeader>

      {/* Tickets */}
      <FormSection>
        <SubSectionHeader>Tickets</SubSectionHeader>
        <Label style={{ marginBottom: '12px' }}>Tickets they can access</Label>
        <RadioGroup>
          <RadioLabel><RadioInput name="ticket-access" defaultChecked /> Requested by and users in their organizations</RadioLabel>
          <RadioLabel><RadioInput name="ticket-access" /> Within their groups</RadioLabel>
          <RadioLabel><RadioInput name="ticket-access" /> Within their group and all public groups</RadioLabel>
          <RadioLabel><RadioInput name="ticket-access" /> All, including those in private groups</RadioLabel>
        </RadioGroup>

        <SubSectionHeader>Manage suspended tickets</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput defaultChecked /> Each allowed <HintText>- Automatically suspends tickets that may be risky or malicious</HintText></CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Edit ticket properties</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput defaultChecked /> Can tag and edit tickets and edit properties</CheckboxLabel>
          <CheckboxLabel><CheckboxInput /> Delete tickets</CheckboxLabel>
          <CheckboxLabel><CheckboxInput defaultChecked /> Restrict ticket content</CheckboxLabel>
          <CheckboxLabel><CheckboxInput defaultChecked /> Merge tickets</CheckboxLabel>
          <CheckboxLabel><CheckboxInput /> Edit ticket tags</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Commenting permissions</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput defaultChecked /> Private comments only</CheckboxLabel>
          <CheckboxLabel><CheckboxInput defaultChecked /> Public and private comments</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Manage ticket forms</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can access the Ticket Forms admin page and create, edit, update, and delete ticket forms</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Manage ticket fields</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can customize Ticket Fields admin page and create, edit, update, and delete ticket fields</CheckboxLabel>
        </CheckboxGroup>
      </FormSection>


      {/* Custom objects */}
      <FormSection>
        <SubSectionHeader>Custom objects</SubSectionHeader>
        <LinkText>Can view and edit objects</LinkText>
      </FormSection>


      {/* People */}
      <FormSection>
        <SubSectionHeader>People</SubSectionHeader>

        <Label style={{ marginBottom: '12px' }}>Manage and users</Label>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput defaultChecked /> View only</CheckboxLabel>
          <CheckboxLabel><CheckboxInput /> Add, edit, and assume profiles in organizations they belong to</CheckboxLabel>
          <CheckboxLabel><CheckboxInput /> Add, edit, delete, and assume profiles for any end user</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Search and view lists of end users</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput defaultChecked /> Find end users by name, email, phone, or organization. Without this, agents can only view individual and team profiles.</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Manage team members</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Not allowed</CheckboxLabel>
          <CheckboxLabel><CheckboxInput defaultChecked /> View only</CheckboxLabel>
          <CheckboxLabel><CheckboxInput /> Create, assign roles, add, and delete</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Manage groups</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Add and remove team members from groups</CheckboxLabel>
          <CheckboxLabel><CheckboxInput /> Create, edit, and delete groups</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Manage organizations</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Add, update, delete organizations</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Manage organization fields</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can add, edit, and delete organization fields</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Manage roles</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Create, edit, and delete roles</CheckboxLabel>
          <CheckboxLabel><CheckboxInput /> Can only edit subdomain roles</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Manage user fields</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can access the User Fields admin page and create, edit, update, and delete user fields</CheckboxLabel>
        </CheckboxGroup>
      </FormSection>


      {/* Channels */}
      <FormSection>
        <SubSectionHeader>Channels</SubSectionHeader>
        <Label style={{ marginBottom: '8px' }}>Manage channels and extensions</Label>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Channels include email, social messaging apps, and other means of communication. Extensions include triggers, automations, and integrations.</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Manage Facebook pages</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can set Facebook pages to create tickets from Facebook wall posts</CheckboxLabel>
        </CheckboxGroup>
      </FormSection>


      {/* Agent workflow */}
      <FormSection>
        <SubSectionHeader>Agent workflow</SubSectionHeader>

        <Label style={{ marginBottom: '12px' }}>Manage permissions</Label>
        <RadioGroup>
          <RadioLabel><RadioInput name="views" defaultChecked /> My views only</RadioLabel>
          <RadioLabel><RadioInput name="views" /> See views only</RadioLabel>
          <RadioLabel><RadioInput name="views" /> Add and edit personal views</RadioLabel>
          <RadioLabel><RadioInput name="views" /> Add and edit personal and group views</RadioLabel>
          <RadioLabel><RadioInput name="views" /> Add and edit personal, group, and global views</RadioLabel>
        </RadioGroup>

        <SubSectionHeader>Limit number of views</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput defaultChecked /> Limit views to 12 shared views and 8 personal views</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Access view filtering</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput defaultChecked /> Can view and filter views</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Macro permissions</SubSectionHeader>
        <RadioGroup>
          <RadioLabel><RadioInput name="macros" /> Apply only</RadioLabel>
          <RadioLabel><RadioInput name="macros" defaultChecked /> Add and edit personal macros</RadioLabel>
          <RadioLabel><RadioInput name="macros" /> Add and edit personal and group macros</RadioLabel>
          <RadioLabel><RadioInput name="macros" /> Add and edit personal, group, and global macros</RadioLabel>
        </RadioGroup>

        <SubSectionHeader>Access dynamic content</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can view, edit, and add dynamic content</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Manage contextual workspaces</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can view, edit, and edit contextual workspaces</CheckboxLabel>
        </CheckboxGroup>
      </FormSection>


      {/* Business rules */}
      <FormSection>
        <SubSectionHeader>Business rules</SubSectionHeader>

        <Label style={{ marginBottom: '8px' }}>Automations</Label>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can view, add, edit, and delete automations</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Skills</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can view, add, edit, and delete skills</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Service level agreements</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can view, add, edit, and delete service level agreements</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Triggers</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can view, edit, add, and delete triggers</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Business rules analysis</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can view, edit, add, and delete business rule analysis</CheckboxLabel>
        </CheckboxGroup>
      </FormSection>


      {/* Knowledge */}
      <FormSection>
        <SubSectionHeader>Knowledge</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput defaultChecked /> Manage Guide</CheckboxLabel>
          <HintText style={{ marginLeft: '24px', display: 'block' }}>Can by default have an admin and can manage articles, themes, and settings.</HintText>
        </CheckboxGroup>
      </FormSection>


      {/* Reporting and Analytics */}
      <FormSection>
        <SubSectionHeader>Reporting and Analytics</SubSectionHeader>

        <Label style={{ marginBottom: '12px' }}>Explore permissions</Label>
        <RadioGroup>
          <RadioLabel><RadioInput name="explore" /> No access</RadioLabel>
          <RadioLabel><RadioInput name="explore" defaultChecked /> View reports</RadioLabel>
          <RadioLabel><RadioInput name="explore" /> Create reports</RadioLabel>
          <RadioLabel><RadioInput name="explore" /> Create reports and manage permissions</RadioLabel>
        </RadioGroup>

        <SubSectionHeader>Reports permissions</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Refer to the Reports tab in Support, not reports within Explore. These who can also export data.</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>View Talk dashboard</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput defaultChecked /> Can track phone calls on the Talk dashboard</CheckboxLabel>
        </CheckboxGroup>
      </FormSection>


      {/* Security and privacy */}
      <FormSection>
        <SubSectionHeader>Security and privacy</SubSectionHeader>

        <Label style={{ marginBottom: '8px' }}>Manage access and security permissions for this role.</Label>

        <SubSectionHeader>Manage deletion schedules</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Admins or Admins automatically delete data like tickets.</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Data handling</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Hide end user personally identifiable information (PII) from this role</CheckboxLabel>
        </CheckboxGroup>

        <div style={{ marginTop: '12px' }}>
          <table style={{ fontSize: '13px', color: '#49545c' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '4px 16px 4px 0', fontWeight: 500 }}>User field</th>
                <th style={{ textAlign: 'left', padding: '4px 0', fontWeight: 500 }}>Access</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '4px 16px 4px 0' }}>Name</td><td>✓</td></tr>
              <tr><td style={{ padding: '4px 16px 4px 0' }}>Phone</td><td>✓</td></tr>
              <tr><td style={{ padding: '4px 16px 4px 0' }}>Email</td><td>✓</td></tr>
            </tbody>
          </table>
        </div>
      </FormSection>

      {/* AI Agents — NEW */}
      <div ref={aiAgentsRef}>
        <AIAgentsSection />
      </div>
        </Container>

        {hasSaved && (
          <SidePanel>
            <SidePanelTitle>Team members ({assignedMembers.length})</SidePanelTitle>
            {assignedMembers.length === 0 ? (
              <EmptyState>
                <EmptyStateTitle>No one in sight</EmptyStateTitle>
                <EmptyStateText>
                  There's nobody in this role. You can assign it to team members via their profiles.
                </EmptyStateText>
                <Button onClick={() => setShowAssignModal(true)}>Assign role</Button>
              </EmptyState>
            ) : (
              <>
                <SidePanelHint>
                  You can assign this role to team members via their profiles. To change roles
                  for a team member in this role, select their name to go to their profile.
                </SidePanelHint>
                <MemberTable>
                  <MemberTableHead>Name</MemberTableHead>
                  {assignedMembers.map(m => (
                    <MemberRow key={m.id}>
                      <MemberLink
                        onClick={() => navigate(`/team-members/${m.id}`, {
                          state: { fromRoleId: currentRoleId },
                        })}
                      >
                        {m.name}
                      </MemberLink>
                    </MemberRow>
                  ))}
                </MemberTable>
              </>
            )}
          </SidePanel>
        )}
      </ScrollArea>

      <BottomBar>
        <Button onClick={() => navigate('/roles')}>Cancel</Button>
        <Button isPrimary onClick={handleSave}>Save</Button>
      </BottomBar>

      {showAssignModal && (
        <AssignRoleModal
          onClose={() => setShowAssignModal(false)}
          onAssign={handleAssign}
        />
      )}
    </PageWrapper>
  )
}
