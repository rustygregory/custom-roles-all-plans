import { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { Field, Fieldset, Radio } from '@zendeskgarden/react-forms'
import { Modal } from '@zendeskgarden/react-modals'
import { ROLE_PACKAGE_OPTIONS, ROLE_PACKAGE_PREVIEW } from '../data/rolePackages'
import { BAR_HEIGHT } from '../prototype-bar/PrototypeBar'
import FloraValidationMessage from './FloraValidationMessage'

/* Flora Modal (Garden) — default size. Backdrop top offset matches
   PermissionsFilterDrawer so the prototype bar stays above the scrim. */

/* Role type help — Flora medium/default 14/20, fg/subtle. */
const RolePackageHint = styled.p`
  margin: 0 0 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #646864;
`

const RolePackageOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

/* Package preview bullets under each radio hint — Flora medium/default, fg/subtle. */
const PreviewList = styled.ul`
  margin: 6px 0 0;
  padding: 0 0 0 1.1em;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #646864;
`

const PreviewItem = styled.li`
  margin: 0 0 2px;

  &:last-child {
    margin-bottom: 0;
  }
`

export default function CreateRoleTypeModal({ onClose, onContinue }) {
  const [selected, setSelected] = useState('')
  const [showError, setShowError] = useState(false)

  const handleSelect = (value) => {
    setSelected(value)
    setShowError(false)
  }

  const handleContinue = () => {
    if (!selected) {
      setShowError(true)
      return
    }
    onContinue(selected)
  }

  return (
    <Modal
      onClose={onClose}
      backdropProps={{ style: { top: BAR_HEIGHT } }}
    >
      <Modal.Header tag="h2">Choose a role type</Modal.Header>
      <Modal.Body>
        <Fieldset>
          <Fieldset.Legend>Role type* (required)</Fieldset.Legend>
          <RolePackageHint>
            Select a package for this role. You can change the role type and
            adjust permissions later.
          </RolePackageHint>
          <RolePackageOptions>
            {ROLE_PACKAGE_OPTIONS.map((option) => (
              <Field key={option.value}>
                <Radio
                  name="create-role-package"
                  value={option.value}
                  checked={selected === option.value}
                  onChange={() => handleSelect(option.value)}
                >
                  <Field.Label>{option.label}</Field.Label>
                  <Field.Hint>
                    {option.description}
                    <PreviewList>
                      {(ROLE_PACKAGE_PREVIEW[option.value] || []).map((line) => (
                        <PreviewItem key={line}>{line}</PreviewItem>
                      ))}
                    </PreviewList>
                  </Field.Hint>
                </Radio>
              </Field>
            ))}
          </RolePackageOptions>
          {showError && (
            <FloraValidationMessage>Select a role type</FloraValidationMessage>
          )}
        </Fieldset>
      </Modal.Body>
      <Modal.Footer>
        <Modal.FooterItem>
          <Button isBasic onClick={onClose}>
            Cancel
          </Button>
        </Modal.FooterItem>
        <Modal.FooterItem>
          <Button isPrimary onClick={handleContinue}>
            Continue
          </Button>
        </Modal.FooterItem>
      </Modal.Footer>
      <Modal.Close aria-label="Close modal" />
    </Modal>
  )
}
