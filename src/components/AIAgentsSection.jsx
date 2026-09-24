import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Alert } from '@zendeskgarden/react-notifications'
import { useAppContext } from '../context/AppContext'
import { highlightText } from '../utils/highlight'

/* Renders as the body of the AI agents capsule — the capsule header carries the
   title and description, so this component is only the content. */
const Section = styled.div`
  padding-bottom: 8px;
`

const StyledAlert = styled(Alert)`
  max-width: 630px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #f8f9f9;
  border-color: #d8dcde;
  padding: 16px;
  padding-left: 40px;

  [data-garden-id="notifications.icon"] {
    left: 16px;
    margin-top: 0;
  }

  [data-garden-id="notifications.title"] {
    margin: 0;
  }

  [data-garden-id="notifications.paragraph"] {
    margin: 0;
  }
`

const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;
  font-weight: 500;
`

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  accent-color: #1f73b7;
  cursor: pointer;
`

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`

const RadioLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #2f3941;
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

const RadioTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #2f3941;
`

const RadioHint = styled.span`
  font-size: 13px;
  color: #68737d;
  margin-top: 2px;
`

const AI_AGENTS_OPTIONS = [
  {
    value: 'no_access',
    label: 'No access',
    description: 'Users with this custom role can’t view or access AI agents. Selecting this option doesn’t hide AI agents from the product icons menu, but users can’t access the AI agents dashboard.',
  },
  {
    value: 'client_admin',
    label: 'Client admin',
    description: 'Users can manage all AI agent capabilities, including creating, editing, publishing, and deleting agents, configuring settings, and managing API integrations.',
  },
  {
    value: 'client_editor',
    label: 'Client editor',
    description: 'Users can create and edit AI agents, but can’t publish or delete agents, configure settings, or manage API integrations.',
  },
  {
    value: 'client_user',
    label: 'Client user',
    description: 'Users can manage AI agents with restrictions on sensitive capabilities, such as agents cannot access API integration.',
  },
]

/* The capsule wrapper can't see inside this component, so it searches this
   text instead when deciding whether the capsule has a hit. */
export const AI_AGENTS_SEARCH_TEXT = [
  'Opt in for AI agents',
  'Opting in to AI agents moves settings to this page',
  'AI agent settings will only be available here in the roles and permissions pages.',
  ...AI_AGENTS_OPTIONS.flatMap(o => [o.label, o.description]),
].join(' ')

export default function AIAgentsSection({ roleId, query, directAccess = false }) {
  const radioRef = useRef(null)
  const { getAiAgentsState, updateAiAgentsState } = useAppContext()
  const { optedIn, saved, accessLevel } = getAiAgentsState(roleId)
  const options = AI_AGENTS_OPTIONS
  const showRadios = directAccess || optedIn || saved

  useEffect(() => {
    if (!directAccess) return
    if (!accessLevel) {
      updateAiAgentsState(roleId, { optedIn: true, accessLevel: 'no_access' })
    } else if (!optedIn) {
      updateAiAgentsState(roleId, { optedIn: true })
    }
  }, [directAccess, accessLevel, optedIn, roleId, updateAiAgentsState])

  const handleOptIn = (e) => {
    updateAiAgentsState(roleId, {
      optedIn: e.target.checked,
      // Default to No Access on first opt-in.
      ...(e.target.checked && !accessLevel ? { accessLevel: 'no_access' } : {}),
    })
    if (e.target.checked) {
      setTimeout(() => {
        radioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
    }
  }

  return (
    <Section>
      {!directAccess && !saved && (
        <CheckboxRow>
          <CheckboxInput
            checked={optedIn}
            onChange={handleOptIn}
          />
          {highlightText('Opt in for AI agents', query)}
        </CheckboxRow>
      )}

      {!directAccess && !saved && (
        <StyledAlert type="info" role="note">
          <Alert.Title>{highlightText('Opting in to AI agents moves settings to this page', query)}</Alert.Title>
          <Alert.Paragraph>
            {highlightText('AI agent settings will only be available here in the roles and permissions pages.', query)}
          </Alert.Paragraph>
        </StyledAlert>
      )}

      {showRadios && (
        <RadioGroup ref={radioRef} style={directAccess ? { marginTop: 0 } : undefined}>
          {options.map(option => (
            <RadioLabel key={option.value}>
              <RadioInput
                name={`ai-agents-access-${roleId}`}
                value={option.value}
                checked={accessLevel === option.value}
                onChange={() => updateAiAgentsState(roleId, {
                  optedIn: true,
                  accessLevel: option.value,
                })}
              />
              <RadioTextWrap>
                <RadioTitle>{highlightText(option.label, query)}</RadioTitle>
                <RadioHint>{highlightText(option.description, query)}</RadioHint>
              </RadioTextWrap>
            </RadioLabel>
          ))}
        </RadioGroup>
      )}
    </Section>
  )
}
