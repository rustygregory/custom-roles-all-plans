import {
  AI_ACCESS_LABELS,
  RADIO_PRODUCTS,
  memberProductAccess,
} from '../data/mockData'

/**
 * Pending opt-in access changes for a role's assigned members.
 * Used by V2 (per-member) and V2.5 (summary + preview table).
 *
 * @returns {{
 *   affectedMemberCount: number,
 *   products: { id: string, name: string }[],
 *   rows: {
 *     memberId: string,
 *     memberName: string,
 *     productId: string,
 *     product: string,
 *     current: string,
 *     next: string,
 *   }[],
 * }}
 */
export function getAccessChangePreview({
  members,
  version,
  roleKey,
  getProductAccess,
  getAiAgentsState,
  radioProducts = RADIO_PRODUCTS,
}) {
  const rows = []
  const productMap = new Map()
  const affected = new Set()

  const ai = getAiAgentsState(roleKey)
  const accessPreviewActive = ai.optedIn && !ai.saved && Boolean(ai.accessLevel)
  const newAiLabel = AI_ACCESS_LABELS[ai.accessLevel]

  for (const member of members) {
    if (version !== 'v1') {
      for (const p of radioProducts) {
        const s = getProductAccess(roleKey, p.id)
        if (s.optedIn && !s.saved && s.accessLevel) {
          const current = memberProductAccess[member.id]?.[p.id]
          const next = AI_ACCESS_LABELS[s.accessLevel]
          if (current && current !== next) {
            rows.push({
              memberId: member.id,
              memberName: member.name,
              productId: p.id,
              product: p.name,
              current,
              next,
            })
            productMap.set(p.id, p.name)
            affected.add(member.id)
          }
        }
      }
    }

    if (accessPreviewActive) {
      const noChange =
        ai.accessLevel === 'no_access' && member.aiAgentsAccess === 'No Access'
      if (!noChange) {
        rows.push({
          memberId: member.id,
          memberName: member.name,
          productId: 'ai-agents',
          product: 'AI agents',
          current: member.aiAgentsAccess,
          next: newAiLabel,
        })
        productMap.set('ai-agents', 'AI agents')
        affected.add(member.id)
      }
    }
  }

  /* Capsule order: Support → … → Chat, then AI agents. */
  const productOrder = [...radioProducts.map((p) => p.id), 'ai-agents']
  const products = productOrder
    .filter((id) => productMap.has(id))
    .map((id) => ({ id, name: productMap.get(id) }))

  return {
    affectedMemberCount: affected.size,
    products,
    rows,
  }
}
