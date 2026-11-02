import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Field, FauxInput } from '@zendeskgarden/react-forms'
import { Tag } from '@zendeskgarden/react-tags'
import FloraValidationMessage from './FloraValidationMessage'

/* Counselor-only Reporting and analytics content — mirrors Admin Center.
   Brands / Groups start empty with Flora Field.Message errors; selecting at
   least one of each clears the inline errors (and the page alert via callback). */

const BRAND_OPTIONS = ['Dinoco', 'Rusteze', 'Pistons Cup']
const GROUP_OPTIONS = ['Support', 'Billing', 'Engineering', 'Success']

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Intro = styled.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: #646864;
  line-height: 1.45;
`

const IntroLink = styled.a`
  color: #1f73b7;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`

const BlockTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`

const BlockHint = styled.p`
  margin: 0 0 16px;
  font-size: 13px;
  color: #646864;
  line-height: 1.45;
`

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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

const RadioText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`

/* Radio label — Flora fg/default. */
const RadioTitleRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  color: #2f3130;
`

/* Radio sub content — Flora fg/subtle. */
const RadioHint = styled.span`
  font-size: 13px;
  line-height: 1.4;
  color: #646864;

  && {
    color: #646864;
  }
`

const Nested = styled.div`
  margin: 12px 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const NestedLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`

const NestedHint = styled.div`
  font-size: 13px;
  color: #646864;
  margin-top: -8px;
`

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="7" stroke="#646864" strokeWidth="1.25" />
    <path d="M8 7v4M8 5.25v.5" stroke="#646864" strokeWidth="1.25" strokeLinecap="round" />
  </svg>
)

const Chevron = ({ $open }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    style={{ transform: $open ? 'rotate(180deg)' : 'none' }}
  >
    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ErrorField = styled(Field)`
  max-width: 400px;
`

const ComboboxShell = styled(FauxInput)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 40px;
  cursor: pointer;
`

const TagsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  flex: 1;
  min-width: 0;
