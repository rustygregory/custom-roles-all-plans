import { createContext, useContext, useState } from 'react'
import { roles as defaultRoles } from '../data/mockData'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [aiAgentsOptedIn, setAiAgentsOptedIn] = useState(false)
  const [aiAgentsSaved, setAiAgentsSaved] = useState(false)
  const [aiAgentsAccessLevel, setAiAgentsAccessLevel] = useState(null)
  const [roles, setRoles] = useState(defaultRoles)

  // Which role has AI agents migrated into it (only its assigned members are affected)
  const [aiAgentsRoleId, setAiAgentsRoleId] = useState(null)

  // roleId -> array of member ids assigned to that role
  const [roleAssignments, setRoleAssignments] = useState({})

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
      aiAgentsOptedIn,
      setAiAgentsOptedIn,
      aiAgentsSaved,
      setAiAgentsSaved,
      aiAgentsAccessLevel,
      setAiAgentsAccessLevel,
      roles,
      addRole,
      aiAgentsRoleId,
      setAiAgentsRoleId,
      roleAssignments,
      assignMembersToRole,
      isMemberAiAgentsMigrated,
      getMemberAssignedRole,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
