const coreMembers = [
  { id: 'fillmore', name: 'Fillmore', role: 'Admin', email: 'fill.more@email.com', status: 'Active', brand: 'Dinoco', extraBrands: 1, group: 'Support', productAccess: 'Support, Knowledge, AI agents', lastSignIn: 'Never', aiAgentsAccess: 'Full Access' },
  { id: 'mater', name: 'T. Mater', role: 'Test API', email: 't.mater@email.com', status: 'Active', brand: 'Rusteze', extraBrands: 0, group: 'Support', productAccess: 'Support, Knowledge', lastSignIn: 'Never', aiAgentsAccess: 'No Access' },
  { id: 'jams-concord', name: 'Jams Concord', role: 'Test API', email: 'jams@email.com', status: 'Active', brand: 'Dinoco', extraBrands: 1, group: 'Support', productAccess: 'Support, Knowledge', lastSignIn: 'Never', aiAgentsAccess: 'Limited Access' },
  { id: 'kim-pop', name: 'Kim Pop', role: 'Test API', email: 'email@email.com', status: 'Active', brand: 'Dinoco', extraBrands: 1, group: 'Support', productAccess: 'Support, Knowledge', lastSignIn: 'Never', aiAgentsAccess: 'Full Access' },
  { id: 'masked-agent', name: 'Masked Agent James Carter', role: 'Test API', email: 'masked.agent.james.carter@gmail.com', status: 'Active', brand: 'Rusteze', extraBrands: 0, group: 'Support', productAccess: 'Support, Knowledge, Chat', lastSignIn: 'Nov 14, 2025', aiAgentsAccess: 'No Access' },
]

/* Seeded rosters — which members belong to each seeded role. They drive both
   the Team members count in the roles table and the Team members side panel on
   each role's page: Admin 6, Contributor 10, Subtle agent 15, Advisor 327
   (scaled for V2.5 preview), Counselor 13. The five core members above are
   deliberately not in any roster, so the create-role → assign-member demo
   flow always starts from empty. */
const roleRosters = {
  admin: [
    'Lightning McQueen', 'Sally Carrera', 'Doc Hudson', 'Ramone', 'Flo',
    'Sheriff',
  ],
  contributor: [
    'Boost', 'DJ', 'Wingo', 'Snot Rod', 'Finn McMissile', 'Holley Shiftwell',
    'Francesco Bernoulli', 'Professor Zundapp', 'Grem', 'Acer',
  ],
  'light-agent': [
    'Cruz Ramirez', 'Smokey', 'Jackson Storm', 'Sterling', 'Natalie Certain',
    'Miss Fritter', 'Cal Weathers', 'Bobby Swift', 'Brick Yardley',
    'River Scott', 'Junior Moon', 'Louise Nash', 'Darrell Cartrip',
    'Bob Cutlass', 'Brent Mustangburger',
  ],
  advisor: [
    'Woody', 'Buzz Lightyear', 'Jessie', 'Bullseye', 'Rex', 'Hamm',
    'Slinky Dog', 'Bo Peep', 'Mr. Potato Head', 'Mrs. Potato Head', 'Forky',
    'Ducky', 'Bunny', 'Duke Caboom', 'Gabby Gabby', 'Lotso Bear', 'Ken',
    'Barbie', 'Wheezy', 'RC',
    /* Continue numbering after the 20 named members — Advisor Agent 21…327. */
    ...Array.from({ length: 307 }, (_, i) => `Advisor Agent ${i + 21}`),
  ],
  counselor: [
    'Joy', 'Sadness', 'Anger', 'Fear', 'Disgust', 'Bing Bong', 'Riley',
    'Mom Andersen', 'Dad Andersen', 'Jangles', 'Rainbow Unicorn', 'Fritz',
    'Lance Slashblade',
  ],
}

const roleNames = {
  admin: 'Admin',
  contributor: 'Contributor',
  'light-agent': 'Subtle agent',
  advisor: 'Advisor',
  counselor: 'Counselor',
}

const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

/* Display labels for role-level product access values (AI agents + products). */
export const AI_ACCESS_LABELS = {
  no_access: 'No access',
  client_admin: 'Client admin',
  client_editor: 'Client editor',
  client_user: 'Client user',
  admin: 'Admin',
  agent: 'Agent',
  reviewer: 'Reviewer',
}

/* V2 (Scaled access change): the role page gets an opt-in capsule per product,
   ordered like the team member profile's Roles and access table. AI agents
   keeps its existing capsule; Quality assurance uses Admin / Agent / Reviewer. */
