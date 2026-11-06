import { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Checkbox, Field } from '@zendeskgarden/react-forms'
import { Notification } from '@zendeskgarden/react-notifications'
import { Table } from '@zendeskgarden/react-tables'
import { Tag } from '@zendeskgarden/react-tags'
import { useAppContext } from '../context/AppContext'
import { highlightText } from '../utils/highlight'
import { PALETTE } from '../flora-theme/elements/palette'
import {
  QA_ACCESS_OPTIONS,
  QA_PERMISSION_GROUPS,
  qaPermissionsForAccess,
  qaLayerCakeSearchText,
  isPresetMatch,
} from '../data/qaPermissions'

export { qaLayerCakeSearchText }

const ALL_PERMISSIONS = QA_PERMISSION_GROUPS.flatMap((g) =>
  g.permissions.map((p) => ({ ...p, groupTitle: g.title })),
)

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

const DeltaTag = styled(Tag).attrs({
  size: 'small',
  isPill: true,
})`
  height: 16px;
  min-height: 16px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  background-color: ${(p) => (p.$added ? '#ddf0c9' : '#f7e5e6')};
  color: ${(p) => (p.$added ? '#25390f' : '#5f1c20')};

  &:hover {
    color: ${(p) => (p.$added ? '#25390f' : '#5f1c20')};
  }
`

const RadioHint = styled.span`
  font-size: 13px;
  line-height: 20px;
  margin-top: 2px;
  color: #646864;
`

const RoleTypeLabel = styled.p`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`

const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
`

const ResetButton = styled(Button).attrs({
  isBasic: true,
  size: 'small',
})`
  flex-shrink: 0;
`

/* Flora Accordion stroke style — hairline rules, no well. */
const AccordionList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  border-top: 1px solid #e9ebed;
`

const AccordionItem = styled.div`
  border-bottom: 1px solid #e9ebed;
  background: transparent;
`

const AccordionHeader = styled.button.attrs({ type: 'button' })`
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

const AccordionTitle = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #2f3130;
`

const AccordionMeta = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: #646864;
  margin-left: 8px;
`

const AccordionChevron = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  color: #646864;

  svg {
    display: block;
    width: 16px;
    height: 16px;
    transform: ${(p) => (p.$open ? 'rotate(180deg)' : 'none')};
    transition: transform 120ms ease;
  }
`

const AccordionBody = styled.div`
  padding: 0 0 16px;
`

const BodyHint = styled.p`
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 20px;
  color: #646864;
`

const EmptyOverrides = styled.div`
  padding: 16px;
  border: 1px dashed #dcdcda;
  border-radius: 8px;
  background: #fafafa;
  font-size: 14px;
  line-height: 20px;
  color: #646864;
`

const OverrideList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const OverrideRow = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid #eae9e8;
  border-radius: 8px;
  background: #fff;
`

const OverrideMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

const OverrideBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 16px;
  margin-top: 4px;
  padding: 0 6px;
  border-radius: 99px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  width: fit-content;
  background: ${(p) => (p.$added ? '#ddf0c9' : '#f7e5e6')};
  color: ${(p) => (p.$added ? '#25390f' : '#5f1c20')};
`

const OverrideLabel = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #2f3130;
`

const OverrideGroup = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #646864;
`

const RemoveOverride = styled(Button).attrs({
  isBasic: true,
  size: 'small',
})`
  flex-shrink: 0;
`

/* Flora Table — same as V6.5 customize table. */
const FloraTableWrap = styled.div`
  max-height: 420px;
  overflow: auto;
  background: ${PALETTE.white};
`

const FloraTable = styled(Table)`
  width: 100%;

  [data-garden-id='tables.header_cell'],
  [data-garden-id='tables.cell'] {
    padding: 0 12px !important;
    box-shadow: none !important;
  }

  [data-garden-id='tables.header_cell'] {
    height: 48px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
    background-color: ${PALETTE.grey[100]} !important;
    background-clip: padding-box;
    border-bottom: 4px solid transparent !important;
  }

  [data-garden-id='tables.header_cell']:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  [data-garden-id='tables.header_cell']:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  [data-garden-id='tables.cell'] {
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #2f3130;
    vertical-align: middle;
    border-bottom: 1px solid ${PALETTE.grey[200]} !important;
  }

  /* Hover / focus only — no persistent selected (blue) row. */
  [data-garden-id='tables.row'],
  [data-garden-id='tables.row'][aria-selected='true'],
  [data-garden-id='tables.row'][data-garden-selected='true'] {
    background-color: transparent !important;
  }

  [data-garden-id='tables.row']:hover,
  [data-garden-id='tables.row']:hover [data-garden-id='tables.cell'] {
    background-color: ${PALETTE.grey[100]} !important;
  }

  [data-garden-id='tables.row']:focus-visible,
  [data-garden-id='tables.row']:focus-visible [data-garden-id='tables.cell'] {
    background-color: ${PALETTE.grey[100]} !important;
  }

  [data-garden-id='tables.row']:last-child [data-garden-id='tables.cell'] {
    border-bottom: none !important;
  }
`

