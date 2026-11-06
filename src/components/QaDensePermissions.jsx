import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Notification } from '@zendeskgarden/react-notifications'
import { Tag } from '@zendeskgarden/react-tags'
import { useAppContext } from '../context/AppContext'
import { highlightText } from '../utils/highlight'
import {
  QA_ACCESS_OPTIONS,
  QA_PERMISSION_GROUPS,
  qaPermissionsForAccess,
  qaPermissionsSearchText,
  groupsMatchingQuery,
  groupsDivergedFromPreset,
  isPresetMatch,
} from '../data/qaPermissions'

export { qaPermissionsSearchText }

const ToastWrapper = styled.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id="notifications.notification"] {
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

/* Flora Tag small + pill; colors from Flora Core tag/fg/orange + tag/bg/orange. */
const CustomizedTag = styled(Tag).attrs({
  size: 'small',
  isPill: true,
})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: #fae7d7; /* tag/bg/orange */
  color: #4a290c; /* tag/fg/orange */

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

/* Flora Basic (text) + small — Reset to default. */
const ResetButton = styled(Button).attrs({
  isBasic: true,
  size: 'small',
})`
  flex-shrink: 0;
`

/* Flora Outline (default) + small — Open all / Close all. */
const OpenAllButton = styled(Button).attrs({
  size: 'small',
})`
  flex-shrink: 0;
  margin-inline-end: -15px;
`

/* Nested job groups — Flora Accordion stroke style (hairline rules, no well). */
const NestedList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  border-top: 1px solid #e9ebed;
`

const NestedGroup = styled.div`
  border-bottom: 1px solid #e9ebed;
  background: transparent;
`

const NestedHeader = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin: 0;
  padding: 16px 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
`

const NestedTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`

const NestedMeta = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #646864;
  margin-left: 8px;
`

const NestedChevron = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  color: #646864;

  svg {
    display: block;
    width: 16px;
    height: 16px;
    transform: ${p => (p.$open ? 'rotate(180deg)' : 'none')};
    transition: transform 120ms ease;
  }
`

const NestedBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 0 16px;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
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

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function countEnabled(group, values) {
  return group.permissions.filter((p) => values[p.id]).length
}

function initialValuesByLevel() {
  return Object.fromEntries(
    QA_ACCESS_OPTIONS.map((o) => [o.value, qaPermissionsForAccess(o.value)]),
  )
}

export default function QaDensePermissions({
  roleId,
  query,
  /* Page role-type package’s QA access level — used to report divergence up. */
  packageAccessLevel,
  onPackageDivergenceChange,
}) {
  const { getProductAccess, updateProductAccess } = useAppContext()
  const { accessLevel: storedLevel } = getProductAccess(roleId, 'qa')
  const accessLevel = storedLevel || 'agent'
  const q = (query || '').trim()

  /* Per–role-type checkbox state so switching Admin/Agent/Reviewer keeps
     customizations made on the other types. */
  const [valuesByLevel, setValuesByLevel] = useState(initialValuesByLevel)
  const [openGroups, setOpenGroups] = useState({})
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const values = valuesByLevel[accessLevel] || qaPermissionsForAccess(accessLevel)

  const searchOpenIds = useMemo(() => groupsMatchingQuery(q), [q])
  const divergedIds = useMemo(
    () => groupsDivergedFromPreset(accessLevel, values),
    [accessLevel, values],
  )

  /* Tell Create role whether the package’s QA level still matches its preset
     so the page-level Customized tag can clear after Reset to default. */
  useEffect(() => {
    if (!onPackageDivergenceChange || !packageAccessLevel) return
    const packageValues = valuesByLevel[packageAccessLevel]
    onPackageDivergenceChange(!isPresetMatch(packageAccessLevel, packageValues))
  }, [valuesByLevel, packageAccessLevel, onPackageDivergenceChange])

  /* Open nested groups that match search or diverge from the active preset. */
  useEffect(() => {
    if (searchOpenIds.length === 0 && divergedIds.length === 0) return
    setOpenGroups((prev) => {
      const next = { ...prev }
      let changed = false
      ;[...searchOpenIds, ...divergedIds].forEach((id) => {
        if (!next[id]) {
          next[id] = true
          changed = true
        }
      })
      return changed ? next : prev
    })
  }, [searchOpenIds, divergedIds])

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

  const toggleGroup = (id) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const allGroupsOpen = QA_PERMISSION_GROUPS.every((g) => openGroups[g.id])
  const toggleAllGroups = () => {
    if (allGroupsOpen) {
      setOpenGroups({})
      return
    }
    setOpenGroups(
      Object.fromEntries(QA_PERMISSION_GROUPS.map((g) => [g.id, true])),
    )
  }

  return (
    <Section>
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
                name={`qa-dense-access-${roleId}`}
                value={option.value}
                checked={accessLevel === option.value}
                onChange={() => setAccessLevel(option.value)}
              />
              <RadioTextWrap>
                <RadioTitleRow>
                  <RadioTitle>{highlightText(option.label, q)}</RadioTitle>
                  {optionCustomized && (
                    <CustomizedTag>Customized</CustomizedTag>
                  )}
                </RadioTitleRow>
                <RadioHint>{highlightText(option.description, q)}</RadioHint>
              </RadioTextWrap>
            </RadioLabel>
          )
        })}
      </RadioGroup>

      <ActionsRow>
        <ResetButton onClick={resetToDefault}>
          Reset to default
        </ResetButton>
        <OpenAllButton onClick={toggleAllGroups}>
          {allGroupsOpen ? 'Close all' : 'Open all'}
        </OpenAllButton>
      </ActionsRow>

      <NestedList>
        {QA_PERMISSION_GROUPS.map((group) => {
          const open = Boolean(openGroups[group.id])
          const enabled = countEnabled(group, values)
          return (
            <NestedGroup key={group.id}>
              <NestedHeader
                $open={open}
                aria-expanded={open}
                onClick={() => toggleGroup(group.id)}
              >
                <span>
                  <NestedTitle>{highlightText(group.title, q)}</NestedTitle>
                  <NestedMeta>
                    {enabled}/{group.permissions.length} on
                  </NestedMeta>
                </span>
                <NestedChevron $open={open}>
                  <ChevronIcon />
                </NestedChevron>
              </NestedHeader>
              {open && (
                <NestedBody>
                  {group.permissions.map((p) => (
                    <CheckboxLabel key={p.id}>
                      <CheckboxInput
                        checked={Boolean(values[p.id])}
                        onChange={(e) => togglePerm(p.id, e.target.checked)}
                      />
                      {highlightText(p.label, q)}
                    </CheckboxLabel>
                  ))}
                </NestedBody>
              )}
            </NestedGroup>
          )
        })}
      </NestedList>
    </Section>
  )
}
