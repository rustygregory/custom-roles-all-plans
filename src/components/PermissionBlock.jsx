import { createContext, useContext } from 'react'
import styled from 'styled-components'
import { blockVisibleV35 } from '../data/permissionFilters'

const PermissionFilterContext = createContext({
  version: 'v2',
  filters: { availableOnly: false, groups: [], topics: [] },
})

export function PermissionFilterProvider({ version, filters, children }) {
  return (
    <PermissionFilterContext.Provider value={{ version, filters }}>
      {children}
    </PermissionFilterContext.Provider>
  )
}

export function usePermissionFilter() {
  return useContext(PermissionFilterContext)
}

/* One section unit inside a capsule body — SettingsCapsule gaps these at 24px. */
const Block = styled.div``

/* Wraps a permission subsection. In V3.5 with topic filters active, unmatched
   blocks are removed from the capsule. V3 and earlier always render. */
export default function PermissionBlock({ tags = [], children }) {
  const { version, filters } = usePermissionFilter()
  if (version === 'v3.5' && !blockVisibleV35(tags, filters)) return null
  return <Block>{children}</Block>
}