const CheckboxField = styled(Field)`
  margin: 0;
  display: flex;
  align-items: center;
`

const StatusCell = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 16px;
`

const ResolvedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  columns: 2;
  column-gap: 24px;
`

const ResolvedItem = styled.li`
  break-inside: avoid;
  font-size: 13px;
  line-height: 20px;
  color: ${(p) => (p.$on ? '#2f3130' : '#646864')};
  margin-bottom: 4px;

  &::before {
    content: ${(p) => (p.$on ? '"✓ "' : '"– "')};
  }
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

function computeOverrides(typeLevel, values) {
  const preset = qaPermissionsForAccess(typeLevel)
  return ALL_PERMISSIONS.filter(
    (p) => Boolean(values[p.id]) !== Boolean(preset[p.id]),
  ).map((p) => ({
    ...p,
    added: Boolean(values[p.id]),
  }))
}

function initialValuesByLevel() {
  return Object.fromEntries(
    QA_ACCESS_OPTIONS.map((o) => [o.value, qaPermissionsForAccess(o.value)]),
  )
}

export default function QaLayerCakePermissions({
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
  const [openSections, setOpenSections] = useState({})
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const values = valuesByLevel[accessLevel] || qaPermissionsForAccess(accessLevel)
  const typeLabel =
    QA_ACCESS_OPTIONS.find((o) => o.value === accessLevel)?.label || 'Agent'
  const overrides = useMemo(
    () => computeOverrides(accessLevel, values),
    [accessLevel, values],
  )
  const matchingPreset = isPresetMatch(accessLevel, values)
  const preset = qaPermissionsForAccess(accessLevel)

  const permissionRows = useMemo(
    () =>
      ALL_PERMISSIONS.filter((p) => {
        if (!q) return true
        return `${p.label} ${p.groupTitle}`.toLowerCase().includes(q.toLowerCase())
      }),
    [q],
  )

  const selectAll = useMemo(() => {
    if (permissionRows.length === 0) {
      return { checked: false, indeterminate: false }
    }
    const onCount = permissionRows.reduce(
      (n, p) => n + (values[p.id] ? 1 : 0),
      0,
    )
    return {
      checked: onCount === permissionRows.length,
      indeterminate: onCount > 0 && onCount < permissionRows.length,
    }
  }, [permissionRows, values])

  useEffect(() => {
    if (!onPackageDivergenceChange || !packageAccessLevel) return
    const packageValues = valuesByLevel[packageAccessLevel]
    onPackageDivergenceChange(!isPresetMatch(packageAccessLevel, packageValues))
  }, [valuesByLevel, packageAccessLevel, onPackageDivergenceChange])

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const setAccessLevel = (level) => {
    updateProductAccess(roleId, 'qa', {
      optedIn: true,
      saved: false,
      accessLevel: level,
    })
  }

  const applyOverride = (permId, turnOn) => {
    setValuesByLevel((prev) => ({
      ...prev,
      [accessLevel]: { ...prev[accessLevel], [permId]: turnOn },
    }))
  }

  const applySelectAll = (turnOn) => {
    setValuesByLevel((prev) => {
      const next = { ...prev[accessLevel] }
      for (const p of permissionRows) {
        next[p.id] = turnOn
      }
      return { ...prev, [accessLevel]: next }
    })
  }

  const removeOverride = (permId) => {
    setValuesByLevel((prev) => ({
      ...prev,
      [accessLevel]: { ...prev[accessLevel], [permId]: Boolean(preset[permId]) },
    }))
  }

  const resetToDefault = () => {
    if (matchingPreset) return
    setValuesByLevel((prev) => ({
      ...prev,
      [accessLevel]: qaPermissionsForAccess(accessLevel),
    }))
    setToastMessage(
      `Quality assurance ${typeLabel.toLowerCase()} reset to default.`,
    )
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  const overridesMeta =
    overrides.length === 0
      ? `Inheriting ${typeLabel}`
      : `${overrides.length} override${overrides.length === 1 ? '' : 's'}`

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

      <RoleTypeLabel>Role type</RoleTypeLabel>
      <RadioGroup>
        {QA_ACCESS_OPTIONS.map((option) => {
          const optionCustomized = !isPresetMatch(
            option.value,
            valuesByLevel[option.value],
          )
          return (
            <RadioLabel key={option.value}>
              <RadioInput
                name={`qa-layer-access-${roleId}`}
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

      <AccordionList>
        <AccordionItem>
          <AccordionHeader
            aria-expanded={Boolean(openSections.overrides)}
            onClick={() => toggleSection('overrides')}
          >
            <span>
              <AccordionTitle>Overrides</AccordionTitle>
              <AccordionMeta>{overridesMeta}</AccordionMeta>
            </span>
            <AccordionChevron $open={openSections.overrides}>
              <ChevronIcon />
            </AccordionChevron>
          </AccordionHeader>
          {openSections.overrides && (
            <AccordionBody>
              <BodyHint>
                Starts from the account’s recommended Agent baseline, then applies{' '}
                {typeLabel}. This role only stores exceptions on top of that type —
                add overrides when this role must differ.
              </BodyHint>
              {overrides.length === 0 ? (
                <EmptyOverrides>
                  No overrides — this role fully inherits {typeLabel} QA access.
                </EmptyOverrides>
              ) : (
                <OverrideList>
                  {overrides.map((item) => (
                    <OverrideRow key={item.id}>
                      <OverrideMain>
                        <OverrideLabel>{highlightText(item.label, q)}</OverrideLabel>
                        <OverrideGroup>{item.groupTitle}</OverrideGroup>
                        <OverrideBadge $added={item.added}>
                          {item.added ? 'Added' : 'Removed'}
                        </OverrideBadge>
                      </OverrideMain>
                      <RemoveOverride onClick={() => removeOverride(item.id)}>
                        Remove
                      </RemoveOverride>
                    </OverrideRow>
                  ))}
                </OverrideList>
              )}
            </AccordionBody>
          )}
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader
            aria-expanded={Boolean(openSections.exception)}
            onClick={() => toggleSection('exception')}
          >
            <span>
              <AccordionTitle>Add an exception</AccordionTitle>
            </span>
            <AccordionChevron $open={openSections.exception}>
              <ChevronIcon />
            </AccordionChevron>
          </AccordionHeader>
          {openSections.exception && (
            <AccordionBody>
              <BodyHint>
                Check or uncheck a permission to flip it relative to {typeLabel}.
                That creates an override on this role — rows stay put; Added /
                Removed marks the delta.
              </BodyHint>
              <FloraTableWrap>
                <FloraTable>
                  <Table.Head isSticky>
                    <Table.HeaderRow>
                      <Table.HeaderCell isMinimum>
                        <CheckboxField>
                          <Checkbox
                            checked={selectAll.checked}
                            indeterminate={selectAll.indeterminate}
                            onChange={(e) => applySelectAll(e.target.checked)}
                          >
                            <Field.Label hidden>Select all permissions</Field.Label>
                          </Checkbox>
                        </CheckboxField>
                      </Table.HeaderCell>
                      <Table.HeaderCell>Permission</Table.HeaderCell>
                      <Table.HeaderCell width={120}>Status</Table.HeaderCell>
                    </Table.HeaderRow>
                  </Table.Head>
                  <Table.Body>
                    {permissionRows.map((p) => {
                      const on = Boolean(values[p.id])
                      const inheritedOn = Boolean(preset[p.id])
                      const isOverride = on !== inheritedOn
                      return (
                        <Table.Row key={p.id}>
                          <Table.Cell isMinimum>
                            <CheckboxField>
                              <Checkbox
                                checked={on}
                                onChange={(e) =>
                                  applyOverride(p.id, e.target.checked)
                                }
                              >
                                <Field.Label hidden>{p.label}</Field.Label>
                              </Checkbox>
                            </CheckboxField>
                          </Table.Cell>
                          <Table.Cell>{highlightText(p.label, q)}</Table.Cell>
                          <Table.Cell>
                            <StatusCell>
                              {isOverride && (
                                <DeltaTag $added={on}>
                                  {on ? 'Added' : 'Removed'}
                                </DeltaTag>
                              )}
                            </StatusCell>
                          </Table.Cell>
                        </Table.Row>
                      )
                    })}
                  </Table.Body>
                </FloraTable>
              </FloraTableWrap>
            </AccordionBody>
          )}
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader
            aria-expanded={Boolean(openSections.resolved)}
            onClick={() => toggleSection('resolved')}
          >
            <span>
              <AccordionTitle>Full effective access</AccordionTitle>
            </span>
            <AccordionChevron $open={openSections.resolved}>
              <ChevronIcon />
            </AccordionChevron>
          </AccordionHeader>
          {openSections.resolved && (
            <AccordionBody>
              <BodyHint>
                Effective access after account baseline → {typeLabel} → this role’s
                overrides.
              </BodyHint>
              <ResolvedList>
                {ALL_PERMISSIONS.map((p) => (
                  <ResolvedItem key={p.id} $on={Boolean(values[p.id])}>
                    {highlightText(p.label, q)}
                  </ResolvedItem>
                ))}
              </ResolvedList>
            </AccordionBody>
          )}
        </AccordionItem>
      </AccordionList>

      <ActionsRow>
        <ResetButton onClick={resetToDefault}>Reset to default</ResetButton>
      </ActionsRow>
    </Section>
  )
}
