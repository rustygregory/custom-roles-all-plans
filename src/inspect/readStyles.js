/**
 * Read inspectable details from a rendered element.
 * Never invents Flora names — only reports metadata and values found on the page.
 */

import { PALETTE } from '../flora-theme/elements/palette'

const SEMANTIC_COLOR_VARS = {
  'foreground.default': 'fg/default',
  'foreground.subtle': 'fg/subtle',
  'foreground.primary': 'fg/primary',
  'foreground.success': 'fg/success',
  'foreground.warning': 'fg/warning',
  'foreground.danger': 'fg/danger',
  'foreground.onEmphasis': 'fg/onEmphasis',
  'foreground.disabled': 'fg/disabled',
  'foreground.warningEmphasis': 'fg/warningEmphasis',
  'foreground.successEmphasis': 'fg/successEmphasis',
  'foreground.dangerEmphasis': 'fg/dangerEmphasis',
  'background.default': 'bg/default',
  'background.subtle': 'bg/subtle',
  'background.raised': 'bg/raised',
  'background.recessed': 'bg/recessed',
  'background.primaryEmphasis': 'bg/primaryEmphasis',
  'background.success': 'bg/success',
  'background.warning': 'bg/warning',
  'background.danger': 'bg/danger',
  'border.default': 'border/default',
  'border.subtle': 'border/subtle',
  'border.emphasis': 'border/emphasis',
  'border.primaryEmphasis': 'border/primaryEmphasis',
}

function hexMap(entries) {
  const map = new Map()
  for (const [hex, label] of entries) {
    const key = normalizeColor(hex)
    if (key) map.set(key, label)
  }
  return map
}

/* Role-specific maps so white/greys don't collide across text vs background. */
const TEXT_HEX_TO_TOKEN = () =>
  hexMap([
    /* Flora fg/default — most body/title text in this prototype. */
    [PALETTE.grey[900], 'fg/default'],
    [PALETTE.grey[800], 'fg/default'],
    [PALETTE.black, 'fg/default'],
    ['#2f3941', 'fg/default'], /* legacy Garden charcoal still in some chrome */
    [PALETTE.grey[700], 'fg/subtle'],
    ['#68737d', 'fg/subtle'], /* legacy Garden grey still used in some chrome */
    [PALETTE.grey[600], 'fg/disabled'],
    [PALETTE.blue[700], 'fg/primary'],
    [PALETTE.green[700], 'fg/success'],
    [PALETTE.yellow[700], 'fg/warning'],
    [PALETTE.red[700], 'fg/danger'],
    [PALETTE.white, 'fg/onEmphasis'],
    [PALETTE.yellow[900], 'fg/warningEmphasis'],
    [PALETTE.green[900], 'fg/successEmphasis'],
    [PALETTE.red[900], 'fg/dangerEmphasis'],
  ])

const BG_HEX_TO_TOKEN = () =>
  hexMap([
    [PALETTE.white, 'bg/default'],
    [PALETTE.grey[100], 'bg/subtle'],
    [PALETTE.blue[700], 'bg/primaryEmphasis'],
    [PALETTE.green[100], 'bg/success'],
    [PALETTE.yellow[100], 'bg/warning'],
    [PALETTE.yellow[200], 'bg/warning'],
    [PALETTE.red[100], 'bg/danger'],
  ])

const BORDER_HEX_TO_TOKEN = () =>
  hexMap([
    [PALETTE.grey[300], 'border/default'],
    [PALETTE.grey[200], 'border/subtle'],
    [PALETTE.grey[600], 'border/emphasis'],
    [PALETTE.blue[700], 'border/primaryEmphasis'],
  ])

/** Dark near-neutrals that are effectively Flora body text (fg/default). */
function isDefaultTextNeutral(hex) {
  if (!hex || !hex.startsWith('#') || hex.length !== 7) return false
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const saturation = max === 0 ? 0 : (max - min) / max
  const lightness = (max + min) / 2 / 255
  /* Low chroma + dark — typical charcoal body text, not accent color. */
  return saturation < 0.12 && lightness > 0.08 && lightness < 0.35
}

