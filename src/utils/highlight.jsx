import React from 'react'
import styled from 'styled-components'
import { PALETTE } from '../flora-theme/elements/palette'

/* Flora yellow/300 — the search-hit highlight. */
const Hit = styled.mark`
  background: ${PALETTE.yellow[300]};
  color: inherit;
  padding: 0;
  border-radius: 2px;
`

/* Wrap every case-insensitive occurrence of the query phrase in a Hit mark.
   Returns the original string untouched when there's no query. */
export function highlightText(text, query) {
  if (!query || typeof text !== 'string' || !text) return text
  const lower = text.toLowerCase()
  const q = query.toLowerCase()
  const parts = []
  let i = 0
  let k = 0
  for (;;) {
    const at = lower.indexOf(q, i)
    if (at === -1) {
      parts.push(text.slice(i))
      break
    }
    if (at > i) parts.push(text.slice(i, at))
    parts.push(<Hit key={k++}>{text.slice(at, at + q.length)}</Hit>)
    i = at + q.length
  }
  return parts
}

/* Recursively highlight string children throughout an element tree. Form
   controls are left alone; every other element is cloned with highlighted
   children. */
export function deepHighlight(node, query) {
  if (!query) return node
  if (node == null || typeof node === 'boolean') return node
  if (typeof node === 'string') return highlightText(node, query)
  if (typeof node === 'number') return node
  if (Array.isArray(node)) {
    return node.map((n, i) => <React.Fragment key={i}>{deepHighlight(n, query)}</React.Fragment>)
  }
  if (React.isValidElement(node)) {
    if (node.type === 'input' || node.type === 'textarea') return node
    const children = node.props?.children
    if (children == null) return node
    return React.cloneElement(node, undefined, deepHighlight(children, query))
  }
  return node
}

/* Flatten an element tree to plain text so a capsule can tell whether the
   query hits anywhere inside it. */
export function extractText(node) {
  if (node == null || typeof node === 'boolean') return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join(' ')
  if (React.isValidElement(node)) return extractText(node.props?.children)
  return ''
}
