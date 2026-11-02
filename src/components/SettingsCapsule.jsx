import styled from 'styled-components'
import { getColor } from '@zendeskgarden/react-theming'
import { highlightText, deepHighlight, extractText } from '../utils/highlight'
import { FloraExclamationCircle } from './FloraValidationMessage'

/*
 * Flora Labs Accordion well / Capsule — matches Ticket forms migration.
 * Closed: 82px tall, bg/default. Open: header on bg/subtle; white body with
 * the same 12px corners and no header/body division line.
 * Default max width 726px (Ticket forms V4 content column).
 */
const Card = styled.section.attrs({
  'data-inspect-name': 'Accordion well',
})`
  box-sizing: border-box;
  width: 100%;
  max-width: ${p => p.$maxWidth || 726}px;
  border: 1px solid ${p => getColor({ theme: p.theme, variable: 'border.subtle' })};
  border-radius: 12px;
  background: ${p =>
    getColor({
      theme: p.theme,
      variable: p.$expanded ? 'background.subtle' : 'background.default',
    })};
  overflow: hidden;
  margin-bottom: 12px;
  /* Closed default height; grow when header carries an error message. */
  ${p =>
    !p.$expanded &&
    !p.$hasError &&
    `
    height: 82px;
  `}
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: ${p => (p.$expanded || p.$hasError ? '20px' : '0 20px')};
  box-sizing: border-box;
  height: ${p => (p.$expanded || p.$hasError ? 'auto' : '82px')};
  min-height: 82px;
  background: transparent;
`

const HeaderMain = styled.button.attrs({ type: 'button' })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
`

const HeaderTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
`

/* Capsule sub content — Flora Medium / Default 14/20, fg/subtle. */
const HeaderDescription = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
`

/* Flora Field.Message error treatment in the capsule header — visible when
   closed so blockers aren’t hidden behind “Close all”. */
const HeaderError = styled.span`
  display: inline-flex;
  align-items: flex-start;
  /* Match FloraValidationMessage: 8px ink-to-text on 20px Central icon. */
  gap: 6.33px;
  margin-top: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.danger' })};
`

const HeaderErrorIcon = styled.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
`

const HeaderErrorText = styled.span`
  padding-block: 2px;
`

const ExpandButton = styled.button.attrs({ type: 'button' })`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
  cursor: pointer;
  flex-shrink: 0;

  &:hover,
  &:active,
  &:focus {
    color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
  }

  svg {
    display: block;
    width: 20px;
    height: 20px;
    fill: currentColor;
    color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
    transform: ${p => (p.$open ? 'rotate(180deg)' : 'none')};
    transition: transform 120ms ease;
  }
`

/* Open panel — same 12px radii as capsule; no top division line.
   24px between permission sections (PermissionBlock children). */
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  background: ${p => getColor({ theme: p.theme, variable: 'background.default' })};
  border-radius: 12px;
  border-top: none;
`

/** Flora Icons chevron-down — 20px (Ticket forms / Flora Accordion well). */
function ChevronDownIcon({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.74408 6.91058C3.06952 6.58515 3.59715 6.58515 3.92259 6.91058L9.41075 12.3988C9.73617 12.7242 10.2638 12.7242 10.5893 12.3988L16.0774 6.91058C16.4028 6.58515 16.9305 6.58515 17.2559 6.91058C17.5813 7.23602 17.5813 7.76365 17.2559 8.0891L11.7677 13.5773C10.7915 14.5536 9.20858 14.5536 8.23225 13.5773L2.74408 8.0891C2.41864 7.76365 2.41864 7.23602 2.74408 6.91058Z"
      />
    </svg>
  )
}

/* `query` is the role page's settings search: a capsule whose title,
   description, or body contains the query opens itself and highlights the
   matching words. Component children render their own internals, so those
   capsules hand their searchable text over via `searchText` instead. */
export default function SettingsCapsule({
  title,
  description,
  open,
  onToggle,
  query,
  searchText,
  maxWidth,
  errorCount,
  children,
}) {
  const q = (query || '').trim()
  const hasHit = Boolean(q) &&
    `${title} ${description || ''} ${searchText ?? extractText(children)}`
      .toLowerCase()
      .includes(q.toLowerCase())
  const isOpen = open || hasHit
  const errors = Number(errorCount) || 0
  const hasError = errors > 0
  const expandLabel = isOpen ? `Collapse ${title}` : `Expand ${title}`

  return (
    <Card $maxWidth={maxWidth} $expanded={isOpen} $hasError={hasError}>
      <CardHeader $expanded={isOpen} $hasError={hasError}>
        <HeaderMain
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={expandLabel}
        >
          <HeaderTitle>{highlightText(title, q)}</HeaderTitle>
          {description && (
            <HeaderDescription>{highlightText(description, q)}</HeaderDescription>
          )}
          {hasError && (
            <HeaderError>
              <HeaderErrorIcon>
                <FloraExclamationCircle />
              </HeaderErrorIcon>
              <HeaderErrorText>
                Contains {errors} {errors === 1 ? 'error' : 'errors'}
              </HeaderErrorText>
            </HeaderError>
          )}
        </HeaderMain>
        <ExpandButton
          $open={isOpen}
          aria-expanded={isOpen}
          aria-label={expandLabel}
          onClick={onToggle}
        >
          <ChevronDownIcon size={20} />
        </ExpandButton>
      </CardHeader>
      {isOpen && <CardBody>{deepHighlight(children, q)}</CardBody>}
    </Card>
  )
}