export const PRODUCT_CAPSULES = [
  { id: 'support', name: 'Support' },
  { id: 'knowledge', name: 'Knowledge' },
  { id: 'analytics', name: 'Analytics' },
  { id: 'voice', name: 'Voice' },
  { id: 'chat', name: 'Chat' },
  { id: 'ai-agents', name: 'AI agents' },
  { id: 'qa', name: 'Quality assurance' },
]

/* V3+: Chat / Sell / Gather are sunset — drop Chat from the product list. */
export const PRODUCT_CAPSULES_V3 = PRODUCT_CAPSULES.filter((p) => p.id !== 'chat')

/* The products that get their own opt-in capsule (not AI agents, which already
   has one). */
export const RADIO_PRODUCTS = PRODUCT_CAPSULES.filter(p => !p.disabled && p.id !== 'ai-agents')
export const RADIO_PRODUCTS_V3 = PRODUCT_CAPSULES_V3.filter(p => !p.disabled && p.id !== 'ai-agents')

/* The access level each member has today, from the original three-option model.
   Mixed across the roster so the role-level preview has changes to show. */
const LEGACY_AI_ACCESS = ['No Access', 'Full Access', 'Limited Access']

const rosterMembers = Object.entries(roleRosters).flatMap(([roleId, names]) =>
  names.map((name, i) => ({
    id: slugify(name),
    name,
    role: roleNames[roleId],
    email: `${slugify(name)}@z3nrusteze.zendesk.com`,
    status: 'Active',
    brand: i % 2 === 0 ? 'Dinoco' : 'Rusteze',
    extraBrands: 0,
    group: 'Support',
    productAccess: 'Support, Knowledge',
    lastSignIn: 'Never',
    /* Advisor mixes levels so a single opt-in (e.g. No access) hits ~2/3, not all 327. */
    aiAgentsAccess: LEGACY_AI_ACCESS[i % 3],
  })),
)

export const teamMembers = [...coreMembers, ...rosterMembers]

/* V2: each member's current access level per product. Advisor uses a 3-way mix
   (offset per product) so any chosen level affects ~218 members (≥217 for two
   preview pages), not the full roster. */
const ACCESS_ROTATION = ['No access', 'Client admin', 'Client editor', 'Client user']
const ADVISOR_ACCESS_MIX = ['No access', 'Client admin', 'Client editor']
const QA_ACCESS_ROTATION = ['Admin', 'Agent', 'Reviewer']
export const memberProductAccess = Object.fromEntries(
  teamMembers.map((m, i) => [m.id, Object.fromEntries(
    RADIO_PRODUCTS.map((p, pi) => {
      if (p.id === 'qa') {
        return [p.id, QA_ACCESS_ROTATION[(i + pi) % QA_ACCESS_ROTATION.length]]
      }
      if (m.role === 'Advisor') {
        return [p.id, ADVISOR_ACCESS_MIX[(i + pi) % ADVISOR_ACCESS_MIX.length]]
      }
      return [p.id, ACCESS_ROTATION[(i + pi) % ACCESS_ROTATION.length]]
    }),
  )]),
)

/* roleId -> member ids, as the seeded roles start out. User-driven
   assignments merge into this in AppContext. */
export const defaultRoleAssignments = Object.fromEntries(
  Object.entries(roleRosters).map(([roleId, names]) => [roleId, names.map(slugify)]),
)

export const roles = [
  { id: 'admin', name: 'Admin', type: 'System', description: 'Can manage all settings, except billing' },
  { id: 'contributor', name: 'Contributor', type: 'System', description: 'Can provide limited support' },
  { id: 'light-agent', name: 'Subtle agent', type: 'System', description: 'Can view and add private comments to tickets' },
  { id: 'advisor', name: 'Advisor', type: 'Custom', description: 'Can automate ticket workflows, manage channels and make private comments on tickets' },
  { id: 'counselor', name: 'Counselor', type: 'Custom', description: 'Agent support when it gets complicated' },
]

export const rolesAndAccessData = [
  { product: 'Support', role: 'Admin', access: 'yes', icon: 'support' },
  { product: 'Knowledge', role: 'Admin', access: 'checkbox', checked: true, hasInfo: true, icon: 'knowledge' },
  { product: 'Analytics', role: 'Admin', access: 'checkbox', checked: true, hasInfo: true, icon: 'analytics' },
  { product: 'Voice', role: 'Agent', access: 'checkbox', checked: false, icon: 'voice' },
  { product: 'Chat', role: 'Agent', access: 'checkbox', checked: false, icon: 'chat' },
  { product: 'AI agents', role: 'Client admin', access: 'ai_agents', checked: true, icon: 'ai_agents' },
  { product: 'Quality assurance', role: 'Admin', access: 'yes', icon: 'qa' },
]
