/* Version notes: a living changelog for the prototype-bar version switcher.
   One entry per version id in VERSIONS (App.jsx), newest first — when a
   version picks up a meaningful change, add a bullet here (or a new entry
   above this one for a new version) rather than letting the doc go stale.
   Keep it concise: a short summary, then a few bullets per section. */
export const versionNotes = [
  {
    versionId: 'v7',
    date: 'Nov 2026',
    summary: 'Combines V4 job sections with V6.5 table patterns: each QA group is its own collapsible Flora table.',
    sections: [
      {
        title: 'Sectioned permission tables',
        bullets: [
          'Review work, Conduct reviews, Coaching and calibration, Workspace, Reporting, and Admin — each a collapsible table',
          'Same V6.5 patterns per table: select-all, Added/Removed Status, static N permissions counter, hover/focus only',
          'Access summary + Reset / Open all; role type radios and Customized tag carried over',
        ],
      },
    ],
  },
  {
    versionId: 'v6.5',
    date: 'Nov 2026',
    summary: 'V6 simplified: one Customize permissions table. Checkboxes stay in place; Added/Removed tags mark deltas from the role type.',
    sections: [
      {
        title: 'Customize permissions',
        bullets: [
          'Single Flora table (grouped); checkbox grants/revokes vs type preset without moving rows',
          'Added / Removed tags inline; Access summary accordion for the resolved checklist; Reset to default',
        ],
      },
    ],
  },
  {
    versionId: 'v6',
    date: 'Nov 2026',
    summary: 'Same role type + WFM as V4, but QA uses a layer cake: Account default → Role type → This role. The role only stores overrides (thin delta).',
    sections: [
      {
        title: 'QA layer cake',
        bullets: [
          'Role type radios, then stroke accordions: Overrides, Add an exception, Full effective access',
          'Exception table matches V6.5: select-all, flat rows, Added/Removed Status tags, hover/focus only',
        ],
      },
    ],
  },
  {
    versionId: 'v5',
    date: 'Nov 2026',
    summary: 'Same role type + WFM as V4, but QA uses a domain map: pick Reviews / Coaching / Workspaces / Reporting / Admin, then edit only that domain’s settings.',
    sections: [
      {
        title: 'QA domain map',
        bullets: [
          'Map of five conceptual domains (not product screens); click one to see ~6–14 settings',
          'Breadcrumb All domains / {domain}; search highlights or opens matching domains',
          'Admin / Agent / Reviewer presets, Customized tag, and Reset to default carried over from V4',
        ],
      },
    ],
  },
  {
    versionId: 'v4',
    date: 'Nov 2026',
    summary: 'Role-type packages (Admin / Agent / Reviewer), WFM role assignment, and dense QA accordion permissions in one exploration.',
    sections: [
      {
        title: 'Role type',
        bullets: [
          'Choose a role type modal on Create role; Role type radios on the create form',
          'Admin / Agent / Reviewer packages seed settings and product access',
        ],
      },
      {
        title: 'Workforce Management',
        bullets: [
          'WFM section peer to Settings/Products: one-way role assignment opt-in, WFM role picker, nested permission groups',
          'Illustrative WFM roles: Agent / Admin / Team Lead / Scheduler',
          'Filter drawer Group list includes WFM alongside Settings and Products',
        ],
      },
      {
        title: 'QA accordion settings',
        bullets: [
          'Inside the Quality assurance product capsule: Admin / Agent / Reviewer radios seed ~40 fine-grained permissions',
          'Custom changes persist per role type when switching radios; Customized tag; Reset to default (text) + Open all (outline)',
          'Job groups as stroke accordions; capsule and groups start closed — expand QA to explore',
        ],
      },
    ],
  },
  {
    versionId: 'v3.5',
    date: 'Sep 2026',
    summary: 'Same panel redesign and filter drawer as V3, but topic filters strip matching permissions out of capsules and hide empty ones.',
    sections: [
      {
        title: 'Deep filters',
        bullets: [
          'Same Flora Filter button → Drawer (with scrim) as V3',
          'Topic filters remove non-matching permission rows inside capsules',
          'Capsules with nothing left to show are hidden',
          'Matching content keeps its capsule title for context',
        ],
      },
    ],
  },
  {
    versionId: 'v3',
    date: 'Sep 2026',
    summary: 'Panel redesign for centralized product access: grouped Settings vs Products, no opt-ins, merged Knowledge, and Flora filters that show or hide whole capsules.',
    sections: [
      {
        title: 'Role page',
        bullets: [
          'Settings and Products grouped as separate sections',
          'Product access goes straight to radios (no opt-in) for Support, Knowledge, Analytics, Voice, AI agents, QA',
          'Chat removed (sunset); Knowledge settings + product access merged into one capsule',
          'Tickets → Security and privacy unchanged; Reporting stays in Settings',
          'Search permissions + Flora Filter drawer (scrim); filters show/hide whole capsules only',
          'Optional “Only available settings” filter (off by default; includes plan-limited QA until applied)',
          'Hidden search tags on capsules for discoverability',
          'Default version on load',
        ],
      },
    ],
  },
  {
    versionId: 'v2.5',
    date: 'Sep 2026',
    summary: 'Same product opt-ins as V2, but scales the team-member impact preview: one summary warning plus a work-area table instead of a banner on every name.',
    sections: [
      {
        title: 'Team members panel',
        bullets: [
          'Single warning below the Team members explanation when opt-ins would change access',
          'Title: Access changed for N team members; body lists affected products',
          'Preview access change Anchor opens a work-area preview (not a modal)',
        ],
      },
      {
        title: 'Preview access change',
        bullets: [
          'Breadcrumbed screen: Roles › [role] › Preview access change',
          'Table: team member (link to profile), product, current access, new access',
          'Search, product filter, and pagination for large rosters',
        ],
      },
    ],
  },
  {
    versionId: 'v2',
    date: 'Aug 2026',
    summary: 'Scales the AI agents access change preview to every product on the role, and adds a search field for the settings themselves.',
    sections: [
      {
        title: 'Role page',
        bullets: [
          'One opt-in capsule per product (Support, Knowledge, Analytics, Voice, Chat, AI agents), following the AI agents opt-in pattern',
          'Quality assurance renders disabled, showing "Subscription limit reached"',
          'AI agents capsule starts closed, like every other capsule',
          'Search permissions field above the capsules that highlights matches in yellow/300 and opens any capsule with a hit',
        ],
      },
      {
        title: 'Team members panel',
        bullets: [
          'A single "Access change(s)" warning per member, listing every product that would change',
          'Each line: product name, then a bullet with current access to new access',
        ],
      },
    ],
  },
  {
    versionId: 'v1',
    date: 'Jul 2026',
    summary: 'The original custom roles flow, an AI agents only access change preview.',
    sections: [
      {
        title: null,
        bullets: [
          'AI agents capsule: opt-in checkbox, then access-level radios (No access / Client admin / Client editor / Client user)',
          'Team members side panel warns when a role change would affect a member’s AI agents access',
          'Assign role modal: search and multi-select team members to assign',
        ],
      },
    ],
  },
]
