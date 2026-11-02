import styled from 'styled-components'
import { highlightText, deepHighlight, extractText } from '../utils/highlight'
import { FloraExclamationCircle } from './FloraValidationMessage'

/* A permission group as a collapsible card. White with a hairline border — the
   capsule from the roles page redesign: the header alone (title, description,
   chevron) is the whole click target, so the radio and checkbox rows inside the
   body can be used without collapsing the card under the cursor. */
const Card = styled.section`
  box-sizing: border-box;
  max-width: ${p => p.$maxWidth || 630}px;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 12px;
`

const Header = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 14px 16px;
  border: none;
  background: none;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
`

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

/* Flora Typography Medium / Bold — fg/default. */
const HeaderTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
`

/* Capsule sub content — Flora Medium / Default 14/20, fg/subtle. */
const HeaderDescription = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #646864;
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
  color: #c63f46;
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

/* Flora Icons chevron — fg/subtle (neutralHue.700), vertically centered in header. */
const Chevron = styled.svg`
  flex-shrink: 0;
  color: #646864;
  transform: ${p => (p.$open ? 'rotate(180deg)' : 'none')};
`

/* 24px between permission sections (PermissionBlock children). */
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px 16px 16px;
  border-top: 1px solid #e9ebed;
`

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
  return (
    <Card $maxWidth={maxWidth}>
      <Header onClick={onToggle} aria-expanded={isOpen}>
        <HeaderText>
          <HeaderTitle>{highlightText(title, q)}</HeaderTitle>
          {description && <HeaderDescription>{highlightText(description, q)}</HeaderDescription>}
          {errors > 0 && (
            <HeaderError>
              <HeaderErrorIcon>
                <FloraExclamationCircle />
              </HeaderErrorIcon>
              <HeaderErrorText>
                Contains {errors} {errors === 1 ? 'error' : 'errors'}
              </HeaderErrorText>
            </HeaderError>
          )}
        </HeaderText>
        <Chevron $open={isOpen} width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Chevron>
      </Header>
      {isOpen && <Body>{deepHighlight(children, q)}</Body>}
    </Card>
  )
}
