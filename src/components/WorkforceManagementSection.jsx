import { useState } from 'react'
import styled from 'styled-components'
import { Alert } from '@zendeskgarden/react-notifications'
import { Anchor } from '@zendeskgarden/react-buttons'
import { Field } from '@zendeskgarden/react-forms'
import { Menu, Item, ItemGroup } from '@zendeskgarden/react-dropdowns'
import { highlightText } from '../utils/highlight'

/* V4 body for the WFM role assignment capsule.
   Opt-in → irreversible alert → WFM role picker → nested permission groups
   (Scheduling / Forecasting / Team management) as collapsible clip boxes. */

const Section = styled.div`
  padding-bottom: 8px;
`

const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3130;
  font-weight: 500;
`

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  accent-color: #1f73b7;
  cursor: pointer;
`

const HelperText = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: #646864;
`

const StyledAlert = styled(Alert)`
  width: 100%;
  max-width: none;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #f8f9f9;
  border-color: #d8dcde;
  padding: 16px;
  padding-left: 40px;
  box-sizing: border-box;

  [data-garden-id='notifications.icon'] {
    left: 16px;
    margin-top: 0;
  }

  [data-garden-id='notifications.title'] {
    margin: 0;
  }

  [data-garden-id='notifications.paragraph'] {
    margin: 0;
  }
`

const PickerBlock = styled.div`
  margin-top: 16px;
`

/* Flora Field spacing: 0px between label and hint containers;
   hint → control ~8px (xs). */
const MenuField = styled(Field)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;

  & > * {
    margin-block: 0;
  }

  [data-garden-id='forms.input_label'],
  [data-garden-id='forms.input_hint'] {
    margin: 0;
    padding: 0;
  }

  [data-garden-id='forms.input_hint'] {
    margin-bottom: 8px;
    /* Flora fg/subtle */
    color: #646864;
  }
`

const WFM_MENU_WIDTH = 250

const MenuWrap = styled.div`
  width: ${WFM_MENU_WIDTH}px;

  && button {
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
  }
`

const HintLink = styled(Anchor)`
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  vertical-align: baseline;
`

function openWorkforceManagementTab(e) {
  e.preventDefault()
  const tab = window.open('about:blank', '_blank')
  if (!tab) return
  try {
    tab.opener = null
  } catch {
    /* ignore */
  }
  tab.document.title = 'Workforce Management'
  tab.document.body.innerHTML = ''
}

const WFM_ROLE_OPTIONS = [
  { value: 'agent', label: 'Agent' },
  { value: 'admin', label: 'Admin' },
  { value: 'team_lead', label: 'Team Lead' },
  { value: 'scheduler', label: 'Scheduler' },
]

const PERMISSION_GROUPS = [
  {
    id: 'scheduling',
    title: 'Scheduling',
    permissions: [
      { id: 'view-schedules', label: 'View schedules' },
      { id: 'manage-schedules', label: 'Manage schedules' },
    ],
  },
  {
    id: 'forecasting',
    title: 'Forecasting',
    permissions: [
      { id: 'view-forecasts', label: 'View forecasts' },
      { id: 'manage-forecasts', label: 'Manage forecasts' },
    ],
  },
  {
    id: 'team-management',
    title: 'Team management',
    permissions: [
      { id: 'view-teams', label: 'View teams' },
      { id: 'manage-teams', label: 'Manage teams' },
    ],
  },
]

export const WFM_ASSIGNMENT_SEARCH_TEXT = [
  'WFM role assignment',
  'Opt in for WFM role assignment',
  'WFM role',
  'Agent',
  'Admin',
  'Team Lead',
  'Scheduler',
  'Members receive this WFM role',
  'Manage its permissions in Workforce Management',
  'Workforce Management settings',
  'Once you enable WFM role assignment for this role, you can’t turn it off',
  'Scheduling',
  'Forecasting',
  'Team management',
  'View schedules',
  'Manage schedules',
  'View forecasts',
  'Manage forecasts',
  'View teams',
  'Manage teams',
].join(' ')

