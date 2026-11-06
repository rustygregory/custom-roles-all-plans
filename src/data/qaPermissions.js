/* V5 exploration: ~40 fine-grained QA permissions grouped by job.
   Admin / Agent / Reviewer access levels seed checkbox presets.
   Customize can diverge from the preset without clearing the radio. */

export const QA_ACCESS_OPTIONS = [
  {
    value: 'admin',
    label: 'Admin',
    description: 'Full access to all QA activity, reviews, and workspace settings.',
  },
  {
    value: 'agent',
    label: 'Agent',
    description:
      'View personal reviews and conversations in assigned workspaces, with self-reviews when active.',
  },
  {
    value: 'reviewer',
    label: 'Reviewer',
    description: 'View team reviews and conduct peer evaluations. Cannot manage workspace settings.',
  },
]

/** Job-grouped permission catalog. ~6–7 items per group. */
export const QA_PERMISSION_GROUPS = [
  {
    id: 'review-work',
    title: 'Review work',
    permissions: [
      { id: 'view_own_reviews', label: 'View own reviews' },
      { id: 'view_team_reviews', label: 'View team reviews' },
      { id: 'view_all_reviews', label: 'View all reviews' },
      { id: 'filter_reviews_by_score', label: 'Filter reviews by score' },
      { id: 'filter_reviews_by_date', label: 'Filter reviews by date range' },
      { id: 'view_review_comments', label: 'View review comments' },
      { id: 'download_review_attachments', label: 'Download review attachments' },
    ],
  },
  {
    id: 'conduct-reviews',
    title: 'Conduct reviews',
    permissions: [
      { id: 'self_review', label: 'Perform self-reviews' },
      { id: 'peer_review', label: 'Perform peer reviews' },
      { id: 'manager_review', label: 'Perform manager reviews' },
      { id: 'edit_own_review_drafts', label: 'Edit own review drafts' },
      { id: 'submit_reviews', label: 'Submit completed reviews' },
      { id: 'dispute_reviews', label: 'Dispute reviews' },
      { id: 'reply_to_feedback', label: 'Reply to feedback' },
    ],
  },
  {
    id: 'coaching',
    title: 'Coaching and calibration',
    permissions: [
      { id: 'view_coaching_sessions', label: 'View coaching sessions' },
      { id: 'create_coaching_sessions', label: 'Create coaching sessions' },
      { id: 'assign_coaching_actions', label: 'Assign coaching action items' },
      { id: 'join_calibration', label: 'Join calibration sessions' },
      { id: 'lead_calibration', label: 'Lead calibration sessions' },
      { id: 'view_calibration_scores', label: 'View calibration scorecards' },
    ],
  },
  {
    id: 'workspace',
    title: 'Workspace configuration',
    permissions: [
      { id: 'view_workspaces', label: 'View workspaces' },
      { id: 'edit_assigned_workspace', label: 'Edit assigned workspace data' },
      { id: 'manage_workspace_members', label: 'Manage workspace members' },
      { id: 'configure_scorecards', label: 'Configure scorecards' },
      { id: 'configure_review_forms', label: 'Configure review forms' },
      { id: 'manage_auto_qa_rules', label: 'Manage auto-QA rules' },
      { id: 'manage_workspace_integrations', label: 'Manage workspace integrations' },
    ],
  },
  {
    id: 'reporting',
    title: 'Reporting and export',
    permissions: [
      { id: 'view_own_dashboard', label: 'View own dashboard' },
      { id: 'view_team_dashboard', label: 'View team dashboard' },
      { id: 'view_org_dashboard', label: 'View organization dashboard' },
      { id: 'export_review_data', label: 'Export review data' },
      { id: 'schedule_report_emails', label: 'Schedule report emails' },
      { id: 'share_dashboards', label: 'Share dashboards' },
    ],
  },
  {
    id: 'admin',
    title: 'Admin settings',
    permissions: [
      { id: 'manage_qa_roles', label: 'Manage QA roles and packages' },
      { id: 'manage_billing_usage', label: 'View billing and usage' },
      { id: 'manage_api_keys', label: 'Manage API keys' },
      { id: 'manage_sso_settings', label: 'Manage SSO settings' },
      { id: 'delete_reviews', label: 'Delete reviews' },
      { id: 'impersonate_reviewers', label: 'Impersonate reviewers for support' },
      { id: 'manage_account_settings', label: 'Manage account-wide QA settings' },
    ],
  },
]

/**
 * V5 domain map — conceptual domains (not UI screens).
 * Reviews merges view + conduct so the map stays at five nodes.
 */
export const QA_DOMAINS = [
  {
    id: 'reviews',
    title: 'Reviews',
    description: 'View reviews and conduct evaluations',
    groupIds: ['review-work', 'conduct-reviews'],
  },
  {
    id: 'coaching',
    title: 'Coaching',
    description: 'Coaching sessions and calibration',
    groupIds: ['coaching'],
  },
  {
    id: 'workspaces',
    title: 'Workspaces',
    description: 'Workspace setup, scorecards, and rules',
    groupIds: ['workspace'],
  },
  {
    id: 'reporting',
    title: 'Reporting',
    description: 'Dashboards, export, and sharing',
    groupIds: ['reporting'],
  },
  {
    id: 'admin',
    title: 'Admin',
    description: 'Account, security, and privileged actions',
    groupIds: ['admin'],
  },
].map((domain) => ({
  ...domain,
  groups: domain.groupIds.map((id) =>
    QA_PERMISSION_GROUPS.find((g) => g.id === id),
  ).filter(Boolean),
}))

