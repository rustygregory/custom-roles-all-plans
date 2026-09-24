import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Alert, Notification } from '@zendeskgarden/react-notifications'
import { Field, MediaInput } from '@zendeskgarden/react-forms'
import { Tag } from '@zendeskgarden/react-tags'
import Breadcrumbs from './Breadcrumbs'
import AIAgentsSection, { AI_AGENTS_SEARCH_TEXT } from './AIAgentsSection'
import ProductAccessSection, { productAccessSearchText } from './ProductAccessSection'
import SettingsCapsule from './SettingsCapsule'
import AssignRoleModal from './AssignRoleModal'
import PermissionsFilterDrawer from './PermissionsFilterDrawer'
import PermissionBlock, { PermissionFilterProvider } from './PermissionBlock'
import { useAppContext } from '../context/AppContext'
import {
  teamMembers,
  AI_ACCESS_LABELS,
  PRODUCT_CAPSULES,
  PRODUCT_CAPSULES_V3,
  RADIO_PRODUCTS,
  RADIO_PRODUCTS_V3,
  memberProductAccess,
} from '../data/mockData'
import {
  DEFAULT_PERMISSION_FILTERS,
  FILTER_GROUPS,
  FILTER_TOPICS,
  capsuleVisibleV3,
  countAppliedFilters,
  tagSearchText,
  blockVisibleV35,
} from '../data/permissionFilters'

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

/* One warning per member — each changed product is a name line followed by a
   bulleted "current to new" line. In V1 only the AI agents line ever appears;
   V2 adds one line per changed product. */
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
  margin: 0 0 32px;
`

const FormSection = styled.div`
  margin-bottom: 28px;
`

/* Matches the capsules so Open all sits on their right edge. */
const OpenAllRow = styled.div`
  display: flex;
  justify-content: ${p => p.$endOnly ? 'flex-end' : 'space-between'};
  align-items: flex-end;
  gap: 16px;
  box-sizing: border-box;
  max-width: ${p => p.$maxWidth || 630}px;
  margin-bottom: 12px;
`

const SearchFilterStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  max-width: ${p => p.$maxWidth || 400}px;
  width: 100%;
  margin-bottom: ${p => p.$spaceBeforeSettings ? 20 : 12}px;
`

/* Garden's search pattern: a MediaInput with the magnifier at the start. */
const SearchFieldWrap = styled.div`
  width: 100%;
  max-width: ${p => p.$maxWidth || 320}px;
  color: #68737d;
`

const FilterButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`

const FilterTagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  max-width: ${p => p.$maxWidth || 630}px;
  margin-bottom: 20px;
`

const ClearFiltersLink = styled.button.attrs({ type: 'button' })`
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

const GroupHeading = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #2f3941;
  margin: 28px 0 8px;
  max-width: ${p => p.$maxWidth || 400}px;

  &:first-of-type {
    margin-top: 0;
  }
`

