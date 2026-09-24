/* Filter + discoverability metadata for V3 / V3.5 role permissions.
   Tags are "hidden" keywords used by search and by the filter drawer. */

export const FILTER_TOPICS = [
  { id: 'user-management', label: 'User management' },
  { id: 'gdpr', label: 'GDPR & privacy' },
  { id: 'tickets', label: 'Tickets' },
  { id: 'workflow', label: 'Agent workflow' },
  { id: 'automation', label: 'Automations & rules' },
  { id: 'reporting', label: 'Reporting' },
  { id: 'knowledge', label: 'Knowledge' },
  { id: 'ai-agents', label: 'AI agents' },
]

export const FILTER_GROUPS = [
  { id: 'settings', label: 'Settings' },
  { id: 'products', label: 'Products' },
]

/* Capsule-level metadata. `available: false` is plan-limited (e.g. QA). */
export const CAPSULE_META = {
  tickets: {
    group: 'settings',
    available: true,
    tags: ['tickets', 'workflow'],
  },
  'custom-objects': {
    group: 'settings',
    available: true,
    tags: ['tickets'],
  },
  people: {
    group: 'settings',
    available: true,
    tags: ['user-management'],
  },
  channels: {
    group: 'settings',
    available: true,
    tags: ['tickets', 'channels'],
  },
  'agent-workflow': {
    group: 'settings',
    available: true,
    tags: ['workflow'],
  },
  'business-rules': {
    group: 'settings',
    available: true,
    tags: ['automation', 'workflow'],
  },
  security: {
    group: 'settings',
    available: true,
    tags: ['gdpr', 'user-management', 'security'],
  },
  knowledge: {
    group: 'products',
    available: true,
    tags: ['knowledge'],
  },
  reporting: {
    group: 'settings',
    available: true,
    tags: ['reporting'],
  },
  support: {
    group: 'products',
    available: true,
    tags: ['tickets', 'user-management'],
  },
  analytics: {
    group: 'products',
    available: true,
    tags: ['reporting'],
  },
  voice: {
    group: 'products',
    available: true,
    tags: ['tickets', 'channels'],
  },
  chat: {
    group: 'products',
    available: true,
    tags: ['tickets', 'channels'],
  },
  'ai-agents': {
    group: 'products',
    available: true,
    tags: ['ai-agents'],
  },
  qa: {
    group: 'products',
    available: false,
    tags: ['reporting', 'workflow'],
  },
}

export const DEFAULT_PERMISSION_FILTERS = {
  availableOnly: true,
  groups: [],
  topics: [],
}

export const tagSearchText = (capsuleId) => {
  const meta = CAPSULE_META[capsuleId]
  if (!meta) return ''
  const topicLabels = FILTER_TOPICS
    .filter((t) => meta.tags.includes(t.id))
    .map((t) => t.label)
  return [...meta.tags, ...topicLabels, meta.group].join(' ')
}

/** V3: whole-capsule visibility. */
export function capsuleVisibleV3(capsuleId, filters) {
  const meta = CAPSULE_META[capsuleId]
  if (!meta) return true
  if (filters.availableOnly && !meta.available) return false
  if (filters.groups.length && !filters.groups.includes(meta.group)) return false
  if (filters.topics.length && !filters.topics.some((t) => meta.tags.includes(t))) return false
  return true
}

/** V3.5: capsule stays if it has matching blocks or capsule-level tag hit when topics set. */
export function capsuleVisibleV35(capsuleId, filters, hasVisibleBlocks) {
  const meta = CAPSULE_META[capsuleId]
  if (!meta) return true
  if (filters.availableOnly && !meta.available) return false
  if (filters.groups.length && !filters.groups.includes(meta.group)) return false
  if (filters.topics.length) {
    return hasVisibleBlocks || filters.topics.some((t) => meta.tags.includes(t))
  }
  return true
}

export function blockVisibleV35(blockTags, filters) {
  if (!filters.topics.length) return true
  return blockTags.some((t) => filters.topics.includes(t))
}

export function filtersAreActive(filters) {
  return Boolean(
    filters.availableOnly
    || filters.groups.length
    || filters.topics.length,
  )
}

export function countAppliedFilters(filters) {
  let n = 0
  if (filters.availableOnly) n += 1
  n += filters.groups.length
  n += filters.topics.length
  return n
}