export function normalizeColor(value) {
  if (!value || value === 'transparent' || value === 'rgba(0, 0, 0, 0)') return null
  const ctx = normalizeColor._ctx || (normalizeColor._ctx = document.createElement('canvas').getContext('2d'))
  if (!ctx) return String(value).trim().toLowerCase()
  ctx.fillStyle = '#000'
  ctx.fillStyle = value
  const computed = ctx.fillStyle
  if (computed.startsWith('#')) {
    if (computed.length === 4) {
      const r = computed[1]
      const g = computed[2]
      const b = computed[3]
      return `#${r}${r}${g}${g}${b}${b}`.toLowerCase()
    }
    return computed.toLowerCase()
  }
  const m = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i)
  if (!m) return String(value).trim().toLowerCase()
  const hex = [m[1], m[2], m[3]]
    .map((n) => Number(n).toString(16).padStart(2, '0'))
    .join('')
  return `#${hex}`
}

function px(value) {
  if (value == null || value === '') return null
  const n = parseFloat(value)
  if (Number.isNaN(n)) return String(value)
  if (n === 0) return '0'
  return `${Number.isInteger(n) ? n : Math.round(n * 100) / 100}px`
}

function isZeroBox(side) {
  return !side || side === '0' || side === '0px'
}

function formatBox(top, right, bottom, left) {
  const t = px(top)
  const r = px(right)
  const b = px(bottom)
  const l = px(left)
  if ([t, r, b, l].every(isZeroBox)) return null
  if (t === r && r === b && b === l) return t
  if (t === b && r === l) return `${t} ${r}`
  return `${t} ${r} ${b} ${l}`
}

function colorEntry(label, computedValue, declaredValue, tokenAttr, role = 'text') {
  if (tokenAttr) {
    return {
      label,
      value: tokenAttr,
      detail: computedValue ? `rendered ${normalizeColor(computedValue) || computedValue}` : null,
      kind: 'token',
    }
  }
  const fromVar = extractCssVarName(declaredValue)
  if (fromVar) {
    const semantic = SEMANTIC_COLOR_VARS[fromVar] || fromVar
    return {
      label,
      value: semantic,
      detail: computedValue ? `rendered ${normalizeColor(computedValue) || computedValue}` : null,
      kind: 'token',
    }
  }
  const hex = normalizeColor(computedValue)
  if (!hex) return null

  const map =
    role === 'bg' ? BG_HEX_TO_TOKEN() : role === 'border' ? BORDER_HEX_TO_TOKEN() : TEXT_HEX_TO_TOKEN()
  let semantic = map.get(hex)

  /* Most prototype text is fg/default — treat dark near-neutrals as that token. */
  if (!semantic && role === 'text' && isDefaultTextNeutral(hex)) {
    semantic = 'fg/default'
  }

  if (semantic) {
    return {
      label,
      value: semantic,
      detail: `rendered ${hex}`,
      kind: 'token',
    }
  }
  return {
    label,
    value: hex,
    detail: 'computed color',
    kind: 'computed',
  }
}

