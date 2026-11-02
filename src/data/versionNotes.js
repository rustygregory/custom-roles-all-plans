/* Version notes: a living changelog for the prototype-bar version switcher.
   One entry per version id in VERSIONS (App.jsx), newest first — when a
   version picks up a meaningful change, add a bullet here (or a new entry
   above this one for a new version) rather than letting the doc go stale.
   Keep it concise: a short summary, then a few bullets per section. */
export const versionNotes = [
  {
    versionId: 'v4',
    date: 'Oct 2026',
    summary: 'PM talking-point concept for Workforce Management on Create role: one-way WFM role assignment opt-in, WFM role picker, and nested placeholder permission groups. Not finalized product scope.',
    sections: [
      {
        title: 'Workforce Management capsule',
        bullets: [
          'New section heading peer to Settings/Products: Workforce Management (WFM)',
          'WFM role assignment capsule: opt-in, irreversible alert, WFM role picker, then Tickets-style permission sections',
          'After opt-in: Scheduling, Forecasting, and Team management appear as flat subsections below the picker',
          'Illustrative WFM roles: Agent / Admin / Team Lead / Scheduler',
          'Filter drawer Group list includes WFM alongside Settings and Products',
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
