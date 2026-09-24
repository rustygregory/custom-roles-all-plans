import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { FILTER_GROUPS, FILTER_TOPICS } from '../data/permissionFilters'
import { BAR_HEIGHT } from '../prototype-bar/PrototypeBar'

/* Flora Filter drawer: full-height panel on the right with scrim, square corners.
   Starts below the prototype bar so version/comment chrome stays usable, and
   portals into the comment root so reviewers can pin comments on the filter. */
const Scrim = styled.div`
  position: fixed;
  top: ${BAR_HEIGHT}px;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(47, 57, 65, 0.45);
  z-index: 1100;
`

const Panel = styled.div`
  position: fixed;
  top: ${BAR_HEIGHT}px;
  right: 0;
  bottom: 0;
  width: min(380px, 100vw);
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 0;
  box-shadow: -4px 0 16px rgba(47, 57, 65, 0.12);
  z-index: 1101;
  overflow: hidden;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 20px 16px;
  flex-shrink: 0;
`

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #2f3941;
`

const CloseButton = styled.button.attrs({ type: 'button' })`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 0;
  background: transparent;
  color: #68737d;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #2f3941;
  }
`

const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 20px 24px;
`

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-top: 1px solid #e9ebed;
  background: #fff;
  flex-shrink: 0;
`

const Section = styled.div`
  margin-bottom: 28px;
`

const SectionTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const OptionLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
`

const OptionInput = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-top: 2px;
  accent-color: #1f73b7;
  cursor: pointer;
`

function toggleInList(list, id) {
  return list.includes(id) ? list.filter((x) => x !== id) : [...list, id]
}

const CloseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M1 1l10 10M11 1L1 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

export default function PermissionsFilterDrawer({
  isOpen,
  onClose,
  value,
  onApply,
}) {
  const [draft, setDraft] = useState(value)

  useEffect(() => {
    if (isOpen) setDraft(value)
  }, [isOpen, value])

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleApply = () => {
    onApply(draft)
    onClose()
  }

  /* Prefer the comment root so pins can land on the filter; fall back to body. */
  const portalTarget =
    document.querySelector('[data-comment-root="true"]') || document.body

  return createPortal(
    <>
      <Scrim onClick={onClose} aria-hidden="true" />
      <Panel role="dialog" aria-modal="true" aria-labelledby="permissions-filter-title">
        <Header>
          <Title id="permissions-filter-title">Filter</Title>
          <CloseButton aria-label="Close" onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </Header>
        <Body>
          <Section>
            <SectionTitle>Availability</SectionTitle>
            <OptionLabel>
              <OptionInput
                checked={draft.availableOnly}
                onChange={() => setDraft((d) => ({ ...d, availableOnly: !d.availableOnly }))}
              />
              Only available settings
            </OptionLabel>
          </Section>

          <Section>
            <SectionTitle>Group</SectionTitle>
            <OptionList>
              {FILTER_GROUPS.map((g) => (
                <OptionLabel key={g.id}>
                  <OptionInput
                    checked={draft.groups.includes(g.id)}
                    onChange={() => setDraft((d) => ({
                      ...d,
                      groups: toggleInList(d.groups, g.id),
                    }))}
                  />
                  {g.label}
                </OptionLabel>
              ))}
            </OptionList>
          </Section>

          <Section>
            <SectionTitle>Topic</SectionTitle>
            <OptionList>
              {FILTER_TOPICS.map((t) => (
                <OptionLabel key={t.id}>
                  <OptionInput
                    checked={draft.topics.includes(t.id)}
                    onChange={() => setDraft((d) => ({
                      ...d,
                      topics: toggleInList(d.topics, t.id),
                    }))}
                  />
                  {t.label}
                </OptionLabel>
              ))}
            </OptionList>
          </Section>
        </Body>
        <Footer>
          <Button isBasic onClick={onClose}>Cancel</Button>
          <Button isPrimary onClick={handleApply}>Apply Filters</Button>
        </Footer>
      </Panel>
    </>,
    portalTarget,
  )
}