/* Match Tickets capsule subsection rhythm (SettingsCapsule body gap = 24px). */
const PermissionBlocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`

const SubSectionHeader = styled.h3`
  /* Match Tickets: title → controls 8px; between-section spacing is 24px gap. */
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #2f3130;
  cursor: pointer;
`

const PermissionCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
`

export default function WorkforceManagementSection({ query, saved = false }) {
  /* Opt-in stays toggleable until Save. After save, checkbox + info well disappear. */
  const [assignmentEnabled, setAssignmentEnabled] = useState(false)
  const [wfmRole, setWfmRole] = useState('')

  const handleOptIn = (e) => {
    if (saved) return
    const next = e.target.checked
    setAssignmentEnabled(next)
    if (next && !wfmRole) setWfmRole('agent')
  }

  const showOptIn = !saved
  const showPicker = assignmentEnabled
  const selectedOption = WFM_ROLE_OPTIONS.find((o) => o.value === wfmRole)
  const selectedItems = wfmRole
    ? [{ value: wfmRole, label: selectedOption?.label || wfmRole, type: 'radio' }]
    : []

  return (
    <Section>
      {showOptIn && (
        <>
          <CheckboxRow>
            <CheckboxInput
              checked={assignmentEnabled}
              onChange={handleOptIn}
            />
            {highlightText('Opt in for WFM role assignment', query)}
          </CheckboxRow>

          <StyledAlert type="info" role="note">
            <Alert.Title>
              {highlightText(
                'Once you enable WFM role assignment for this role, you can’t turn it off.',
                query,
              )}
            </Alert.Title>
            <Alert.Paragraph>
              {highlightText('You can change the selected WFM role later.', query)}
            </Alert.Paragraph>
          </StyledAlert>
        </>
      )}

      {showPicker && (
        <>
          <PickerBlock style={saved ? { marginTop: 0 } : undefined}>
            <MenuField>
              <Field.Label>
                {highlightText('WFM role', query)}
              </Field.Label>
              <Field.Hint>
                {highlightText(
                  'Members receive this WFM role. Manage its permissions in Workforce Management.',
                  query,
                )}
                {' '}
                <HintLink
                  isExternal
                  href="#workforce-management"
                  onClick={openWorkforceManagementTab}
                >
                  {highlightText('Workforce Management settings', query)}
                </HintLink>
              </Field.Hint>
              <MenuWrap>
                <Menu
                  button={selectedOption?.label || 'Select a WFM role'}
                  selectedItems={selectedItems}
                  style={{
                    width: WFM_MENU_WIDTH,
                    minWidth: WFM_MENU_WIDTH,
                    boxSizing: 'border-box',
                  }}
                  onChange={({ selectedItems: next }) => {
                    const value = next?.[0]?.value
                    if (value) setWfmRole(value)
                  }}
                >
                  <ItemGroup type="radio">
                    {WFM_ROLE_OPTIONS.map((opt) => (
                      <Item
                        key={opt.value}
                        value={opt.value}
                        label={opt.label}
                        name="wfm-role"
                      >
                        {opt.label}
                      </Item>
                    ))}
                  </ItemGroup>
                </Menu>
              </MenuWrap>
            </MenuField>
          </PickerBlock>

          <PermissionBlocks>
            {PERMISSION_GROUPS.map((group) => (
              <div key={group.id}>
                <SubSectionHeader>
                  {highlightText(group.title, query)}
                </SubSectionHeader>
                <CheckboxGroup>
                  {group.permissions.map((p) => (
                    <CheckboxLabel key={p.id}>
                      <PermissionCheckbox />
                      {highlightText(p.label, query)}
                    </CheckboxLabel>
                  ))}
                </CheckboxGroup>
              </div>
            ))}
          </PermissionBlocks>
        </>
      )}

      {saved && !assignmentEnabled && (
        <HelperText>
          {highlightText(
            'WFM role assignment for this role is managed in Workforce Management.',
            query,
          )}
        </HelperText>
      )}
    </Section>
  )
}
