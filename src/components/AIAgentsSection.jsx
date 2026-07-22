import { useRef } from 'react'
import styled from 'styled-components'
import { Alert } from '@zendeskgarden/react-notifications'
import { useAppContext } from '../context/AppContext'

const Section = styled.div`
  margin-top: 32px;
  padding-top: 24px;
  padding-bottom: 40px;
`

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #2f3941;
  margin: 0 0 8px;
`

const SectionDescription = styled.p`
  font-size: 13px;
  color: #68737d;
  margin: 0 0 16px;
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

export default function AIAgentsSection() {
  const radioRef = useRef(null)
  const {
    aiAgentsOptedIn,
    setAiAgentsOptedIn,
    aiAgentsSaved,
    aiAgentsAccessLevel,
    setAiAgentsAccessLevel,
  } = useAppContext()

  const handleOptIn = (e) => {
    setAiAgentsOptedIn(e.target.checked)
    if (e.target.checked) {
      if (!aiAgentsAccessLevel) {
        setAiAgentsAccessLevel('no_access')
      }
      setTimeout(() => {
        radioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 50)
    }
  }

  const options = [
    {
      value: 'no_access',
      label: 'No Access',
      description: 'Users with this custom role cannot view or access AI agents',
    },
    {
      value: 'full_access',
      label: 'Full Access',
      description: 'Users can manage all AI agent capabilities (create, edit, publish, delete agents; configure settings; manage API integrations)',
    },
    {
      value: 'limited_access',
      label: 'Limited Access',
      description: 'Users can manage AI agents but with restrictions on specific sensitive capabilities (e.g., cannot access API integrations)',
    },
  ]

  return (
    <Section>
      <SectionTitle>AI Agents</SectionTitle>
      <SectionDescription>Product description help text</SectionDescription>

      {!aiAgentsSaved && (
        <CheckboxRow>
          <CheckboxInput
            checked={aiAgentsOptedIn}
            onChange={handleOptIn}
          />
          Opt in for AI agents
        </CheckboxRow>
      )}

      {!aiAgentsSaved && (
        <StyledAlert type="info" role="note">
          <Alert.Title>Opting in to AI agents moves settings to this page</Alert.Title>
          <Alert.Paragraph>
            AI agent settings will only be available here in the roles and permissions pages.
          </Alert.Paragraph>
        </StyledAlert>
      )}

      {(aiAgentsOptedIn || aiAgentsSaved) && (
        <RadioGroup ref={radioRef}>
          {options.map(option => (
            <RadioLabel key={option.value}>
              <RadioInput
                name="ai-agents-access"
                value={option.value}
                checked={aiAgentsAccessLevel === option.value}
                onChange={() => setAiAgentsAccessLevel(option.value)}
              />
              <RadioTextWrap>
                <RadioTitle>{option.label}</RadioTitle>
                <RadioHint>{option.description}</RadioHint>
              </RadioTextWrap>
            </RadioLabel>
          ))}
        </RadioGroup>
      )}
    </Section>
  )
}
