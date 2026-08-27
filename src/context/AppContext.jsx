import { createContext, useContext, useState } from 'react'
import { roles as defaultRoles, defaultRoleAssignments } from '../data/mockData'

const AppContext = createContext()

export function AppProvider({ children }) {
  // Prototype-bar version: 'v1' is the AI-agents-only flow, 'v2' scales the
  // access-change preview to every product capsule. V2 is the default.
  const [version, setVersion] = useState('v2')

  /* AI agents opt-in is per role: roleId -> { optedIn, saved, accessLevel }.
     Every role starts opted out — opting in on one role must not change what
     another role's AI agents capsule shows. The not-yet-saved role on the
     create page keeps its draft under the 'create' key; on save it's copied to
     the new role's id. */
  const [aiAgentsByRole, setAiAgentsByRole] = useState({})
  const [roles, setRoles] = useState(defaultRoles)

  const AI_AGENTS_DEFAULTS = { optedIn: false, saved: false, accessLevel: null }

  const getAiAgentsState = (roleId) => aiAgentsByRole[roleId] || AI_AGENTS_DEFAULTS

  const updateAiAgentsState = (roleId, patch) => {
    setAiAgentsByRole(prev => ({
      ...prev,
      [roleId]: { ...AI_AGENTS_DEFAULTS, ...prev[roleId], ...patch },
    }))
  }

  // Which role has AI agents migrated into it (only its assigned members are affected)
  const [aiAgentsRoleId, setAiAgentsRoleId] = useState(null)

  // roleId -> array of member ids assigned to that role. The four seeded roles
  // start with their rosters; user-driven assignments merge in.
  const [roleAssignments, setRoleAssignments] = useState(defaultRoleAssignments)

  /* V2 product opt-ins: roleId -> productId -> { optedIn, saved, accessLevel },
     the same shape the AI agents capsule uses. Missing entries fall back to
     opted-out defaults, so untouched roles need no state. */
  const PRODUCT_ACCESS_DEFAULTS = { optedIn: false, saved: false, accessLevel: null }
  const [productAccessByRole, setProductAccessByRole] = useState({})

  const getProductAccess = (roleId, productId) =>
    productAccessByRole[roleId]?.[productId] || PRODUCT_ACCESS_DEFAULTS

  const updateProductAccess = (roleId, productId, patch) => {
    setProductAccessByRole(prev => ({
      ...prev,
      [roleId]: {
        ...(prev[roleId] || {}),
        [productId]: { ...PRODUCT_ACCESS_DEFAULTS, ...prev[roleId]?.[productId], ...patch },
      },
    }))
  }

  const saveProductAccess = (roleId) => {
    setProductAccessByRole(prev => {
      const forRole = prev[roleId]
      if (!forRole) return prev
      const committed = Object.fromEntries(
        Object.entries(forRole).map(([pid, s]) => [pid, s.optedIn ? { ...s, saved: true } : s]),
      )
      return { ...prev, [roleId]: committed }
    })
  }

  // Create flow: the draft's opt-ins move onto the saved role and become permanent.
  const copyProductAccess = (fromId, toId) => {
    setProductAccessByRole(prev => {
      const { [fromId]: draft, ...rest } = prev
      if (!draft) return prev
      const committed = Object.fromEntries(
        Object.entries(draft).map(([pid, s]) => [pid, s.optedIn ? { ...s, saved: true } : s]),
      )
      return { ...rest, [toId]: committed }
    })
  }

  const addRole = (role) => {
    setRoles(prev => [...prev, role])
  }

  const assignMembersToRole = (roleId, memberIds) => {
    setRoleAssignments(prev => {
      const existing = prev[roleId] || []
      const merged = Array.from(new Set([...existing, ...memberIds]))
      return { ...prev, [roleId]: merged }
    })
  }

  // Is this member affected by the AI agents migration? (assigned to the migrated role)
  const isMemberAiAgentsMigrated = (memberId) => {
    if (!aiAgentsRoleId) return false
    return (roleAssignments[aiAgentsRoleId] || []).includes(memberId)
  }

  // The most recently assigned role for a member (drives the Support row's role dropdown).
  const getMemberAssignedRole = (memberId) => {
    const roleId = Object.keys(roleAssignments).find(
      rid => (roleAssignments[rid] || []).includes(memberId)
    )
    if (!roleId) return null
    return roles.find(r => r.id === roleId) || null
  }

  return (
    <AppContext.Provider value={{
      version,
      setVersion,
      getAiAgentsState,
      updateAiAgentsState,
      roles,
      addRole,
      aiAgentsRoleId,
      setAiAgentsRoleId,
      roleAssignments,
      assignMembersToRole,
      isMemberAiAgentsMigrated,
      getMemberAssignedRole,
      getProductAccess,
      updateProductAccess,
      saveProductAccess,
      copyProductAccess,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
