export const teamMembers = [
  { id: 'fillmore', name: 'Fillmore', role: 'Admin', email: 'fillmore@z3nrusteze.zendesk.com', status: 'Active' },
  { id: 'mater', name: 'T. Mater', role: 'Test API', email: 'mater@z3nrusteze.zendesk.com', status: 'Active' },
  { id: 'jams-concord', name: 'Jams Concord', role: 'Test API', email: 'jams@z3nrusteze.zendesk.com', status: 'Active' },
  { id: 'kim-pop', name: 'Kim Pop', role: 'Test API', email: 'kim@z3nrusteze.zendesk.com', status: 'Active' },
  { id: 'masked-agent', name: 'Masked Agent James Carter', role: 'Test API', email: 'james@z3nrusteze.zendesk.com', status: 'Active' },
]

export const roles = [
  { id: 'admin', name: 'Admin', type: 'System', description: 'Can manage all settings, except billing', teamMembers: 6 },
  { id: 'contributor', name: 'Contributor', type: 'System', description: 'Can provide limited support', teamMembers: 10 },
  { id: 'light-agent', name: 'Subtle agent', type: 'System', description: 'Can view and add private comments to tickets', teamMembers: 15 },
  { id: 'advisor', name: 'Advisor', type: 'Custom', description: 'Can automate ticket workflows, manage channels and make private comments on tickets', teamMembers: 20 },
]

export const rolesAndAccessData = [
  { product: 'Support', role: 'Admin', access: 'yes', icon: 'support' },
  { product: 'Knowledge', role: 'Admin', access: 'checkbox', checked: true, hasInfo: true, icon: 'knowledge' },
  { product: 'Analytics', role: 'Admin', access: 'checkbox', checked: true, hasInfo: true, icon: 'analytics' },
  { product: 'Voice', role: 'Agent', access: 'checkbox', checked: false, icon: 'voice' },
  { product: 'Chat', role: 'Agent', access: 'checkbox', checked: false, icon: 'chat' },
  { product: 'AI agents', role: 'Client admin', access: 'ai_agents', checked: true, icon: 'ai_agents' },
  { product: 'Quality assurance', role: null, access: 'disabled', message: 'Subscription limit reached', icon: 'qa' },
]
