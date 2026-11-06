import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Notification } from '@zendeskgarden/react-notifications'
import { Tag } from '@zendeskgarden/react-tags'
import { useAppContext } from '../context/AppContext'
import { highlightText } from '../utils/highlight'
import {
  QA_ACCESS_OPTIONS,
  QA_DOMAINS,
  qaPermissionsForAccess,
  qaDomainMapSearchText,
  domainsMatchingQuery,
  isPresetMatch,
} from '../data/qaPermissions'

export { qaDomainMapSearchText }

const ToastWrapper = styled.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id='notifications.notification'] {
    min-width: 410px;
  }
`

const Section = styled.div`
  padding-bottom: 8px;
`

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const RadioLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
`

const RadioInput = styled.input.attrs({ type: 'radio' })`
  width: 16px;
  height: 16px;
  min-width: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 2px;
`

const RadioTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const RadioTitleRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`

const RadioTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3130;
`

const CustomizedTag = styled(Tag).attrs({
  size: 'small',
  isPill: true,
})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: #fae7d7;
  color: #4a290c;

  &:hover {
    color: #4a290c;
  }
`

const RadioHint = styled.span`
  font-size: 13px;
  line-height: 20px;
  margin-top: 2px;
  color: #646864;
`

const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 32px;
`

const ResetButton = styled(Button).attrs({
  isBasic: true,
  size: 'small',
})`
  flex-shrink: 0;
`

/* Holds map ↔ domain detail. min-height ratchets up so the capsule top
   stays put when content shrinks; the page grows when content is taller. */
const Stage = styled.div`
  min-height: ${(p) => (p.$minHeight ? `${p.$minHeight}px` : '0')};
`

const MapIntro = styled.p`
  margin: 24px 0 12px;
  font-size: 14px;
  line-height: 20px;
  color: #646864;
`

const DomainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`

const DomainTile = styled.button.attrs({ type: 'button' })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin: 0;
  padding: 16px;
  border: 1px solid ${(p) => (p.$hit ? '#1f73b7' : '#dcdcda')};
  border-radius: 8px;
  background: ${(p) => (p.$hit ? '#f0f7fc' : '#fff')};
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: #2f3130;
  transition: border-color 120ms ease, background 120ms ease;

  &:hover {
    border-color: #999b97;
    background: #f7f7f7;
  }

  &:focus-visible {
    outline: 2px solid #1f73b7;
    outline-offset: 2px;
  }
`

const DomainTileTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`

const DomainTileDesc = styled.span`
  font-size: 13px;
  line-height: 18px;
  color: #646864;
`

const DomainTileMeta = styled.span`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: #646864;
`

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  margin: 24px 0 16px;
  font-size: 14px;
  line-height: 20px;
`

const CrumbButton = styled.button.attrs({ type: 'button' })`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: #1f73b7;
  cursor: pointer;
  font: inherit;
  text-decoration: underline;

  &:hover {
    color: #144a75;
  }
`

const CrumbSep = styled.span`
  color: #999b97;
`

const CrumbCurrent = styled.span`
  font-weight: 600;
  color: #2f3130;
`

const DomainDetailTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #2f3130;
`

const DomainDetailDesc = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 20px;
  color: #646864;
`

const Subsection = styled.div`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`

const SubsectionTitle = styled.h4`
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 16px;
  font-weight: 600;
  color: #646864;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 20px;
  color: #2f3130;
  cursor: pointer;
`

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  min-width: 16px;
  margin-top: 2px;
  accent-color: #1f73b7;
  cursor: pointer;
