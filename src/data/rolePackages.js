/* Starting packages for Create role — chosen in the role-type modal, then
   adjustable on the role page. Each package seeds settings + product access. */

export const ROLE_PACKAGE_OPTIONS = [
  {
    value: 'admin',
    label: 'Admin',
    description: 'Can see everything and manage all settings.',
  },
  {
    value: 'agent',
    label: 'Agent',
    description: 'Can do day-to-day work within their assigned scope.',
  },
  {
    value: 'reviewer',
    label: 'Reviewer',
    description: 'Can review work but can’t change settings.',
  },
]

/**
 * Radio values and checkbox flags for settings capsules.
 * Product access levels use the same keys as ProductAccessSection / QA.
 */
export const EMPTY_PERMISSIONS = {
  ticketAccess: 'org',
  manageSuspended: false,
  editTicketProperties: false,
  deleteTickets: false,
  restrictTicketContent: false,
  mergeTickets: false,
  editTicketTags: false,
  privateComments: false,
  publicPrivateComments: false,
  manageTicketForms: false,
  manageTicketFields: false,

  endUsersViewOnly: false,
  endUsersOrgEdit: false,
  endUsersAnyEdit: false,
  searchEndUsers: false,
  teamMembers: 'view',
  manageGroupMembers: false,
  manageGroups: false,
  manageOrganizations: false,
  manageOrgFields: false,
  manageRoles: false,
  manageSubdomainRoles: false,
  manageUserFields: false,

  manageChannels: false,
  manageFacebook: false,

  views: 'my',
  limitViews: false,
  filterViews: false,
  macros: 'personal',
  dynamicContent: false,
  contextualWorkspaces: false,

  automations: false,
  skills: false,
  slas: false,
  triggers: false,
  businessRulesAnalysis: false,

  deletionSchedules: false,
  hidePii: false,

  manageGuide: false,

  explore: 'view',
  supportReports: false,
  talkDashboard: false,
}

/** @type {Record<string, typeof EMPTY_PERMISSIONS>} */
export const ROLE_PACKAGE_PERMISSIONS = {
  admin: {
    ...EMPTY_PERMISSIONS,
    ticketAccess: 'all',
    manageSuspended: true,
    editTicketProperties: true,
    deleteTickets: true,
    restrictTicketContent: true,
    mergeTickets: true,
    editTicketTags: true,
    privateComments: true,
    publicPrivateComments: true,
    manageTicketForms: true,
    manageTicketFields: true,

    endUsersViewOnly: true,
    endUsersOrgEdit: true,
    endUsersAnyEdit: true,
    searchEndUsers: true,
    teamMembers: 'manage',
    manageGroupMembers: true,
    manageGroups: true,
    manageOrganizations: true,
    manageOrgFields: true,
    manageRoles: true,
    manageSubdomainRoles: true,
    manageUserFields: true,

    manageChannels: true,
    manageFacebook: true,

    views: 'global',
    limitViews: false,
    filterViews: true,
    macros: 'global',
    dynamicContent: true,
    contextualWorkspaces: true,

    automations: true,
    skills: true,
    slas: true,
    triggers: true,
    businessRulesAnalysis: true,

    deletionSchedules: true,
    hidePii: false,

    manageGuide: true,

    explore: 'manage',
    supportReports: true,
    talkDashboard: true,
  },

  agent: {
    ...EMPTY_PERMISSIONS,
    ticketAccess: 'groups',
    manageSuspended: true,
    editTicketProperties: true,
    deleteTickets: false,
    restrictTicketContent: true,
    mergeTickets: true,
    editTicketTags: false,
    privateComments: true,
    publicPrivateComments: true,
    manageTicketForms: false,
    manageTicketFields: false,

    endUsersViewOnly: true,
    endUsersOrgEdit: true,
    endUsersAnyEdit: false,
    searchEndUsers: true,
    teamMembers: 'view',
    manageGroupMembers: false,
    manageGroups: false,
    manageOrganizations: false,
    manageOrgFields: false,
    manageRoles: false,
    manageSubdomainRoles: false,
    manageUserFields: false,

    manageChannels: false,
    manageFacebook: false,

    views: 'personal',
    limitViews: true,
    filterViews: true,
    macros: 'personal',
    dynamicContent: false,
    contextualWorkspaces: false,

    automations: false,
    skills: false,
    slas: false,
    triggers: false,
    businessRulesAnalysis: false,

    deletionSchedules: false,
    hidePii: false,

    manageGuide: false,

    explore: 'view',
    supportReports: false,
    talkDashboard: true,
  },

  reviewer: {
    ...EMPTY_PERMISSIONS,
    ticketAccess: 'all',
    manageSuspended: false,
    editTicketProperties: false,
    deleteTickets: false,
    restrictTicketContent: false,
    mergeTickets: false,
    editTicketTags: false,
    privateComments: true,
    publicPrivateComments: false,
    manageTicketForms: false,
    manageTicketFields: false,

    endUsersViewOnly: true,
    endUsersOrgEdit: false,
    endUsersAnyEdit: false,
    searchEndUsers: true,
    teamMembers: 'view',
    manageGroupMembers: false,
    manageGroups: false,
    manageOrganizations: false,
    manageOrgFields: false,
    manageRoles: false,
    manageSubdomainRoles: false,
    manageUserFields: false,

    manageChannels: false,
    manageFacebook: false,

    views: 'see',
    limitViews: true,
    filterViews: true,
    macros: 'apply',
    dynamicContent: false,
    contextualWorkspaces: false,

    automations: false,
    skills: false,
    slas: false,
    triggers: false,
    businessRulesAnalysis: false,

    deletionSchedules: false,
    hidePii: true,

    manageGuide: false,

    explore: 'view',
    supportReports: false,
    talkDashboard: false,
  },
}