`

const Menu = styled.ul`
  position: absolute;
  z-index: 5;
  top: calc(100% - 4px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 4px 0;
  list-style: none;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(47, 57, 65, 0.12);
  max-height: 200px;
  overflow-y: auto;
`

/* Flora multiselect listbox: plain options; selected rows get a trailing check. */
const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  font-size: 14px;
  color: #2f3941;
  cursor: pointer;
  background: ${p => (p.$selected ? '#edf0f2' : 'transparent')};

  &:hover {
    background: #edf0f2;
  }
`

const OptionLabel = styled.span`
  flex: 1;
  min-width: 0;
`

const SelectedCheck = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M2 6.2L4.8 9L10 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function MultiSelectField({
  label,
  options,
  value,
  onChange,
  errorMessage,
  showError,
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onDoc = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  const toggle = (option) => {
    onChange(
      value.includes(option)
        ? value.filter((v) => v !== option)
        : [...value, option],
    )
  }

  const remove = (option) => {
    onChange(value.filter((v) => v !== option))
  }

  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      <ErrorField style={{ marginTop: 12 }}>
        <Field.Label>{label}</Field.Label>
        <ComboboxShell
          validation={showError ? 'error' : undefined}
          onClick={() => setOpen((o) => !o)}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setOpen((o) => !o)
            }
          }}
        >
          <TagsWrap>
            {value.map((item) => (
              <Tag key={item} isPill={false}>
                <span>{item}</span>
                <Tag.Close
                  aria-label={`Remove ${item}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    remove(item)
                  }}
                />
              </Tag>
            ))}
          </TagsWrap>
          <Chevron $open={open} />
        </ComboboxShell>
        {showError && (
          <FloraValidationMessage>{errorMessage}</FloraValidationMessage>
        )}
        {open && (
          <Menu role="listbox" aria-label={label} aria-multiselectable="true">
            {options.map((option) => {
              const selected = value.includes(option)
              return (
                <MenuItem
                  key={option}
                  role="option"
                  aria-selected={selected}
                  $selected={selected}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggle(option)
                  }}
                >
                  <OptionLabel>{option}</OptionLabel>
                  {selected && <SelectedCheck />}
                </MenuItem>
              )
            })}
          </Menu>
        )}
      </ErrorField>
    </div>
  )
}

export const REPORTING_ERRORS_SEARCH_TEXT = [
  'Reporting and analytics',
  'Analytics',
  'View dashboards',
  'Data access',
  'Brands',
  'Groups',
  'Select at least 1 brand',
  'Select at least 1 group',
  'Manage reports and dashboards',
].join(' ')

export default function ReportingAnalyticsErrors({ onSaveErrorsChange }) {
  const [analytics, setAnalytics] = useState('view')
  const [dataAccess, setDataAccess] = useState('selected')
  const [brands, setBrands] = useState([])
  const [groups, setGroups] = useState([])

  const needsSelection = analytics === 'view' && dataAccess === 'selected'
  const brandError = needsSelection && brands.length === 0
  const groupError = needsSelection && groups.length === 0

  useEffect(() => {
    const errors = []
    if (brandError) errors.push('Brands')
    if (groupError) errors.push('Groups')
    onSaveErrorsChange?.(errors)
  }, [brandError, groupError, onSaveErrorsChange])

  return (
    <Section>
      <Intro>
        Choose the analytics permissions for this role.{' '}
        <IntroLink href="#">Learn about analytics permissions</IntroLink>
      </Intro>

      <BlockTitle>Analytics</BlockTitle>
      <BlockHint>
        Defines what they can do in Analytics. For datasets and permissions go to{' '}
        <IntroLink href="#">Analytics settings</IntroLink>
      </BlockHint>

      <RadioGroup>
        <RadioLabel>
          <RadioInput
            name="counselor-analytics"
            checked={analytics === 'none'}
            onChange={() => setAnalytics('none')}
          />
          <RadioText>
            <RadioTitleRow>No access</RadioTitleRow>
          </RadioText>
        </RadioLabel>

        <RadioLabel as="div">
          <RadioInput
            name="counselor-analytics"
            checked={analytics === 'view'}
            onChange={() => setAnalytics('view')}
          />
          <RadioText>
            <RadioTitleRow>View dashboards</RadioTitleRow>
            <RadioHint>Can view dashboards shared with them.</RadioHint>

            {analytics === 'view' && (
              <Nested>
                <NestedLabel>Data access</NestedLabel>
                <NestedHint>Define what data this role can access.</NestedHint>

                <RadioLabel>
                  <RadioInput
                    name="counselor-data-access"
                    checked={dataAccess === 'belong'}
                    onChange={() => setDataAccess('belong')}
                  />
                  <RadioText>
                    <RadioTitleRow>
                      Data from brands and groups they belong to
                      <InfoIcon />
                    </RadioTitleRow>
                  </RadioText>
                </RadioLabel>

                <RadioLabel as="div">
                  <RadioInput
                    name="counselor-data-access"
                    checked={dataAccess === 'selected'}
                    onChange={() => setDataAccess('selected')}
                  />
                  <RadioText>
                    <RadioTitleRow>
                      Data from selected brands and groups
                      <InfoIcon />
                    </RadioTitleRow>

                    {dataAccess === 'selected' && (
                      <>
                        <MultiSelectField
                          label="Brands"
                          options={BRAND_OPTIONS}
                          value={brands}
                          onChange={setBrands}
                          showError={brandError}
                          errorMessage="Select at least 1 brand"
                        />
                        <MultiSelectField
                          label="Groups"
                          options={GROUP_OPTIONS}
                          value={groups}
                          onChange={setGroups}
                          showError={groupError}
                          errorMessage="Select at least 1 group"
                        />
                      </>
                    )}
                  </RadioText>
                </RadioLabel>

                <RadioLabel>
                  <RadioInput
                    name="counselor-data-access"
                    checked={dataAccess === 'all'}
                    onChange={() => setDataAccess('all')}
                  />
                  <RadioText>
                    <RadioTitleRow>All data</RadioTitleRow>
                  </RadioText>
                </RadioLabel>
              </Nested>
            )}
          </RadioText>
        </RadioLabel>

        <RadioLabel>
          <RadioInput
            name="counselor-analytics"
            checked={analytics === 'manage'}
            onChange={() => setAnalytics('manage')}
          />
          <RadioText>
            <RadioTitleRow>Manage reports and dashboards</RadioTitleRow>
            <RadioHint>Can create, edit, and delete reports and dashboards.</RadioHint>
          </RadioText>
        </RadioLabel>

        <RadioLabel>
          <RadioInput
            name="counselor-analytics"
            checked={analytics === 'admin'}
            onChange={() => setAnalytics('admin')}
          />
          <RadioText>
            <RadioTitleRow>Manage reports, dashboards and dataset permissions</RadioTitleRow>
            <RadioHint>Can manage administrative settings and permissions for Explore.</RadioHint>
          </RadioText>
        </RadioLabel>
      </RadioGroup>
    </Section>
  )
}