const ALL_IDS = QA_PERMISSION_GROUPS.flatMap((g) => g.permissions.map((p) => p.id))

const on = (...ids) => {
  const set = new Set(ids)
  return Object.fromEntries(ALL_IDS.map((id) => [id, set.has(id)]))
}

const allOn = () => Object.fromEntries(ALL_IDS.map((id) => [id, true]))

/** Checkbox seeds per access level. */
export const QA_PRESETS = {
  admin: allOn(),
  agent: on(
    'view_own_reviews',
    'view_team_reviews',
    'filter_reviews_by_score',
    'filter_reviews_by_date',
    'view_review_comments',
    'download_review_attachments',
    'self_review',
    'edit_own_review_drafts',
    'submit_reviews',
    'dispute_reviews',
    'reply_to_feedback',
    'view_coaching_sessions',
    'view_workspaces',
    'edit_assigned_workspace',
    'view_own_dashboard',
    'view_team_dashboard',
  ),
  reviewer: on(
    'view_own_reviews',
    'view_team_reviews',
    'view_all_reviews',
    'filter_reviews_by_score',
    'filter_reviews_by_date',
    'view_review_comments',
    'download_review_attachments',
    'peer_review',
    'edit_own_review_drafts',
    'submit_reviews',
    'dispute_reviews',
    'view_coaching_sessions',
    'join_calibration',
    'view_calibration_scores',
    'view_workspaces',
    'view_own_dashboard',
    'view_team_dashboard',
    'view_org_dashboard',
  ),
}

export function qaPermissionsForAccess(accessLevel) {
  return { ...(QA_PRESETS[accessLevel] || QA_PRESETS.agent) }
}

export function qaPermissionsSearchText() {
  return [
    'Quality assurance',
    'Reset to default',
    'Open all',
    'Close all',
    'Customized',
    ...QA_ACCESS_OPTIONS.flatMap((o) => [o.label, o.description]),
    ...QA_PERMISSION_GROUPS.flatMap((g) => [
      g.title,
      ...g.permissions.map((p) => p.label),
    ]),
  ].join(' ')
}

export function groupsMatchingQuery(query) {
  const q = (query || '').trim().toLowerCase()
  if (!q) return []
  return QA_PERMISSION_GROUPS.filter((g) => {
    if (g.title.toLowerCase().includes(q)) return true
    return g.permissions.some((p) => p.label.toLowerCase().includes(q))
  }).map((g) => g.id)
}

export function isPresetMatch(accessLevel, values) {
  const preset = QA_PRESETS[accessLevel]
  if (!preset || !values) return true
  return ALL_IDS.every((id) => Boolean(values[id]) === Boolean(preset[id]))
}

export function groupsDivergedFromPreset(accessLevel, values) {
  const preset = QA_PRESETS[accessLevel]
  if (!preset || !values) return []
  return QA_PERMISSION_GROUPS.filter((g) =>
    g.permissions.some((p) => Boolean(values[p.id]) !== Boolean(preset[p.id])),
  ).map((g) => g.id)
}

export function qaDomainMapSearchText() {
  return [
    'Quality assurance',
    'All domains',
    'Reset to default',
    'Customized',
    'Choose a domain',
    ...QA_ACCESS_OPTIONS.flatMap((o) => [o.label, o.description]),
    ...QA_DOMAINS.flatMap((d) => [
      d.title,
      d.description,
      ...d.groups.flatMap((g) => [
        g.title,
        ...g.permissions.map((p) => p.label),
      ]),
    ]),
  ].join(' ')
}

export function domainsMatchingQuery(query) {
  const q = (query || '').trim().toLowerCase()
  if (!q) return []
  return QA_DOMAINS.filter((d) => {
    if (d.title.toLowerCase().includes(q)) return true
    if (d.description.toLowerCase().includes(q)) return true
    return d.groups.some(
      (g) =>
        g.title.toLowerCase().includes(q)
        || g.permissions.some((p) => p.label.toLowerCase().includes(q)),
    )
  }).map((d) => d.id)
}

export function qaLayerCakeSearchText() {
  return [
    'Quality assurance',
    'Role type',
    'Overrides',
    'account baseline',
    'Add an exception',
    'Full effective access',
    'Reset to default',
    'Inheriting',
    'Customized',
    'Added',
    'Removed',
    ...QA_ACCESS_OPTIONS.flatMap((o) => [o.label, o.description]),
    ...QA_PERMISSION_GROUPS.flatMap((g) => [
      g.title,
      ...g.permissions.map((p) => p.label),
    ]),
  ].join(' ')
}