`

function countEnabled(permissions, values) {
  return permissions.filter((p) => values[p.id]).length
}

function domainPermissionCount(domain) {
  return domain.groups.reduce((n, g) => n + g.permissions.length, 0)
}

function domainEnabledCount(domain, values) {
  return domain.groups.reduce((n, g) => n + countEnabled(g.permissions, values), 0)
}

function initialValuesByLevel() {
  return Object.fromEntries(
    QA_ACCESS_OPTIONS.map((o) => [o.value, qaPermissionsForAccess(o.value)]),
  )
}

export default function QaDomainMapPermissions({
  roleId,
  query,
  packageAccessLevel,
  onPackageDivergenceChange,
}) {
  const { getProductAccess, updateProductAccess } = useAppContext()
  const { accessLevel: storedLevel } = getProductAccess(roleId, 'qa')
  const accessLevel = storedLevel || 'agent'
  const q = (query || '').trim()

  const [valuesByLevel, setValuesByLevel] = useState(initialValuesByLevel)
  const [activeDomainId, setActiveDomainId] = useState(null)
  const [stageMinHeight, setStageMinHeight] = useState(0)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const anchorTopRef = useRef(null)

  const values = valuesByLevel[accessLevel] || qaPermissionsForAccess(accessLevel)
  const hitDomainIds = useMemo(() => domainsMatchingQuery(q), [q])
  const activeDomain = QA_DOMAINS.find((d) => d.id === activeDomainId) || null

  const lockStageHeight = () => {
    if (!stageRef.current) return
    const h = stageRef.current.offsetHeight
    setStageMinHeight((prev) => Math.max(prev, h))
  }

  const rememberCapsuleTop = () => {
    if (!sectionRef.current) return
    anchorTopRef.current = sectionRef.current.getBoundingClientRect().top
  }

  const goToDomain = (id) => {
    rememberCapsuleTop()
    lockStageHeight()
    setActiveDomainId(id)
  }

  const goToMap = () => {
    rememberCapsuleTop()
    lockStageHeight()
    setActiveDomainId(null)
  }

  useEffect(() => {
    if (!onPackageDivergenceChange || !packageAccessLevel) return
    const packageValues = valuesByLevel[packageAccessLevel]
    onPackageDivergenceChange(!isPresetMatch(packageAccessLevel, packageValues))
  }, [valuesByLevel, packageAccessLevel, onPackageDivergenceChange])

  /* Search jump: if exactly one domain hits, open it; if query clears, stay put. */
  useEffect(() => {
    if (!q) return
    if (hitDomainIds.length === 1 && hitDomainIds[0] !== activeDomainId) {
      goToDomain(hitDomainIds[0])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, hitDomainIds])

  /* After map ↔ detail swap, keep the capsule top at the same viewport Y
     (page may grow via stage min-height; scroll corrects any remaining drift). */
  useLayoutEffect(() => {
    if (anchorTopRef.current == null || !sectionRef.current) return
    const nextTop = sectionRef.current.getBoundingClientRect().top
    const delta = nextTop - anchorTopRef.current
    anchorTopRef.current = null
    if (Math.abs(delta) < 0.5) return
    let node = sectionRef.current.parentElement
    while (node && node !== document.body) {
      const style = window.getComputedStyle(node)
      const canScroll =
        /(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight
      if (canScroll) {
        node.scrollTop += delta
        return
      }
      node = node.parentElement
    }
    window.scrollBy(0, delta)
  }, [activeDomainId])

  /* Ratchet min-height after paint so taller detail views grow the page. */
  useLayoutEffect(() => {
    if (!stageRef.current) return
    const h = stageRef.current.offsetHeight
    setStageMinHeight((prev) => Math.max(prev, h))
  }, [activeDomainId, values])

  const setAccessLevel = (level) => {
    updateProductAccess(roleId, 'qa', {
      optedIn: true,
      saved: false,
      accessLevel: level,
    })
  }

  const togglePerm = (id, checked) => {
    setValuesByLevel((prev) => ({
      ...prev,
      [accessLevel]: { ...prev[accessLevel], [id]: checked },
    }))
  }

  const resetToDefault = () => {
    if (isPresetMatch(accessLevel, values)) return
    const label = (
      QA_ACCESS_OPTIONS.find((o) => o.value === accessLevel)?.label || accessLevel
    ).toLowerCase()
    setValuesByLevel((prev) => ({
      ...prev,
      [accessLevel]: qaPermissionsForAccess(accessLevel),
    }))
    setToastMessage(`Quality assurance ${label} reset to default.`)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  return (
    <Section ref={sectionRef}>
      {showToast && (
        <ToastWrapper>
          <Notification type="success">
            <Notification.Title>{toastMessage}</Notification.Title>
            <Notification.Close aria-label="Close" onClick={() => setShowToast(false)} />
          </Notification>
        </ToastWrapper>
      )}

      <RadioGroup>
        {QA_ACCESS_OPTIONS.map((option) => {
          const optionValues = valuesByLevel[option.value]
          const optionCustomized = !isPresetMatch(option.value, optionValues)
          return (
            <RadioLabel key={option.value}>
              <RadioInput
                name={`qa-domain-access-${roleId}`}
                value={option.value}
                checked={accessLevel === option.value}
                onChange={() => setAccessLevel(option.value)}
              />
              <RadioTextWrap>
                <RadioTitleRow>
                  <RadioTitle>{highlightText(option.label, q)}</RadioTitle>
                  {optionCustomized && <CustomizedTag>Customized</CustomizedTag>}
                </RadioTitleRow>
                <RadioHint>{highlightText(option.description, q)}</RadioHint>
              </RadioTextWrap>
            </RadioLabel>
          )
        })}
      </RadioGroup>

      <ActionsRow>
        <ResetButton onClick={resetToDefault}>Reset to default</ResetButton>
      </ActionsRow>

      <Stage ref={stageRef} $minHeight={stageMinHeight}>
        {!activeDomain ? (
          <>
            <MapIntro>
              Choose a domain to review its settings. You only see one area at a time.
            </MapIntro>
            <DomainGrid>
              {QA_DOMAINS.map((domain) => {
                const total = domainPermissionCount(domain)
                const enabled = domainEnabledCount(domain, values)
                const hit = hitDomainIds.includes(domain.id)
                return (
                  <DomainTile
                    key={domain.id}
                    $hit={hit && Boolean(q)}
                    onClick={() => goToDomain(domain.id)}
                  >
                    <DomainTileTitle>{highlightText(domain.title, q)}</DomainTileTitle>
                    <DomainTileDesc>{highlightText(domain.description, q)}</DomainTileDesc>
                    <DomainTileMeta>
                      {enabled}/{total} on
                    </DomainTileMeta>
                  </DomainTile>
                )
              })}
            </DomainGrid>
          </>
        ) : (
          <>
            <Breadcrumb>
              <CrumbButton onClick={goToMap}>All domains</CrumbButton>
              <CrumbSep>/</CrumbSep>
              <CrumbCurrent>{activeDomain.title}</CrumbCurrent>
            </Breadcrumb>
            <DomainDetailTitle>{highlightText(activeDomain.title, q)}</DomainDetailTitle>
            <DomainDetailDesc>{highlightText(activeDomain.description, q)}</DomainDetailDesc>
            {activeDomain.groups.map((group) => (
              <Subsection key={group.id}>
                {activeDomain.groups.length > 1 && (
                  <SubsectionTitle>{highlightText(group.title, q)}</SubsectionTitle>
                )}
                {group.permissions.map((p) => (
                  <CheckboxLabel key={p.id}>
                    <CheckboxInput
                      checked={Boolean(values[p.id])}
                      onChange={(e) => togglePerm(p.id, e.target.checked)}
                    />
                    {highlightText(p.label, q)}
                  </CheckboxLabel>
                ))}
              </Subsection>
            ))}
          </>
        )}
      </Stage>
    </Section>
  )
}