/** Product access levels seeded per package (ids match PRODUCT_CAPSULES). */
export const ROLE_PACKAGE_PRODUCTS = {
  admin: {
    support: 'client_admin',
    knowledge: 'client_admin',
    analytics: 'client_admin',
    voice: 'client_admin',
    chat: 'client_admin',
    qa: 'admin',
    'ai-agents': 'client_admin',
  },
  agent: {
    support: 'client_user',
    knowledge: 'client_user',
    analytics: 'client_user',
    voice: 'client_user',
    chat: 'client_user',
    qa: 'agent',
    'ai-agents': 'client_user',
  },
  reviewer: {
    support: 'client_editor',
    knowledge: 'no_access',
    analytics: 'client_user',
    voice: 'no_access',
    chat: 'no_access',
    qa: 'reviewer',
    'ai-agents': 'no_access',
  },
}

export function permissionsForPackage(packageId) {
  return { ...(ROLE_PACKAGE_PERMISSIONS[packageId] || EMPTY_PERMISSIONS) }
}

export function productsForPackage(packageId) {
  return { ...(ROLE_PACKAGE_PRODUCTS[packageId] || {}) }
}

/** True when settings match the package preset (no local tweaks). */
export function isRolePackagePermissionsMatch(packageId, permissions) {
  const preset = ROLE_PACKAGE_PERMISSIONS[packageId]
  if (!preset || !permissions) return true
  return Object.keys(EMPTY_PERMISSIONS).every(
    (key) => permissions[key] === preset[key],
  )
}

/**
 * True when product access levels match the package.
 * `getLevel(productId)` should return the current accessLevel (or null).
 */
export function isRolePackageProductsMatch(packageId, getLevel) {
  const preset = ROLE_PACKAGE_PRODUCTS[packageId]
  if (!preset || typeof getLevel !== 'function') return true
  return Object.entries(preset).every(
    ([productId, level]) => getLevel(productId) === level,
  )
}

/** Short bullets under each role-type radio in the create modal. */
export const ROLE_PACKAGE_PREVIEW = {
  admin: [
    'Full ticket access, including private groups',
    'Manage people, channels, workflow, and business rules',
    'Admin-level product access (Support, Knowledge, Analytics, Voice, QA, AI agents)',
  ],
  agent: [
    'Tickets within their groups; day-to-day edit and comment',
    'Personal views and macros; limited people access',
    'User-level product access; QA Agent package',
  ],
  reviewer: [
    'View tickets broadly; private comments only',
    'View-oriented workflow; no admin settings',
    'QA Reviewer package; limited or no other product admin',
  ],
}
