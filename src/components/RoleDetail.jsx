import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Alert, Notification } from '@zendeskgarden/react-notifications'
import Breadcrumbs from './Breadcrumbs'
import AIAgentsSection from './AIAgentsSection'
import ProductAccessSection from './ProductAccessSection'
import SettingsCapsule from './SettingsCapsule'
import AssignRoleModal from './AssignRoleModal'
import { useAppContext } from '../context/AppContext'
import { teamMembers, AI_ACCESS_LABELS, PRODUCT_CAPSULES, RADIO_PRODUCTS, memberProductAccess } from '../data/mockData'

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

const AccessWarning = styled(Alert)`
  position: relative;
  margin-top: 8px;
  padding: 8px 12px 8px 32px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.4;
  background-color: #f6eba6;
  border-color: #f6eba6;

  /* Garden ships the outlined warning glyph; swap it for the filled one. */
  [data-garden-id="notifications.icon"] {
    display: none;
  }

  [data-garden-id="notifications.title"] {
    margin: 0;
    color: #3b3405;
  }

  [data-garden-id="notifications.paragraph"] {
    margin: 0;
    color: #3b3405;
  }
`

const DisabledProductNote = styled.div`
  font-size: 14px;
  color: #87929d;
`

/* V2: one warning per member — each changed product is a name line followed by
   a bulleted "current to new" line, instead of one well per product. */
const WarningChangeList = styled.div`
  margin: 2px 0 0;
  font-size: 13px;
  line-height: 1.4;
  color: #3b3405;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const FilledWarningIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    style={{ position: 'absolute', left: 10, top: 10, color: '#7f7004' }}
  >
    <path
      fillRule="evenodd"
      fill="currentColor"
      d="M8.9 1.9c-.4-.8-1.4-.8-1.8 0L.7 12.6c-.5.8.1 1.9 1 1.9h12.6c.9 0 1.5-1.1 1-1.9L8.9 1.9zM7.25 6h1.5v4.5h-1.5V6zM8 13.25a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9z"
    />
  </svg>
)

const AiAgentsWrap = styled.div``

/* Container is a stretched flex item, so its bottom padding doesn't extend the
   scroll area — this block spacer does. 28px + the capsule's own 12px margin
   gives the 40px gap below the last capsule. */
const BottomSpacer = styled.div`
  height: 28px;
  flex-shrink: 0;
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

/* Matches the capsules' 630px so the button sits over their right edge rather
   than the page's. */
const OpenAllRow = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  max-width: 630px;
  margin-bottom: 12px;
`

const OpenAllButton = styled.button.attrs({ type: 'button' })`
  border: none;
  background: none;
  padding: 0;
  font-family: inherit;
  font-size: 14px;
  color: #1f73b7;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
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

const LinkText = styled.span`
  color: #1f73b7;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`

/* Order matches the roles page in the product. */
const CAPSULE_KEYS = [
  'tickets',
  'custom-objects',
  'people',
  'channels',
  'agent-workflow',
  'business-rules',
  'security',
  'knowledge',
  'reporting',
  'ai-agents',
]

/* V2: the settings capsules stay (minus AI agents, which moves), with one
   capsule per product appended in the Roles and access table's order. */
const V2_CAPSULE_KEYS = [...CAPSULE_KEYS.filter(k => k !== 'ai-agents'), ...PRODUCT_CAPSULES.map(p => p.id)]