const GroupDescription = styled.p`
  font-size: 13px;
  color: #68737d;
  margin: 0 0 12px;
  max-width: ${p => p.$maxWidth || 400}px;
  line-height: 1.45;
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

/* V3+: settings without the standalone Knowledge capsule (merged into products),
   then product capsules without Chat. Knowledge product uses id `knowledge`. */
const V3_SETTINGS_KEYS = CAPSULE_KEYS.filter(k => k !== 'ai-agents' && k !== 'knowledge')
const V3_PRODUCT_KEYS = PRODUCT_CAPSULES_V3.map(p => p.id)
const V3_CAPSULE_KEYS = [...V3_SETTINGS_KEYS, ...V3_PRODUCT_KEYS]

/* Block tag lists per settings capsule — used by V3.5 to know if anything remains. */
const SETTINGS_BLOCK_TAGS = {
  tickets: [['tickets'], ['tickets'], ['tickets'], ['tickets'], ['tickets'], ['tickets']],
  'custom-objects': [['tickets']],
  people: [
    ['user-management'],
    ['user-management'],
    ['user-management'],
    ['user-management'],
    ['user-management'],
    ['user-management'],
    ['user-management'],
    ['user-management'],
  ],
  channels: [['channels', 'tickets'], ['channels', 'tickets']],
  'agent-workflow': [['workflow'], ['workflow'], ['workflow'], ['workflow'], ['workflow'], ['workflow']],
  'business-rules': [['automation'], ['automation'], ['automation'], ['automation'], ['automation']],
  security: [['gdpr', 'security'], ['gdpr', 'security'], ['gdpr', 'user-management']],
  reporting: [['reporting'], ['reporting'], ['reporting']],
}

function settingsCapsuleHasBlocks(capsuleId, filters, version) {
  if (version !== 'v3.5' || !filters.topics.length) return true
  const blocks = SETTINGS_BLOCK_TAGS[capsuleId]
  if (!blocks) return true
  return blocks.some((tags) => blockVisibleV35(tags, filters))
}

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
  const isPanelVersion = version === 'v3' || version === 'v3.5'
  /* Capsules stay at the original 630px. Name / description / search are 400. */
  const capsuleMaxWidth = 630
  const fieldMaxWidth = 400
  const productList = isPanelVersion ? PRODUCT_CAPSULES_V3 : PRODUCT_CAPSULES
  const radioProducts = isPanelVersion ? RADIO_PRODUCTS_V3 : RADIO_PRODUCTS
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('Role saved successfully')
  const [showAssignModal, setShowAssignModal] = useState(false)
  const [showActionsMenu, setShowActionsMenu] = useState(false)
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false)
  const [permissionFilters, setPermissionFilters] = useState(DEFAULT_PERMISSION_FILTERS)
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
      for (const p of radioProducts) {
        const s = getProductAccess(aiAgentsKey, p.id)
        if (s.optedIn && !s.saved && s.accessLevel) {
          const current = memberProductAccess[member.id]?.[p.id]
          const next = AI_ACCESS_LABELS[s.accessLevel]
          if (current && current !== next) {
            list.push({ key: p.id, product: p.name, body: `${current} to ${next}` })
          }
        }
      }
    }
    if (accessPreviewActive && accessWillChange(member)) {
      list.push({ key: 'ai-agents', product: 'AI agents', body: `${member.aiAgentsAccess} to ${newAccessLabel}` })
    }
    return list
  }

  const [nameValue, setNameValue] = useState(role?.name || '')
  const [descValue, setDescValue] = useState(role?.description || '')

  const aiAgentsRef = useRef(null)

  /* Permissions live in capsules now. In V1 AI agents starts open — it's the
     section that version exists to show. In V2+ every capsule starts closed so
     the product list reads as a flat set of equals. Reset per role and per
     version switch so neither carries over a fully-expanded page. */
  const [openCapsules, setOpenCapsules] = useState(version === 'v1' ? { 'ai-agents': true } : {})

  /* Settings search: every capsule gets the query, opens itself on a hit, and
     highlights the matching words (handled inside SettingsCapsule). */
  const [settingsQuery, setSettingsQuery] = useState('')
  const q = settingsQuery.trim()

  useEffect(() => {
    setNameValue(role?.name || '')
    setDescValue(role?.description || '')
    setOpenCapsules(version === 'v1' ? { 'ai-agents': true } : {})
    setSettingsQuery('')
    setPermissionFilters(isPanelVersion ? DEFAULT_PERMISSION_FILTERS : { availableOnly: false, groups: [], topics: [] })
    setFilterDrawerOpen(false)
  }, [id, role?.name, role?.description, version, isPanelVersion])

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

  const capsuleKeys = version === 'v1'
    ? CAPSULE_KEYS
    : isPanelVersion
      ? V3_CAPSULE_KEYS
      : V2_CAPSULE_KEYS
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
    query: q,
    maxWidth: capsuleMaxWidth,
  })

  const showCapsule = (key) => {
    if (!isPanelVersion) return true
    if (!capsuleVisibleV3(key, permissionFilters)) return false
    if (version === 'v3.5' && SETTINGS_BLOCK_TAGS[key]) {
      return settingsCapsuleHasBlocks(key, permissionFilters, version)
    }
    return true
  }

  const removeFilterTag = (kind, id) => {
    setPermissionFilters((prev) => {
      if (kind === 'available') return { ...prev, availableOnly: false }
      if (kind === 'group') return { ...prev, groups: prev.groups.filter((g) => g !== id) }
      if (kind === 'topic') return { ...prev, topics: prev.topics.filter((t) => t !== id) }
      return prev
    })
  }

  const clearAllFilters = () => {
    setPermissionFilters({ availableOnly: false, groups: [], topics: [] })
  }

  const appliedFilterCount = countAppliedFilters(permissionFilters)
  const filterTags = []
  if (permissionFilters.availableOnly) {
    filterTags.push({
      key: 'available',
      kind: 'available',
      id: 'available',
      label: 'Only available settings',
    })
  }
  permissionFilters.groups.forEach((gid) => {
    const g = FILTER_GROUPS.find((x) => x.id === gid)
    if (g) {
      filterTags.push({
        key: `group-${gid}`,
        kind: 'group',
        id: gid,
        label: g.label,
      })
    }
  })
  permissionFilters.topics.forEach((tid) => {
    const t = FILTER_TOPICS.find((x) => x.id === tid)
    if (t) {
      filterTags.push({
        key: `topic-${tid}`,
        kind: 'topic',
        id: tid,
        label: t.label,
      })
    }
  })

  const withTags = (capsuleId, baseSearch = '') =>
    [baseSearch, isPanelVersion ? tagSearchText(capsuleId) : ''].filter(Boolean).join(' ')

  /* When a narrowing filter (group/topic) is applied, open every capsule it
     leaves visible — e.g. GDPR opens Security and privacy. */
  useEffect(() => {
    if (!isPanelVersion) return
    const narrowing =
      permissionFilters.groups.length > 0 || permissionFilters.topics.length > 0
    if (!narrowing) return

    const keys = version === 'v3.5' || version === 'v3' ? V3_CAPSULE_KEYS : V2_CAPSULE_KEYS
    const toOpen = keys.filter((key) => {
      if (!capsuleVisibleV3(key, permissionFilters)) return false
      if (version === 'v3.5' && SETTINGS_BLOCK_TAGS[key]) {
        return settingsCapsuleHasBlocks(key, permissionFilters, version)
      }
      return true
    })
    if (!toOpen.length) return

    setOpenCapsules((prev) => {
      const next = { ...prev }
      let changed = false
      for (const key of toOpen) {
        if (!next[key]) {
          next[key] = true
          changed = true
        }
      }
      return changed ? next : prev
    })
  }, [isPanelVersion, permissionFilters, version])

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


      {/* Permissions controls, then capsules. */}
      {isPanelVersion ? (
        <>
          <SearchFilterStack
            $maxWidth={fieldMaxWidth}
            $spaceBeforeSettings={filterTags.length === 0}
          >
            <SearchFieldWrap $maxWidth={fieldMaxWidth}>
              <Field>
                <Field.Label>Search permissions</Field.Label>
                <MediaInput
                  start={
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                      <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M11.2 11.2L15 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  }
                  value={settingsQuery}
                  onChange={(e) => setSettingsQuery(e.target.value)}
                />
              </Field>
            </SearchFieldWrap>
            <FilterButton onClick={() => setFilterDrawerOpen(true)}>
              Filter{appliedFilterCount > 0 ? ` (${appliedFilterCount})` : ''}
            </FilterButton>
          </SearchFilterStack>

          {filterTags.length > 0 && (
            <FilterTagsRow $maxWidth={capsuleMaxWidth}>
              {filterTags.map((tag) => (
                <Tag key={tag.key}>
                  <span>{tag.label}</span>
                  <Tag.Close aria-label="Remove filter" onClick={() => removeFilterTag(tag.kind, tag.id)} />
                </Tag>
              ))}
              <ClearFiltersLink onClick={clearAllFilters}>Clear filters</ClearFiltersLink>
            </FilterTagsRow>
          )}
        </>
      ) : (
        <OpenAllRow $maxWidth={capsuleMaxWidth}>
          <SearchFieldWrap $maxWidth={320}>
            <Field>
              <Field.Label>Search permissions</Field.Label>
              <MediaInput
                start={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                    <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M11.2 11.2L15 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                }
                value={settingsQuery}
                onChange={(e) => setSettingsQuery(e.target.value)}
              />
            </Field>
          </SearchFieldWrap>
          <OpenAllButton onClick={toggleAllCapsules}>
            {allCapsulesOpen ? 'Close all' : 'Open all'}
          </OpenAllButton>
        </OpenAllRow>
      )}

      <PermissionFilterProvider version={version} filters={permissionFilters}>
      {isPanelVersion && (
        <>
          <GroupHeading $maxWidth={capsuleMaxWidth}>Settings</GroupHeading>
          <GroupDescription $maxWidth={capsuleMaxWidth}>
            Support permissions for this role: tickets, people, channels, and more.
          </GroupDescription>
          {/* Right-aligned to capsules, 12px above them. */}
          <OpenAllRow $maxWidth={capsuleMaxWidth} $endOnly>
            <OpenAllButton onClick={toggleAllCapsules}>
              {allCapsulesOpen ? 'Close all' : 'Open all'}
            </OpenAllButton>
          </OpenAllRow>
        </>
      )}

      {showCapsule('tickets') && (
      <SettingsCapsule
        title="Tickets"
        description="Choose the ticket permissions for this role."
        searchText={withTags('tickets')}
        {...capsuleProps('tickets')}
      >
        <PermissionBlock tags={['tickets']}>
          <Label style={{ marginBottom: '12px' }}>Tickets they can access</Label>
          <RadioGroup>
            <RadioLabel><RadioInput name="ticket-access" defaultChecked /> Requested by and users in their organizations</RadioLabel>
            <RadioLabel><RadioInput name="ticket-access" /> Within their groups</RadioLabel>
            <RadioLabel><RadioInput name="ticket-access" /> Within their group and all public groups</RadioLabel>
            <RadioLabel><RadioInput name="ticket-access" /> All, including those in private groups</RadioLabel>
          </RadioGroup>
        </PermissionBlock>

        <PermissionBlock tags={['tickets']}>
          <SubSectionHeader>Manage suspended tickets</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput defaultChecked /> Each allowed <HintText>- Automatically suspends tickets that may be risky or malicious</HintText></CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['tickets']}>
          <SubSectionHeader>Edit ticket properties</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput defaultChecked /> Can tag and edit tickets and edit properties</CheckboxLabel>
            <CheckboxLabel><CheckboxInput /> Delete tickets</CheckboxLabel>
            <CheckboxLabel><CheckboxInput defaultChecked /> Restrict ticket content</CheckboxLabel>
            <CheckboxLabel><CheckboxInput defaultChecked /> Merge tickets</CheckboxLabel>
            <CheckboxLabel><CheckboxInput /> Edit ticket tags</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['tickets']}>
          <SubSectionHeader>Commenting permissions</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput defaultChecked /> Private comments only</CheckboxLabel>
            <CheckboxLabel><CheckboxInput defaultChecked /> Public and private comments</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['tickets']}>
          <SubSectionHeader>Manage ticket forms</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Can access the Ticket Forms admin page and create, edit, update, and delete ticket forms</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['tickets']}>
          <SubSectionHeader>Manage ticket fields</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Can customize Ticket Fields admin page and create, edit, update, and delete ticket fields</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {showCapsule('custom-objects') && (
      <SettingsCapsule
        title="Custom objects"
        description="No objects yet."
        searchText={withTags('custom-objects')}
        {...capsuleProps('custom-objects')}
      >
        <PermissionBlock tags={['tickets']}>
          <LinkText>Can view and edit objects</LinkText>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {showCapsule('people') && (
      <SettingsCapsule
        title="People"
        description="Choose the people permissions for this role."
        searchText={withTags('people')}
        {...capsuleProps('people')}
      >
        <PermissionBlock tags={['user-management']}>
          <Label style={{ marginBottom: '12px' }}>Manage and users</Label>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput defaultChecked /> View only</CheckboxLabel>
            <CheckboxLabel><CheckboxInput /> Add, edit, and assume profiles in organizations they belong to</CheckboxLabel>
            <CheckboxLabel><CheckboxInput /> Add, edit, delete, and assume profiles for any end user</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Search and view lists of end users</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput defaultChecked /> Find end users by name, email, phone, or organization. Without this, agents can only view individual and team profiles.</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Manage team members</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Not allowed</CheckboxLabel>
            <CheckboxLabel><CheckboxInput defaultChecked /> View only</CheckboxLabel>
            <CheckboxLabel><CheckboxInput /> Create, assign roles, add, and delete</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Manage groups</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Add and remove team members from groups</CheckboxLabel>
            <CheckboxLabel><CheckboxInput /> Create, edit, and delete groups</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Manage organizations</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Add, update, delete organizations</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Manage organization fields</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Can add, edit, and delete organization fields</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Manage roles</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Create, edit, and delete roles</CheckboxLabel>
            <CheckboxLabel><CheckboxInput /> Can only edit subdomain roles</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Manage user fields</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Can access the User Fields admin page and create, edit, update, and delete user fields</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {showCapsule('channels') && (
      <SettingsCapsule
        title="Channels"
        description="Choose the channel permissions for this role."
        searchText={withTags('channels')}
        {...capsuleProps('channels')}
      >
        <PermissionBlock tags={['tickets', 'channels']}>
          <Label style={{ marginBottom: '8px' }}>Manage channels and extensions</Label>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Channels include email, social messaging apps, and other means of communication. Extensions include triggers, automations, and integrations.</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['tickets', 'channels']}>
          <SubSectionHeader>Manage Facebook pages</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Can set Facebook pages to create tickets from Facebook wall posts</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {showCapsule('agent-workflow') && (
      <SettingsCapsule
        title="Agent workflow"
        description="Choose the agent workflow permissions for this role."
        searchText={withTags('agent-workflow')}
        {...capsuleProps('agent-workflow')}
      >
        <PermissionBlock tags={['workflow']}>
          <Label style={{ marginBottom: '12px' }}>Manage permissions</Label>
          <RadioGroup>
            <RadioLabel><RadioInput name="views" defaultChecked /> My views only</RadioLabel>
            <RadioLabel><RadioInput name="views" /> See views only</RadioLabel>
            <RadioLabel><RadioInput name="views" /> Add and edit personal views</RadioLabel>
            <RadioLabel><RadioInput name="views" /> Add and edit personal and group views</RadioLabel>
            <RadioLabel><RadioInput name="views" /> Add and edit personal, group, and global views</RadioLabel>
          </RadioGroup>
        </PermissionBlock>

        <PermissionBlock tags={['workflow']}>
          <SubSectionHeader>Limit number of views</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput defaultChecked /> Limit views to 12 shared views and 8 personal views</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['workflow']}>
          <SubSectionHeader>Access view filtering</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput defaultChecked /> Can view and filter views</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['workflow']}>
          <SubSectionHeader>Macro permissions</SubSectionHeader>
          <RadioGroup>
            <RadioLabel><RadioInput name="macros" /> Apply only</RadioLabel>
            <RadioLabel><RadioInput name="macros" defaultChecked /> Add and edit personal macros</RadioLabel>
            <RadioLabel><RadioInput name="macros" /> Add and edit personal and group macros</RadioLabel>
            <RadioLabel><RadioInput name="macros" /> Add and edit personal, group, and global macros</RadioLabel>
          </RadioGroup>
        </PermissionBlock>

        <PermissionBlock tags={['workflow']}>
          <SubSectionHeader>Access dynamic content</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Can view, edit, and add dynamic content</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['workflow']}>
          <SubSectionHeader>Manage contextual workspaces</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Can view, edit, and edit contextual workspaces</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {showCapsule('business-rules') && (
      <SettingsCapsule
        title="Business rules"
        description="Choose the business rules permissions for this role."
        searchText={withTags('business-rules')}
        {...capsuleProps('business-rules')}
      >
        <PermissionBlock tags={['automation']}>
          <Label style={{ marginBottom: '8px' }}>Automations</Label>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Can view, add, edit, and delete automations</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['automation']}>
          <SubSectionHeader>Skills</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Can view, add, edit, and delete skills</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['automation']}>
          <SubSectionHeader>Service level agreements</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Can view, add, edit, and delete service level agreements</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['automation']}>
          <SubSectionHeader>Triggers</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Can view, edit, add, and delete triggers</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['automation']}>
          <SubSectionHeader>Business rules analysis</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Can view, edit, add, and delete business rule analysis</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {showCapsule('security') && (
      <SettingsCapsule
        title="Security and privacy"
        description="Choose the security and privacy permissions for this role."
        searchText={withTags('security')}
        {...capsuleProps('security')}
      >
        <PermissionBlock tags={['gdpr', 'security']}>
          <Label style={{ marginBottom: '8px' }}>Manage access and security permissions for this role.</Label>
        </PermissionBlock>

        <PermissionBlock tags={['gdpr', 'security']}>
          <SubSectionHeader>Manage deletion schedules</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Admins or Admins automatically delete data like tickets.</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['gdpr', 'user-management']}>
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
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {/* V1/V2 keep the standalone Knowledge settings capsule. V3 merges it into
          the Knowledge product capsule below. */}
      {!isPanelVersion && (
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
      )}


      {showCapsule('reporting') && (
      <SettingsCapsule
        title="Reporting and analytics"
        description="Choose the reporting and analytics permissions for this role."
        searchText={withTags('reporting')}
        {...capsuleProps('reporting')}
      >
        <PermissionBlock tags={['reporting']}>
          <Label style={{ marginBottom: '12px' }}>Explore permissions</Label>
          <RadioGroup>
            <RadioLabel><RadioInput name="explore" /> No access</RadioLabel>
            <RadioLabel><RadioInput name="explore" defaultChecked /> View reports</RadioLabel>
            <RadioLabel><RadioInput name="explore" /> Create reports</RadioLabel>
            <RadioLabel><RadioInput name="explore" /> Create reports and manage permissions</RadioLabel>
          </RadioGroup>
        </PermissionBlock>

        <PermissionBlock tags={['reporting']}>
          <SubSectionHeader>Reports permissions</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput /> Refer to the Reports tab in Support, not reports within Explore. These who can also export data.</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['reporting']}>
          <SubSectionHeader>View Talk dashboard</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput defaultChecked /> Can track phone calls on the Talk dashboard</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {/* The ref is what the "Roles" link in a team member's Roles and access
          table scrolls to. In V1 this capsule sits last; in V2+ it moves into
          the product block below. */}
      {version === 'v1' && (
        <AiAgentsWrap ref={aiAgentsRef}>
          <SettingsCapsule
            title="AI agents"
            description="Choose whether this role can access AI agents."
            searchText={AI_AGENTS_SEARCH_TEXT}
            {...capsuleProps('ai-agents')}
          >
            <AIAgentsSection roleId={aiAgentsKey} query={q} />
          </SettingsCapsule>
        </AiAgentsWrap>
      )}

      {isPanelVersion && (
        <>
          <GroupHeading $maxWidth={capsuleMaxWidth}>Products</GroupHeading>
          <GroupDescription $maxWidth={capsuleMaxWidth}>
            Product access for this role. Radios are filler except AI agents.
          </GroupDescription>
        </>
      )}

      {/* V2: after settings, one capsule per product. V3+: same, without Chat,
          no opt-in, Knowledge merges manage + access. */}
      {version !== 'v1' && productList.map(p => {
        if (!showCapsule(p.id)) return null
        if (p.id === 'ai-agents') {
          return (
            <AiAgentsWrap ref={aiAgentsRef} key={p.id}>
              <SettingsCapsule
                title="AI agents"
                description="Choose whether this role can access AI agents."
                searchText={withTags('ai-agents', AI_AGENTS_SEARCH_TEXT)}
                {...capsuleProps('ai-agents')}
              >
                <AIAgentsSection
                  roleId={aiAgentsKey}
                  query={q}
                  directAccess={isPanelVersion}
                />
              </SettingsCapsule>
            </AiAgentsWrap>
          )
        }
        return (
          <SettingsCapsule
            key={p.id}
            title={p.name}
            description={
              p.id === 'knowledge' && isPanelVersion
                ? 'Choose product access and whether this role can manage Knowledge.'
                : `Choose whether this role can access ${p.name}.`
            }
            searchText={withTags(
              p.id,
              p.disabled
                ? 'Subscription limit reached'
                : productAccessSearchText(p.name, {
                    directAccess: isPanelVersion,
                    includeManage: p.id === 'knowledge' && isPanelVersion,
                  }),
            )}
            {...capsuleProps(p.id)}
          >
            {p.disabled
              ? <DisabledProductNote>Subscription limit reached</DisabledProductNote>
              : (
                <ProductAccessSection
                  roleId={aiAgentsKey}
                  product={p}
                  query={q}
                  directAccess={isPanelVersion}
                  includeManageKnowledge={p.id === 'knowledge' && isPanelVersion}
                />
              )}
          </SettingsCapsule>
        )
      })}
      </PermissionFilterProvider>
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
                      {changes.length > 0 && (
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

      {isPanelVersion && (
        <PermissionsFilterDrawer
          isOpen={filterDrawerOpen}
          onClose={() => setFilterDrawerOpen(false)}
          value={permissionFilters}
          onApply={setPermissionFilters}
        />
      )}
    </PageWrapper>
  )
}
