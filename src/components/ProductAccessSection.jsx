import { useRef } from 'react'
import styled from 'styled-components'
import { Alert } from '@zendeskgarden/react-notifications'
import { useAppContext } from '../context/AppContext'

/* V2 (Scaled access change): the AI agents opt-in pattern applied to the other
   products — opt-in checkbox, info alert, then the access-level radios. Radio
   copy mirrors the AI agents text with the product name swapped in. */
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

const optionsFor = (name) => [
  {
    value: 'no_access',
    label: 'No access',
    description: `Users with this custom role can’t view or access ${name}. Selecting this option doesn’t hide ${name} from the product icons menu, but users can’t access the ${name} dashboard.`,
  },
  {
    value: 'client_admin',
    label: 'Client admin',
    description: `Users can manage all ${name} capabilities, including creating, editing, publishing, and deleting, configuring settings, and managing API integrations.`,
  },
  {
    value: 'client_editor',
    label: 'Client editor',
    description: `Users can create and edit ${name}, but can’t publish or delete, configure settings, or manage API integrations.`,
  },
  {
    value: 'client_user',
    label: 'Client user',
    description: `Users can manage ${name} with restrictions on sensitive capabilities, such as no access to API integrations.`,
  },
]

export default function ProductAccessSection({ roleId, product }) {
  const radioRef = useRef(null)
  const { getProductAccess, updateProductAccess } = useAppContext()
  const { optedIn, saved, accessLevel } = getProductAccess(roleId, product.id)
  const options = optionsFor(product.name)

  const handleOptIn = (e) => {
    updateProductAccess(roleId, product.id, {
      optedIn: e.target.checked,
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
      {!saved && (
        <CheckboxRow>
          <CheckboxInput
            checked={optedIn}
            onChange={handleOptIn}
          />
          Opt in for {product.name}
        </CheckboxRow>
      )}

      {!saved && (
        <StyledAlert type="info" role="note">
          <Alert.Title>Opting in to {product.name} moves settings to this page</Alert.Title>
          <Alert.Paragraph>
            {product.name} settings will only be available here in the roles and permissions pages.
          </Alert.Paragraph>
        </StyledAlert>
      )}

      {(optedIn || saved) && (
        <RadioGroup ref={radioRef}>
          {options.map(option => (
            <RadioLabel key={option.value}>
              <RadioInput
                name={`${product.id}-access-${roleId}`}
                value={option.value}
                checked={accessLevel === option.value}
                onChange={() => updateProductAccess(roleId, product.id, { accessLevel: option.value })}
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