export default function RoleDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const {
    version,
    getAiAgentsState,
    updateAiAgentsState,
    roles,
    addRole,
    setAiAgentsRoleId,
    roleAssignments,
    assignMembersToRole,
    getProductAccess,
    saveProductAccess,
    copyProductAccess,
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

  // The draft role on the create page keeps its AI agents state under 'create'
  // until it has an id; every role starts opted out.
  const aiAgentsKey = currentRoleId || 'create'
  const aiAgentsState = getAiAgentsState(aiAgentsKey)

  /* Opt-in preview: while opted in but not yet saved, the side panel shows each
     member's current access and warns about the level the role would move them
     to. Turning opt-in off or saving both end the preview. */
  const accessPreviewActive = aiAgentsState.optedIn && !aiAgentsState.saved && Boolean(aiAgentsState.accessLevel)
  const newAccessLabel = AI_ACCESS_LABELS[aiAgentsState.accessLevel]
  const accessWillChange = (member) =>
    !(aiAgentsState.accessLevel === 'no_access' && member.aiAgentsAccess === 'No Access')

  /* All pending access-change warnings for one member, in capsule order: the
     V2 product opt-ins first (Support → Chat), then AI agents. A member is only
     affected by a product change when their current level differs from the new
     one — matching the AI agents no-access/no-change rule. */
  const warningsFor = (member) => {
    const list = []
    if (version !== 'v1') {
      for (const p of RADIO_PRODUCTS) {
        const s = getProductAccess(aiAgentsKey, p.id)
        if (s.optedIn && !s.saved && s.accessLevel) {
          const current = memberProductAccess[member.id]?.[p.id]
          const next = AI_ACCESS_LABELS[s.accessLevel]
          if (current && current !== next) {
            list.push({ key: p.id, product: p.name, title: `${p.name} access change`, body: `${current} to ${next}` })
          }
        }
      }
    }
    if (accessPreviewActive && accessWillChange(member)) {
      list.push({ key: 'ai-agents', product: 'AI agents', title: 'AI agents access change', body: `${member.aiAgentsAccess} to ${newAccessLabel}` })
    }
    return list
  }

  const [nameValue, setNameValue] = useState(role?.name || '')
  const [descValue, setDescValue] = useState(role?.description || '')

  const aiAgentsRef = useRef(null)

  /* Permissions live in capsules now. AI agents starts open — it's the section
     this prototype exists to show, and the auto-scroll from a team member's
     Roles and access table lands on it. Reset per role so navigating from one
     role to another doesn't carry over a fully-expanded page. */
  const [openCapsules, setOpenCapsules] = useState({ 'ai-agents': true })

  useEffect(() => {
    setNameValue(role?.name || '')
    setDescValue(role?.description || '')
    setOpenCapsules({ 'ai-agents': true })
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
    if (isCreate && nameValue.trim()) {
      const newId = nameValue.toLowerCase().replace(/\s+/g, '-')
      if (!roles.some(r => r.id === newId)) {
        addRole({
          id: newId,
          name: nameValue.trim(),
          type: 'Custom',
          description: descValue.trim(),
        })
      }
      setSavedRoleId(newId)
      if (aiAgentsState.optedIn) {
        // The draft's opt-in moves onto the saved role and becomes permanent.
        updateAiAgentsState(newId, { ...aiAgentsState, saved: true })
        setAiAgentsRoleId(newId)
      }
      copyProductAccess('create', newId)
      // The draft is spent — the next Create role starts opted out.
      updateAiAgentsState('create', { optedIn: false, saved: false, accessLevel: null })
    } else if (!isCreate && aiAgentsState.optedIn) {
      updateAiAgentsState(id, { saved: true })
      setAiAgentsRoleId(id)
    }
    if (!isCreate) {
      saveProductAccess(id)
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

  const capsuleKeys = version === 'v1' ? CAPSULE_KEYS : V2_CAPSULE_KEYS
  const allCapsulesOpen = capsuleKeys.every(key => openCapsules[key])
  const toggleAllCapsules = () => {
    setOpenCapsules(
      allCapsulesOpen
        ? {}
        : Object.fromEntries(capsuleKeys.map(key => [key, true])),
    )
  }
  const toggleCapsule = (key) => {
    setOpenCapsules(prev => ({ ...prev, [key]: !prev[key] }))
  }
  const capsuleProps = (key) => ({
    open: Boolean(openCapsules[key]),
    onToggle: () => toggleCapsule(key),
  })

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
            { label: 'People' },
            { label: 'Team' },
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


      {/* Permissions, grouped into capsules. */}
      <OpenAllRow>
        <OpenAllButton onClick={toggleAllCapsules}>
          {allCapsulesOpen ? 'Close all' : 'Open all'}
        </OpenAllButton>
      </OpenAllRow>

      <SettingsCapsule
        title="Tickets"
        description="Choose the ticket permissions for this role."
        {...capsuleProps('tickets')}
      >
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
      </SettingsCapsule>


      <SettingsCapsule
        title="Custom objects"
        description="No objects yet."
        {...capsuleProps('custom-objects')}
      >
        <LinkText>Can view and edit objects</LinkText>
      </SettingsCapsule>


      <SettingsCapsule
        title="People"
        description="Choose the people permissions for this role."
        {...capsuleProps('people')}
      >
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
      </SettingsCapsule>


      <SettingsCapsule
        title="Channels"
        description="Choose the channel permissions for this role."
        {...capsuleProps('channels')}
      >
        <Label style={{ marginBottom: '8px' }}>Manage channels and extensions</Label>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Channels include email, social messaging apps, and other means of communication. Extensions include triggers, automations, and integrations.</CheckboxLabel>
        </CheckboxGroup>

        <SubSectionHeader>Manage Facebook pages</SubSectionHeader>
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput /> Can set Facebook pages to create tickets from Facebook wall posts</CheckboxLabel>
        </CheckboxGroup>
      </SettingsCapsule>


      <SettingsCapsule
        title="Agent workflow"
        description="Choose the agent workflow permissions for this role."
        {...capsuleProps('agent-workflow')}
      >
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
      </SettingsCapsule>


      <SettingsCapsule
        title="Business rules"
        description="Choose the business rules permissions for this role."
        {...capsuleProps('business-rules')}
      >
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
      </SettingsCapsule>


      <SettingsCapsule
        title="Security and privacy"
        description="Choose the security and privacy permissions for this role."
        {...capsuleProps('security')}
      >
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
      </SettingsCapsule>


      <SettingsCapsule
        title="Knowledge"
        description="Choose whether or not this role includes managing Knowledge."
        {...capsuleProps('knowledge')}
      >
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput defaultChecked /> Manage Guide</CheckboxLabel>
          <HintText style={{ marginLeft: '24px', display: 'block' }}>Can by default have an admin and can manage articles, themes, and settings.</HintText>
        </CheckboxGroup>
      </SettingsCapsule>


      <SettingsCapsule
        title="Reporting and analytics"
        description="Choose the reporting and analytics permissions for this role."
        {...capsuleProps('reporting')}
      >
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
      </SettingsCapsule>


      {/* The ref is what the "Roles" link in a team member's Roles and access
          table scrolls to. In V1 this capsule sits last; in V2 it moves into
          the product block below. */}
      {version === 'v1' && (
        <AiAgentsWrap ref={aiAgentsRef}>
          <SettingsCapsule
            title="AI agents"
            description="Choose whether this role can access AI agents."
            {...capsuleProps('ai-agents')}
          >
            <AIAgentsSection roleId={aiAgentsKey} />
          </SettingsCapsule>
        </AiAgentsWrap>
      )}

      {/* V2 (Scaled access change): after all the settings capsules, one capsule
          per product in the Roles and access table's order — Support, Knowledge,
          Analytics, Voice, Chat, AI agents, Quality assurance. */}
      {version !== 'v1' && PRODUCT_CAPSULES.map(p => p.id === 'ai-agents' ? (
        <AiAgentsWrap ref={aiAgentsRef} key={p.id}>
          <SettingsCapsule
            title="AI agents"
            description="Choose whether this role can access AI agents."
            {...capsuleProps('ai-agents')}
          >
            <AIAgentsSection roleId={aiAgentsKey} />
          </SettingsCapsule>
        </AiAgentsWrap>
      ) : (
        <SettingsCapsule
          key={p.id}
          title={p.name}
          description={`Choose whether this role can access ${p.name}.`}
          {...capsuleProps(p.id)}
        >
          {p.disabled
            ? <DisabledProductNote>Subscription limit reached</DisabledProductNote>
            : <ProductAccessSection roleId={aiAgentsKey} product={p} />}
        </SettingsCapsule>
      ))}
      <BottomSpacer />
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
                  {assignedMembers.map(m => {
                    const changes = warningsFor(m)
                    return (
                    <MemberRow key={m.id}>
                      <MemberLink
                        onClick={() => navigate(`/team-members/${m.id}`, {
                          state: { fromRoleId: currentRoleId },
                        })}
                      >
                        {m.name}
                      </MemberLink>
                      {version !== 'v1' ? (
                        changes.length > 0 && (
                          <AccessWarning type="warning" role="note">
                            <FilledWarningIcon />
                            <Alert.Title>{changes.length > 1 ? 'Access changes' : 'Access change'}</Alert.Title>
                            <WarningChangeList>
                              {changes.map(c => (
                                <div key={c.key}>
                                  <div>{c.product}</div>
                                  <div>&bull; {c.body}</div>
                                </div>
                              ))}
                            </WarningChangeList>
                          </AccessWarning>
                        )
                      ) : (
                        changes.map(w => (
                          <AccessWarning key={w.key} type="warning" role="note">
                            <FilledWarningIcon />
                            <Alert.Title>{w.title}</Alert.Title>
                            <Alert.Paragraph>{w.body}</Alert.Paragraph>
                          </AccessWarning>
                        ))
                      )}
                    </MemberRow>
                    )
                  })}
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