function extractCssVarName(declared) {
  if (!declared || typeof declared !== 'string') return null
  const match = declared.match(/var\(\s*(--[\w-]+)/)
  if (match) return match[1]
  /* Garden/Flora sometimes leave the variable path in a custom property. */
  if (declared.includes('foreground.') || declared.includes('background.') || declared.includes('border.')) {
    const key = Object.keys(SEMANTIC_COLOR_VARS).find((k) => declared.includes(k))
    if (key) return key
  }
  return null
}

function readDeclared(el, prop) {
  try {
    return el.style?.getPropertyValue?.(prop) || ''
  } catch {
    return ''
  }
}

function componentName(el) {
  const named = el.closest('[data-inspect-name]')
  if (named?.getAttribute('data-inspect-name')) {
    return { name: named.getAttribute('data-inspect-name'), source: 'data-inspect-name' }
  }
  const garden = el.closest('[data-garden-id]')
  if (garden?.getAttribute('data-garden-id')) {
    return { name: garden.getAttribute('data-garden-id'), source: 'data-garden-id' }
  }
  return null
}

function gatherTokenAttrs(el) {
  const tokens = []
  let node = el
  while (node && node.nodeType === 1) {
    const raw = node.getAttribute?.('data-inspect-token')
    if (raw) {
      raw.split(/\s+/).filter(Boolean).forEach((t) => {
        if (!tokens.includes(t)) tokens.push(t)
      })
    }
    if (node.getAttribute?.('data-inspect-root') || node.getAttribute?.('data-comment-root')) break
    node = node.parentElement
  }
  return tokens
}

/**
 * @param {Element} el
 * @returns {{ rows: Array<{label: string, value: string, detail?: string|null, kind?: string}>, copyText: string, title: string }}
 */
export function readElementDetails(el) {
  if (!(el instanceof Element)) {
    return { rows: [], copyText: '', title: 'Element' }
  }

  const style = window.getComputedStyle(el)
  const rect = el.getBoundingClientRect()
  const rows = []

  const comp = componentName(el)
  if (comp) {
    rows.push({
      label: comp.source === 'data-inspect-name' ? 'Flora component' : 'Component id',
      value: comp.name,
      kind: 'meta',
    })
  }

  const tag = el.tagName.toLowerCase()
  rows.push({ label: 'Element', value: tag + (el.className && typeof el.className === 'string' && el.className.trim() ? `.${el.className.trim().split(/\s+/).slice(0, 2).join('.')}` : '') })

  const tokenAttrs = gatherTokenAttrs(el)
  tokenAttrs.forEach((t) => {
    rows.push({ label: 'Token (metadata)', value: t, kind: 'token' })
  })

  const textColor = colorEntry(
    'Text color',
    style.color,
    readDeclared(el, 'color'),
    el.getAttribute('data-inspect-token-color'),
    'text',
  )
  if (textColor) rows.push(textColor)

  const bgColor = colorEntry(
    'Background',
    style.backgroundColor,
    readDeclared(el, 'background-color'),
    el.getAttribute('data-inspect-token-bg'),
    'bg',
  )
  if (bgColor) rows.push(bgColor)

  const borderColor = colorEntry(
    'Border color',
    style.borderTopColor,
    readDeclared(el, 'border-color') || readDeclared(el, 'border-top-color'),
    el.getAttribute('data-inspect-token-border'),
    'border',
  )
  if (borderColor && style.borderTopWidth && style.borderTopWidth !== '0px') {
    rows.push(borderColor)
  }

  const padding = formatBox(style.paddingTop, style.paddingRight, style.paddingBottom, style.paddingLeft)
  if (padding) rows.push({ label: 'Padding', value: padding })

  const margin = formatBox(style.marginTop, style.marginRight, style.marginBottom, style.marginLeft)
  if (margin) rows.push({ label: 'Margin', value: margin })

  if (style.gap && style.gap !== 'normal' && style.gap !== '0px') {
    rows.push({ label: 'Gap', value: px(style.gap) })
  } else {
    const rowGap = style.rowGap && style.rowGap !== 'normal' ? px(style.rowGap) : null
    const colGap = style.columnGap && style.columnGap !== 'normal' ? px(style.columnGap) : null
    if (rowGap && rowGap !== '0') rows.push({ label: 'Row gap', value: rowGap })
    if (colGap && colGap !== '0') rows.push({ label: 'Column gap', value: colGap })
  }

  rows.push({ label: 'Width', value: `${Math.round(rect.width)}px` })
  rows.push({ label: 'Height', value: `${Math.round(rect.height)}px` })

  if (style.fontSize) {
    rows.push({
      label: 'Typography',
      value: `${px(style.fontSize)} / ${px(style.lineHeight) || style.lineHeight}, weight ${style.fontWeight}`,
    })
  }

  if (style.borderTopWidth && style.borderTopWidth !== '0px') {
    rows.push({
      label: 'Border',
      value: `${px(style.borderTopWidth)} ${style.borderTopStyle}`,
    })
  }

  const radius = style.borderRadius
  if (radius && radius !== '0px') {
    rows.push({ label: 'Radius', value: radius.includes(' ') ? radius : px(radius) })
  }

  const shadow = style.boxShadow
  if (shadow && shadow !== 'none') {
    rows.push({ label: 'Shadow', value: shadow.length > 80 ? `${shadow.slice(0, 77)}…` : shadow })
  }

  const title = comp?.name || tag
  const copyText = rows
    .map((r) => {
      const detail = r.detail ? ` (${r.detail})` : ''
      return `${r.label}: ${r.value}${detail}`
    })
    .join('\n')

  return { rows, copyText, title }
}

/** Pick the best element under a point inside the inspect root. */
export function elementFromPointInRoot(clientX, clientY, root) {
  if (!root) return null
  const stack = document.elementsFromPoint(clientX, clientY)
  for (const el of stack) {
    if (!(el instanceof Element)) continue
    if (el.closest('[data-inspect-ui="true"]')) continue
    if (el.closest('[data-comment-ui="true"]')) continue
    if (!root.contains(el)) continue
    if (el === root) continue
    return el
  }
  return null
}
