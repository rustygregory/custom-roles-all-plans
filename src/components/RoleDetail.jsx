import { Fragment, useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Anchor } from '@zendeskgarden/react-buttons'
import { Alert, Notification } from '@zendeskgarden/react-notifications'
import { Field, Fieldset, Input, MediaInput, Radio, Textarea } from '@zendeskgarden/react-forms'
import { Tag } from '@zendeskgarden/react-tags'
import Breadcrumbs from './Breadcrumbs'
import AIAgentsSection, { AI_AGENTS_SEARCH_TEXT } from './AIAgentsSection'
import ProductAccessSection, { productAccessSearchText } from './ProductAccessSection'
import QaDensePermissions, { qaPermissionsSearchText } from './QaDensePermissions'
import QaDomainMapPermissions, { qaDomainMapSearchText } from './QaDomainMapPermissions'
import QaLayerCakePermissions, { qaLayerCakeSearchText } from './QaLayerCakePermissions'
import QaLayerCakePermissionsV65, {
  qaLayerCakeV65SearchText,
} from './QaLayerCakePermissionsV65'
import QaSectionedPermissionsV7, {
  qaSectionedV7SearchText,
} from './QaSectionedPermissionsV7'
import ReportingAnalyticsErrors, { REPORTING_ERRORS_SEARCH_TEXT } from './ReportingAnalyticsErrors'
import WorkforceManagementSection, {
  WFM_ASSIGNMENT_SEARCH_TEXT,
} from './WorkforceManagementSection'
import SettingsCapsule from './SettingsCapsule'
import AssignRoleModal from './AssignRoleModal'
import CreateRoleTypeModal from './CreateRoleTypeModal'
import PermissionsFilterDrawer from './PermissionsFilterDrawer'
import PermissionBlock, { PermissionFilterProvider } from './PermissionBlock'
import { useAppContext } from '../context/AppContext'
import {
  ROLE_PACKAGE_OPTIONS,
  permissionsForPackage,
  productsForPackage,
  isRolePackagePermissionsMatch,
  isRolePackageProductsMatch,
} from '../data/rolePackages'
import {
  teamMembers,
  AI_ACCESS_LABELS,
  PRODUCT_CAPSULES,
  PRODUCT_CAPSULES_V3,
  RADIO_PRODUCTS,
  RADIO_PRODUCTS_V3,
  memberProductAccess,
} from '../data/mockData'
import {
  DEFAULT_PERMISSION_FILTERS,
  FILTER_GROUPS,
  FILTER_TOPICS,
  capsuleVisibleV3,
  countAppliedFilters,
  tagSearchText,
  blockVisibleV35,
} from '../data/permissionFilters'
import { getAccessChangePreview } from '../utils/accessChanges'

const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
`

const ScrollArea = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`

const Container = styled.div`
  padding: 24px 32px;
  flex: 1;
`

const SidePanel = styled.aside`
  width: 380px;
  min-width: 380px;
  padding: 24px;
  box-sizing: border-box;
  border-left: 1px solid #e9ebed;
  position: sticky;
  top: 0;
  align-self: flex-start;
  height: 100%;
  overflow-y: auto;
`

/* Flora fg/default */
const SidePanelTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #2f3130;
  margin: 0 0 24px;
`

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
`

const EmptyStateTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2f3130;
  margin-bottom: 8px;
`

/* Flora fg/subtle — supporting empty-state copy */
const EmptyStateText = styled.div`
  font-size: 14px;
  color: #646864;
  line-height: 1.5;
  margin-bottom: 16px;
`

const SidePanelHint = styled.p`
  font-size: 14px;
  color: #646864;
  line-height: 1.5;
  margin: 0 0 24px;
`

const MemberTable = styled.div`
  border-top: 1px solid #e9ebed;
`

const MemberTableHead = styled.div`
  padding: 12px 0;
  font-size: 13px;
  font-weight: 600;
  color: #2f3130;
  border-bottom: 1px solid #e9ebed;
`

const MemberRow = styled.div`
  padding: 14px 0;
  border-bottom: 1px solid #e9ebed;
`

const MemberLink = styled.span`
  font-size: 14px;
  color: #1f73b7;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

/* Flora Alert (warning): 16px radius, warningHue.200 surface,
   title/body fg/warningEmphasis, icon fg/warning. */
const AccessWarning = styled(Alert).attrs({
  'data-inspect-name': 'Alert',
  'data-inspect-token-bg': 'bg/warning',
  'data-inspect-token-color': 'fg/warningEmphasis',
})`
  position: relative;
  margin-top: 8px;
  padding: 16px 16px 16px 40px;
  border: none;
  border-radius: 16px;
  font-size: 14px;
  line-height: 20px;
  background-color: #f6eba6;
  color: #3b3405;

  /* Garden ships stroke; Flora Alert uses filled Central Exclamation triangle. */
  [data-garden-id="notifications.icon"] {
    display: none;
  }

  [data-garden-id="notifications.title"] {
    margin: 0;
    color: #3b3405;
  }

  [data-garden-id="notifications.paragraph"] {
    margin: 0;
    color: #3b3405;
  }
`

/* V2.5: one summary warning below the Team members explanation (not per name). */
const SummaryAccessWarning = styled(AccessWarning)`
  margin: 0 0 16px;
`

const SummaryWarningList = styled.ul`
  margin: 2px 0 0;
  padding-left: 1.25em;
  font-size: 14px;
  line-height: 20px;
  color: #3b3405;

  li {
    margin: 0;
  }
`

const PreviewAccessAnchor = styled(Anchor)`
  display: inline-block;
  margin-top: 2px;
  font-size: 14px;
  line-height: 20px;
  /* Override alert ink so this stays Flora primary blue (blue.600 / .700). */
  color: #698cd3 !important;

  &:hover {
    color: #406cc4 !important;
  }
`

const DisabledProductNote = styled.div`
  font-size: 14px;
  color: #87929d;
`

/* One warning per member — each changed product is a name line followed by a
   bulleted "current to new" line. In V1 only the AI agents line ever appears;
   V2 adds one line per changed product. */
const WarningChangeList = styled.div`
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 20px;
  color: #3b3405;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

/* Flora Icons Exclamation triangle (fill) — 16px slot, fg/warning (yellow.700). */
const FilledWarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    focusable="false"
    style={{ position: 'absolute', left: 12, top: 16, color: '#7f7004' }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M7.84403 3.73819C8.8072 2.08705 11.1923 2.08717 12.1556 3.73819L17.9905 13.745C18.9606 15.4089 17.7619 17.4995 15.8352 17.4999H4.16532C2.2385 17.4997 1.039 15.409 2.00907 13.745L7.84403 3.73819ZM10.0003 7.51651C10.4604 7.51666 10.8333 7.88938 10.8333 8.34952V10.8446C10.8331 11.3046 10.4603 11.6775 10.0003 11.6776C9.54014 11.6776 9.16645 11.3047 9.1663 10.8446V8.34952C9.1663 7.88928 9.54005 7.51651 10.0003 7.51651ZM10.0003 12.2919C10.5754 12.2921 11.0412 12.7578 11.0413 13.3329C11.0413 13.9081 10.5755 14.3748 10.0003 14.3749C9.42496 14.3749 8.95829 13.9082 8.95829 13.3329C8.95843 12.7577 9.42505 12.2919 10.0003 12.2919Z"
    />
  </svg>
)

const AiAgentsWrap = styled.div``

/* Container is a stretched flex item, so its bottom padding doesn't extend the
   scroll area — this block spacer does. 28px + the capsule's own 12px margin
   gives the 40px gap below the last capsule. */
const BottomSpacer = styled.div`
  height: 28px;
  flex-shrink: 0;
`

const BottomBar = styled.div`
  height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 0 32px;
  border-top: 1px solid #e9ebed;
  background: #fff;
`

const ToastWrapper = styled.div`
  position: fixed;
  top: 72px;
  right: 40px;
  z-index: 1000;

  [data-garden-id="notifications.notification"] {
    min-width: 410px;
  }
`

const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`

const ActionsWrap = styled.div`
  position: relative;
  flex-shrink: 0;
  /* Container already pads 24px top / 32px right — add the remainder for 40px total */
  margin-top: 16px;
  margin-right: 8px;
`

/* Flora Outline Button: label button/fg/default, border button/border/default,
   icon button/fg/subtle (grey.900 / grey.500 / grey.700). */
const ActionsButton = styled(Button)`
  && {
    color: #2f3130;
    border-color: #999b97;
  }

  &&:hover {
    color: #2f3130;
    border-color: #8b8e89;
  }

  /* Chevron at 20px to match Flora media button icon sizing. */
  &&& svg {
    width: 20px !important;
    height: 20px !important;
    min-width: 20px !important;
    color: #646864;
  }
`

/* Garden/Flora Icons chevron-down stroke — scaled to 20×20 in the button. */
const ChevronDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 12 12"
    focusable="false"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.646 3.646a.5.5 0 01.638-.057l.07.057L6 7.293l3.646-3.647a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-4 4a.5.5 0 01-.638.057l-.07-.057-4-4a.5.5 0 010-.708z"
    />
  </svg>
)

const ActionsMenu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 200px;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  padding: 8px 0;
  z-index: 20;
`

const ActionsMenuItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 20px;
  border: none;
  background: none;
  font-size: 15px;
  color: ${p => p.$danger ? '#cc3340' : '#2f3130'};
  cursor: pointer;

  &:hover {
    background: #f8f9f9;
  }
`

/* Flora Typography Large / Default — 26/32, fg/default (neutralHue.900). */
const Title = styled.h1`
  font-size: 26px;
  line-height: 32px;
  font-weight: 400;
  color: #2f3130;
  margin: 0 0 4px;
`

/* Flora Typography Medium / Default — 14/20, fg/default (neutralHue.900). */
const Subtitle = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2f3130;
  margin: 0 0 32px;
`

/* 32px between form sections (identity → role type → search). */
const FormSection = styled.div`
  margin-bottom: 32px;
`

/* Matches the capsules so Open all sits on their right edge. */
const OpenAllRow = styled.div`
  display: flex;
  justify-content: ${p => p.$endOnly ? 'flex-end' : 'space-between'};
  align-items: flex-end;
  gap: 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: ${p => p.$maxWidth || 726}px;
  margin-bottom: 12px;
`

/* Search + Filter + optional tags; always 32px below to Settings. */
const PermissionsFilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: ${p => p.$maxWidth || 726}px;
  width: 100%;
  margin-bottom: 32px;
`

/* Flora Filters: Search + Filter entry point in one row, 12px between. */
const SearchFilterRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  width: 100%;
`

/* Garden's search pattern: a MediaInput with the magnifier at the start. */
const SearchFieldWrap = styled.div`
  flex: 1;
  min-width: 0;
  max-width: ${p => p.$maxWidth || 400}px;
  color: #646864;
`

/* Flora Filters Media Button: outline Default + Slider start icon.
   Label button/fg/default, border button/border/default, icon button/fg/subtle. */
const FilterButton = styled(Button)`
  flex-shrink: 0;

  && {
    color: #2f3130;
    border-color: #999b97;
  }

  &&:hover {
    color: #2f3130;
    border-color: #8b8e89;
  }

  && svg {
    color: #646864;
  }
`

/* Flora Icons Slider stroke — 20×20 (@zendesk-ui/assets/icons/20px/slider-stroke.svg).
   Spreads StartIcon props so Garden can size the SVG (not a 16px Garden icon stretched). */
const FilterSliderIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-hidden="true"
    focusable="false"
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.83301 2.5C6.29314 2.5 6.66682 2.87292 6.66699 3.33301V4.27148C8.10484 4.64145 9.16699 5.94638 9.16699 7.5C9.16699 9.05362 8.10484 10.3586 6.66699 10.7285V16.667C6.66682 17.1271 6.29314 17.5 5.83301 17.5C5.37303 17.4998 5.00018 17.127 5 16.667V10.7285C3.56202 10.3586 2.5 9.05371 2.5 7.5C2.5 5.94629 3.56202 4.64135 5 4.27148V3.33301C5.00018 2.87303 5.37303 2.50018 5.83301 2.5ZM5.83301 5.83301C4.91214 5.83318 4.16699 6.5791 4.16699 7.5C4.16699 8.4209 4.91214 9.16682 5.83301 9.16699C6.75402 9.16699 7.5 8.42101 7.5 7.5C7.5 6.57899 6.75402 5.83301 5.83301 5.83301Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.167 2.5C14.627 2.50018 14.9998 2.87303 15 3.33301V10.9385C16.438 11.3084 17.5 12.6133 17.5 14.167C17.4998 16.0082 16.0082 17.4998 14.167 17.5C12.3256 17.5 10.8332 16.0083 10.833 14.167C10.833 12.6134 11.8952 11.3085 13.333 10.9385V3.33301C13.3332 2.87292 13.7069 2.5 14.167 2.5ZM14.167 12.5C13.246 12.5 12.5 13.246 12.5 14.167C12.5002 15.0879 13.2461 15.833 14.167 15.833C15.0877 15.8328 15.8328 15.0877 15.833 14.167C15.833 13.2461 15.0879 12.5002 14.167 12.5Z"
      fill="currentColor"
    />
  </svg>
)

const FilterTagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* Flora Filters: 8px between tags; 12px above via PermissionsFilterBlock gap. */
  gap: 8px;
  width: 100%;
`

/* Flora Filters: Basic Button (fg/default) — not link/primary. */
const ClearFiltersButton = styled(Button).attrs({
  isBasic: true,
  size: 'small',
})`
  flex-shrink: 0;
  /* Sit on the medium Tag row without the full small-button chrome. */
  height: 20px;
  min-height: 20px;
  padding: 0 4px;
  line-height: 20px;
`

/* Flora Typography Large / Default — 18/24, fg/default (neutralHue.900).
   8px below to first capsule (Settings and Products share this). */
const GroupHeading = styled.h2`
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: #2f3130;
  margin: ${p => p.$flush ? '0' : '28px 0 8px'};
  max-width: ${p => p.$maxWidth || 400}px;

  &:first-of-type {
    margin-top: ${p => p.$flush ? '0' : undefined};
  }
`

/* Settings title + Open all: same 8px to Tickets as Products title → first capsule.
   Full capsule width so Open all lands on the capsules’ right edge. */
const SectionTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: ${p => p.$maxWidth || 726}px;
  margin: 0 0 8px;

  > :first-child {
    flex: 1;
    min-width: 0;
    max-width: none;
  }
`

/* Flora Basic Button — tertiary/deemphasized in-page action (button/fg/default).
   Default end padding is kept; negative margin lets hover chrome hang past the
   capsule’s right edge instead of clipping the hit area. */
const OpenAllButton = styled(Button).attrs({
  isBasic: true,
})`
  flex-shrink: 0;
  margin-inline-end: -15px;
`

const SubSectionHeader = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #2f3130;
  /* Within-section title → controls; between-section spacing is Body gap 24px. */
  margin: 0 0 8px;
`

/* Flora Layout: spacing.block.md (20px) between stacked form fields. */
const FieldGroup = styled.div`
  max-width: ${p => p.$maxWidth || 400}px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`

/* Role package radios — Garden Fieldset + Radio with Field.Hint under each. */
const RolePackageFieldset = styled(Fieldset)`
  max-width: ${p => p.$maxWidth || 630}px;
`

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
  gap: 8px;
`

const RolePackageLabelRow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`

/* Same Flora Customized tag as QA capsule (tag/bg/orange + tag/fg/orange). */
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

/* Flora error Alert — matches Flora Core Alert (error): soft danger surface,
   16px radius, filled red icon with white bang, dismiss control. Built to
   match the Flora specimen rather than Garden’s stroke icon. */
const SaveErrorAlert = styled.div.attrs({ role: 'alert' })`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  max-width: 726px;
  margin: 0 0 24px;
  padding: 16px;
  border-radius: 16px;
  border: none;
  background: #f7e5e6;
  color: #5f1c20;
`

const SaveErrorIcon = styled.span`
  display: flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  margin-top: 2px;
  /* Flora Alert type icon: filled danger/700, white bang. */
  color: #c63f46;
`

const SaveErrorBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`

const SaveErrorTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25;
  color: #5f1c20;
`

const SaveErrorText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #5f1c20;

  ul {
    margin: 8px 0 0;
    padding-left: 1.25em;
  }

  li {
    margin: 2px 0;
  }
`

/* Central / Flora alert-error-fill — white plate so evenodd bang reads white. */
const FloraErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="7.5" cy="8.5" r="7.5" fill="#fff" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.5 1C3.36 1 0 4.36 0 8.5 0 12.64 3.36 16 7.5 16S15 12.64 15 8.5C15 4.36 11.64 1 7.5 1zM7 4.5c0-.28.22-.5.5-.5s.5.22.5.5V9c0 .28-.22.5-.5.5S7 9.28 7 9V4.5zm.5 8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
    />
  </svg>
)

/* Flora fg/default — field / control labels (main content, not hint). */
const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #2f3130;
  margin-bottom: 4px;
`

/* Flora fg/subtle — helper / hint copy */
const HintText = styled.span`
  font-size: 12px;
  color: #646864;
  font-weight: 400;
`

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: #2f3130;
  cursor: pointer;
`

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  width: 16px;
  height: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 1px;
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
  font-size: 14px;
  color: #2f3130;
  cursor: pointer;
`

const RadioInput = styled.input.attrs({ type: 'radio' })`
  width: 16px;
  height: 16px;
  accent-color: #1f73b7;
  cursor: pointer;
  margin-top: 1px;
`

const LinkText = styled.span`
  color: #1f73b7;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`

/* Order matches the roles page in the product. */
const CAPSULE_KEYS = [
  'tickets',
  'custom-objects',
  'people',
  'channels',
  'agent-workflow',
  'business-rules',
  'security',
  'knowledge',
  'reporting',
  'ai-agents',
]

/* V2: the settings capsules stay (minus AI agents, which moves), with one
   capsule per product appended in the Roles and access table's order. */
const V2_CAPSULE_KEYS = [...CAPSULE_KEYS.filter(k => k !== 'ai-agents'), ...PRODUCT_CAPSULES.map(p => p.id)]

/* V3+: settings without the standalone Knowledge capsule (merged into products),
   then product capsules without Chat. Knowledge product uses id `knowledge`. */
const V3_SETTINGS_KEYS = CAPSULE_KEYS.filter(k => k !== 'ai-agents' && k !== 'knowledge')
const V3_PRODUCT_KEYS = PRODUCT_CAPSULES_V3.map(p => p.id)
const V3_CAPSULE_KEYS = [...V3_SETTINGS_KEYS, ...V3_PRODUCT_KEYS]
/* V4: WFM section has one capsule; nested permission groups live inside it. */
const V4_CAPSULE_KEYS = ['wfm-role-assignment', ...V3_CAPSULE_KEYS]

/* Block tag lists per settings capsule — used by V3.5 to know if anything remains. */
const SETTINGS_BLOCK_TAGS = {
  tickets: [['tickets'], ['tickets'], ['tickets'], ['tickets'], ['tickets'], ['tickets']],
  'custom-objects': [['tickets']],
  people: [
    ['user-management'],
    ['user-management'],
    ['user-management'],
    ['user-management'],
    ['user-management'],
    ['user-management'],
    ['user-management'],
    ['user-management'],
  ],
  channels: [['channels', 'tickets'], ['channels', 'tickets']],
  'agent-workflow': [['workflow'], ['workflow'], ['workflow'], ['workflow'], ['workflow'], ['workflow']],
  'business-rules': [['automation'], ['automation'], ['automation'], ['automation'], ['automation']],
  security: [['gdpr', 'security'], ['gdpr', 'security'], ['gdpr', 'user-management']],
  reporting: [['reporting'], ['reporting'], ['reporting']],
}

function settingsCapsuleHasBlocks(capsuleId, filters, version) {
  if (version !== 'v3.5' || !filters.topics.length) return true
  const blocks = SETTINGS_BLOCK_TAGS[capsuleId]
  if (!blocks) return true
  return blocks.some((tags) => blockVisibleV35(tags, filters))
}

export default function RoleDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const {
    version,
    getAiAgentsState,
    updateAiAgentsState,
    roles,
    addRole,
    setAiAgentsRoleId,
    roleAssignments,
    assignMembersToRole,
    getProductAccess,
    updateProductAccess,
    saveProductAccess,
    copyProductAccess,
  } = useAppContext()
  const isPanelVersion = version === 'v3' || version === 'v3.5' || version === 'v4' || version === 'v5' || version === 'v6' || version === 'v6.5' || version === 'v7'
  /* V4–V7 share role type + WFM; QA presentation differs per version. */
  const isWfmConcept = version === 'v4' || version === 'v5' || version === 'v6' || version === 'v6.5' || version === 'v7'
  const isRolePackageVersion = version === 'v4' || version === 'v5' || version === 'v6' || version === 'v6.5' || version === 'v7'
  const isDenseQa = version === 'v4'
  const isDomainMapQa = version === 'v5'
  const isLayerCakeQa = version === 'v6'
  const isLayerCakeV65Qa = version === 'v6.5'
  const isSectionedV7Qa = version === 'v7'
  /* V2.5 keeps V2 opt-in capsules but replaces per-member warnings with a
     single summary + work-area preview table. */
  const isScaledSimplified = version === 'v2.5'
  /* Capsules match Ticket forms V4 / Flora Accordion well (726px).
     Name uses Flora short-field width; description / role package use 630. */
  const capsuleMaxWidth = 726
  const fieldMaxWidth = 400
  const descriptionMaxWidth = 630
  const productList = isPanelVersion ? PRODUCT_CAPSULES_V3 : PRODUCT_CAPSULES
  const radioProducts = isPanelVersion ? RADIO_PRODUCTS_V3 : RADIO_PRODUCTS
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('Role saved successfully')
  const [showAssignModal, setShowAssignModal] = useState(false)
  const [showActionsMenu, setShowActionsMenu] = useState(false)
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false)
  const [permissionFilters, setPermissionFilters] = useState(DEFAULT_PERMISSION_FILTERS)
  const actionsRef = useRef(null)

  const isCreate = id === 'create'
  const role = !isCreate ? roles.find(r => r.id === id) : null
  const roleName = role?.name || ''
  const isCounselor = id === 'counselor'
  /* Counselor save-blocking fields (Brands / Groups). Cleared as the user fixes
     the Reporting and analytics multiselects — hides the page error Alert. */
  const [counselorSaveErrors, setCounselorSaveErrors] = useState(['Brands', 'Groups'])

  // After a new role is created we stay on the page in "saved" mode for this role.
  const [savedRoleId, setSavedRoleId] = useState(null)
  const currentRoleId = isCreate ? savedRoleId : id

  // The draft role on the create page keeps its AI agents state under 'create'
  // until it has an id; every role starts opted out.
  const aiAgentsKey = currentRoleId || 'create'
  const aiAgentsState = getAiAgentsState(aiAgentsKey)

  /* Opt-in preview: while opted in but not yet saved, the side panel shows each
     member's current access and warns about the level the role would move them
     to. Turning opt-in off or saving both end the preview. */
  const accessPreviewActive = aiAgentsState.optedIn && !aiAgentsState.saved && Boolean(aiAgentsState.accessLevel)
  const newAccessLabel = AI_ACCESS_LABELS[aiAgentsState.accessLevel]
  const accessWillChange = (member) =>
    !(aiAgentsState.accessLevel === 'no_access' && member.aiAgentsAccess === 'No Access')

  /* Per-member access-change banners: V1 (AI agents only) and V2 (products +
     AI). V2.5 uses the summary warning instead. V3+ assumes products are already
     migrated, so the side panel stays quiet. */
  const warningsFor = (member) => {
    if (isPanelVersion || isScaledSimplified) return []

    const list = []
    if (version === 'v2') {
      for (const p of radioProducts) {
        const s = getProductAccess(aiAgentsKey, p.id)
        if (s.optedIn && !s.saved && s.accessLevel) {
          const current = memberProductAccess[member.id]?.[p.id]
          const next = AI_ACCESS_LABELS[s.accessLevel]
          if (current && current !== next) {
            list.push({ key: p.id, product: p.name, body: `${current} to ${next}` })
          }
        }
      }
    }
    if (accessPreviewActive && accessWillChange(member)) {
      list.push({ key: 'ai-agents', product: 'AI agents', body: `${member.aiAgentsAccess} to ${newAccessLabel}` })
    }
    return list
  }

  const [nameValue, setNameValue] = useState(role?.name || '')
  const [descValue, setDescValue] = useState(role?.description || '')
  /* Create-role package from the Choose a role type modal. Seeds settings +
     products; changing the radio re-applies the package preset. */
  const [rolePackage, setRolePackage] = useState(() => location.state?.rolePackage || '')
  const [permissions, setPermissions] = useState(() =>
    permissionsForPackage(location.state?.rolePackage || ''),
  )
  const [showRoleTypeModal, setShowRoleTypeModal] = useState(
    () => isRolePackageVersion && id === 'create' && !location.state?.rolePackage,
  )
  /* QA dense checklist divergence from the page role-type package’s QA level. */
  const [qaPackageDiverged, setQaPackageDiverged] = useState(false)

  const setPerm = (key, value) => {
    setPermissions((prev) => ({ ...prev, [key]: value }))
  }

  const applyRolePackage = (pkg) => {
    setRolePackage(pkg)
    setPermissions(permissionsForPackage(pkg))
    setQaPackageDiverged(false)
    const products = productsForPackage(pkg)
    for (const [pid, level] of Object.entries(products)) {
      if (pid === 'ai-agents') {
        updateAiAgentsState(aiAgentsKey, {
          optedIn: level !== 'no_access',
          saved: false,
          accessLevel: level,
        })
      } else {
        updateProductAccess(aiAgentsKey, pid, {
          optedIn: true,
          saved: false,
          accessLevel: level,
        })
      }
    }
  }

  const aiAgentsRef = useRef(null)
  const wfmRef = useRef(null)
  const scrollAreaRef = useRef(null)
  const saveErrorAlertRef = useRef(null)

  /* Permissions live in capsules now. In V1 AI agents starts open — it's the
     section that version exists to show. Otherwise every capsule starts closed
     so the product list reads as equals (including QA on combined V4).
     Counselor opens Reporting so Brands/Groups errors are visible on land.
     Reset per role and per version switch so neither carries a fully-expanded page. */
  const initialOpenCapsules = () => {
    if (id === 'counselor') return { reporting: true }
    if (version === 'v1') return { 'ai-agents': true }
    return {}
  }
  const [openCapsules, setOpenCapsules] = useState(initialOpenCapsules)

  /* Settings search: every capsule gets the query, opens itself on a hit, and
     highlights the matching words (handled inside SettingsCapsule). */
  const [settingsQuery, setSettingsQuery] = useState('')
  const q = settingsQuery.trim()

  useEffect(() => {
    setNameValue(role?.name || '')
    setDescValue(role?.description || '')
    if (isCreate) {
      const incoming = isRolePackageVersion ? (location.state?.rolePackage || '') : ''
      if (incoming) {
        applyRolePackage(incoming)
      } else {
        setRolePackage('')
        setPermissions(permissionsForPackage(''))
      }
      setShowRoleTypeModal(isRolePackageVersion && !incoming)
    } else {
      setShowRoleTypeModal(false)
    }
    setOpenCapsules(
      id === 'counselor' ? { reporting: true }
        : version === 'v1' ? { 'ai-agents': true }
          : {},
    )
    setCounselorSaveErrors(id === 'counselor' ? ['Brands', 'Groups'] : [])
    setSettingsQuery('')
    setPermissionFilters(isPanelVersion ? DEFAULT_PERMISSION_FILTERS : { availableOnly: false, groups: [], topics: [] })
    setFilterDrawerOpen(false)
    // applyRolePackage is stable enough for create seeding; omit from deps to
    // avoid re-seeding on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, role?.name, role?.description, version, isPanelVersion, isRolePackageVersion, isCreate, location.state?.rolePackage])

  // Auto-scroll to the AI Agents section when arriving from the "Roles" link.
  useEffect(() => {
    if (location.state?.scrollToAiAgents) {
      setTimeout(() => {
        aiAgentsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [location.state])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (actionsRef.current && !actionsRef.current.contains(e.target)) {
        setShowActionsMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const assignedMemberIds = currentRoleId ? (roleAssignments[currentRoleId] || []) : []
  const assignedMembers = assignedMemberIds
    .map(mid => teamMembers.find(m => m.id === mid))
    .filter(Boolean)

  /* V2.5 summary: unique products + affected member count for the side panel. */
  const scaledPreview = isScaledSimplified && !isCounselor
    ? getAccessChangePreview({
        members: assignedMembers,
        version,
        roleKey: aiAgentsKey,
        getProductAccess,
        getAiAgentsState,
        radioProducts,
      })
    : null
  const showScaledSummary = Boolean(scaledPreview && scaledPreview.affectedMemberCount > 0)

  const hasSaved = isCreate ? Boolean(savedRoleId) : true
  // Actions menu shows as soon as the role is saved (same time as the Team members panel).
  const showActions = hasSaved

  const handleSave = () => {
    /* Counselor blocks save while Brands/Groups (etc.) are still invalid —
       scroll to the page error Alert instead of toasting success. */
    if (isCounselor && counselorSaveErrors.length > 0) {
      scrollAreaRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
      saveErrorAlertRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    if (isCreate && nameValue.trim()) {
      const newId = nameValue.toLowerCase().replace(/\s+/g, '-')
      if (!roles.some(r => r.id === newId)) {
        addRole({
          id: newId,
          name: nameValue.trim(),
          type: 'Custom',
          description: descValue.trim(),
        })
      }
      if (aiAgentsState.optedIn) {
        // The draft's opt-in moves onto the saved role and becomes permanent.
        updateAiAgentsState(newId, { ...aiAgentsState, saved: true })
        setAiAgentsRoleId(newId)
      }
      copyProductAccess('create', newId)
      saveProductAccess(newId)
      // The draft is spent — the next Create role starts opted out.
      updateAiAgentsState('create', { optedIn: false, saved: false, accessLevel: null })
      setToastMessage('Role created')
      setShowToast(true)
      setTimeout(() => setShowToast(false), 4000)
      /* Land on the saved role URL so the Team members side panel matches
         edit mode in every version (V4+ create used to stay on /create). */
      navigate(`/roles/${newId}`, { replace: true })
      return
    }
    if (!isCreate && aiAgentsState.optedIn) {
      updateAiAgentsState(id, { saved: true })
      setAiAgentsRoleId(id)
    }
    if (!isCreate) {
      saveProductAccess(id)
    }
    setToastMessage('Role saved successfully')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  const handleAssign = (memberIds) => {
    if (currentRoleId) {
      assignMembersToRole(currentRoleId, memberIds)
    }
    setShowAssignModal(false)
    setToastMessage('Team member assigned')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  const capsuleKeys = version === 'v1'
    ? CAPSULE_KEYS
    : (version === 'v4' || version === 'v5' || version === 'v6' || version === 'v6.5' || version === 'v7')
      ? V4_CAPSULE_KEYS
      : isPanelVersion
        ? V3_CAPSULE_KEYS
        : V2_CAPSULE_KEYS
  const allCapsulesOpen = capsuleKeys.every(key => openCapsules[key])
  const toggleAllCapsules = () => {
    setOpenCapsules(
      allCapsulesOpen
        ? {}
        : Object.fromEntries(capsuleKeys.map(key => [key, true])),
    )
  }
  const toggleCapsule = (key) => {
    setOpenCapsules(prev => ({ ...prev, [key]: !prev[key] }))
  }
  const capsuleProps = (key) => ({
    open: Boolean(openCapsules[key]),
    onToggle: () => toggleCapsule(key),
    query: q,
    maxWidth: capsuleMaxWidth,
  })

  const showCapsule = (key) => {
    if (!isPanelVersion) return true
    if (!capsuleVisibleV3(key, permissionFilters)) return false
    if (version === 'v3.5' && SETTINGS_BLOCK_TAGS[key]) {
      return settingsCapsuleHasBlocks(key, permissionFilters, version)
    }
    return true
  }

  const removeFilterTag = (kind, id) => {
    setPermissionFilters((prev) => {
      if (kind === 'available') return { ...prev, availableOnly: false }
      if (kind === 'group') return { ...prev, groups: prev.groups.filter((g) => g !== id) }
      if (kind === 'topic') return { ...prev, topics: prev.topics.filter((t) => t !== id) }
      return prev
    })
  }

  const clearAllFilters = () => {
    setPermissionFilters({ availableOnly: false, groups: [], topics: [] })
  }

  const appliedFilterCount = countAppliedFilters(permissionFilters)
  const filterTags = []
  if (permissionFilters.availableOnly) {
    filterTags.push({
      key: 'available',
      kind: 'available',
      id: 'available',
      label: 'Only available settings',
    })
  }
  permissionFilters.groups.forEach((gid) => {
    const g = FILTER_GROUPS.find((x) => x.id === gid)
    if (g) {
      filterTags.push({
        key: `group-${gid}`,
        kind: 'group',
        id: gid,
        label: g.label,
      })
    }
  })
  permissionFilters.topics.forEach((tid) => {
    const t = FILTER_TOPICS.find((x) => x.id === tid)
    if (t) {
      filterTags.push({
        key: `topic-${tid}`,
        kind: 'topic',
        id: tid,
        label: t.label,
      })
    }
  })

  const withTags = (capsuleId, baseSearch = '') =>
    [baseSearch, isPanelVersion ? tagSearchText(capsuleId) : ''].filter(Boolean).join(' ')

  /* When a narrowing filter (group/topic) is applied, open every capsule it
     leaves visible — e.g. GDPR opens Security and privacy. */
  useEffect(() => {
    if (!isPanelVersion) return
    const narrowing =
      permissionFilters.groups.length > 0 || permissionFilters.topics.length > 0
    if (!narrowing) return

    const keys = (version === 'v4' || version === 'v5' || version === 'v6' || version === 'v6.5' || version === 'v7')
      ? V4_CAPSULE_KEYS
      : (version === 'v3.5' || version === 'v3')
        ? V3_CAPSULE_KEYS
        : V2_CAPSULE_KEYS
    const toOpen = keys.filter((key) => {
      if (!capsuleVisibleV3(key, permissionFilters)) return false
      if (version === 'v3.5' && SETTINGS_BLOCK_TAGS[key]) {
        return settingsCapsuleHasBlocks(key, permissionFilters, version)
      }
      return true
    })
    if (!toOpen.length) return

    setOpenCapsules((prev) => {
      const next = { ...prev }
      let changed = false
      for (const key of toOpen) {
        if (!next[key]) {
          next[key] = true
          changed = true
        }
      }
      return changed ? next : prev
    })
  }, [isPanelVersion, permissionFilters, version])

  return (
    <PageWrapper>
      {showToast && (
        <ToastWrapper>
          <Notification type="success">
            <Notification.Title>{toastMessage}</Notification.Title>
            <Notification.Close aria-label="Close" onClick={() => setShowToast(false)} />
          </Notification>
        </ToastWrapper>
      )}
      {isRolePackageVersion && isCreate && !hasSaved && showRoleTypeModal && (
        <CreateRoleTypeModal
          onClose={() => navigate('/roles')}
          onContinue={(nextPackage) => {
            applyRolePackage(nextPackage)
            setShowRoleTypeModal(false)
            navigate('/roles/create', { replace: true, state: { rolePackage: nextPackage } })
          }}
        />
      )}
      <ScrollArea ref={scrollAreaRef}>
        <Container>
          <Breadcrumbs items={[
            { label: 'People' },
            { label: 'Team' },
            { label: 'Roles', path: '/roles' },
            { label: hasSaved && isCreate ? 'Edit role' : (isCreate ? 'Create role' : roleName) },
          ]} />

      <HeaderRow>
        <div>
          <Title>
            {isCreate && !hasSaved ? 'Create role' : (nameValue.trim() || roleName || 'Role')}
          </Title>
          <Subtitle>Learn about role permissions and access</Subtitle>
        </div>
        {showActions && (
          <ActionsWrap ref={actionsRef}>
            <ActionsButton onClick={() => setShowActionsMenu(o => !o)}>
              Actions
              <Button.EndIcon isRotated={showActionsMenu}>
                <ChevronDownIcon />
              </Button.EndIcon>
            </ActionsButton>
            {showActionsMenu && (
              <ActionsMenu>
                <ActionsMenuItem onClick={() => setShowActionsMenu(false)}>Clone role</ActionsMenuItem>
                <ActionsMenuItem onClick={() => { setShowActionsMenu(false); setShowAssignModal(true) }}>Assign role</ActionsMenuItem>
                <ActionsMenuItem $danger onClick={() => setShowActionsMenu(false)}>Delete role</ActionsMenuItem>
              </ActionsMenu>
            )}
          </ActionsWrap>
        )}
      </HeaderRow>

      {isCounselor && counselorSaveErrors.length > 0 && (
        <SaveErrorAlert ref={saveErrorAlertRef}>
          <SaveErrorIcon>
            <FloraErrorIcon />
          </SaveErrorIcon>
          <SaveErrorBody>
            <SaveErrorTitle>Can&apos;t save this role</SaveErrorTitle>
            <SaveErrorText>
              You must finish the setting up the role
              <ul>
                {counselorSaveErrors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SaveErrorText>
          </SaveErrorBody>
        </SaveErrorAlert>
      )}

      {/* Identity — Name + Description. */}
      <FormSection>
        <FieldGroup $maxWidth={fieldMaxWidth}>
          <Field>
            <Field.Label>Name* (required)</Field.Label>
            <Input
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              required
            />
          </Field>
        </FieldGroup>
        <FieldGroup $maxWidth={descriptionMaxWidth}>
          <Field>
            <Field.Label>Description</Field.Label>
            <Textarea
              value={descValue}
              onChange={(e) => setDescValue(e.target.value)}
              minRows={3}
              isResizable
            />
          </Field>
        </FieldGroup>
      </FormSection>

      {/* Role package — V4 only; chosen in the create modal; adjustable here. */}
      {isRolePackageVersion && isCreate && !hasSaved && rolePackage && (
        <FormSection>
          <RolePackageFieldset $maxWidth={descriptionMaxWidth}>
            <Fieldset.Legend>Role type</Fieldset.Legend>
            <RolePackageHint>
              Applies a starting set of permissions across settings and products.
              Change the type to re-apply the package, or tweak anything below.
            </RolePackageHint>
            <RolePackageOptions>
              {ROLE_PACKAGE_OPTIONS.map((option) => {
                const selected = rolePackage === option.value
                const packageCustomized = selected && (
                  !isRolePackagePermissionsMatch(option.value, permissions)
                  || !isRolePackageProductsMatch(option.value, (productId) => (
                    productId === 'ai-agents'
                      ? getAiAgentsState(aiAgentsKey).accessLevel
                      : getProductAccess(aiAgentsKey, productId).accessLevel
                  ))
                  || qaPackageDiverged
                )
                return (
                  <Field key={option.value}>
                    <Radio
                      name="role-package"
                      value={option.value}
                      checked={selected}
                      onChange={() => applyRolePackage(option.value)}
                    >
                      <Field.Label>
                        <RolePackageLabelRow>
                          <span>{option.label}</span>
                          {packageCustomized && (
                            <CustomizedTag>Customized</CustomizedTag>
                          )}
                        </RolePackageLabelRow>
                      </Field.Label>
                      <Field.Hint>{option.description}</Field.Hint>
                    </Radio>
                  </Field>
                )
              })}
            </RolePackageOptions>
          </RolePackageFieldset>
        </FormSection>
      )}

      {/* Permissions controls, then capsules. */}
      {isPanelVersion ? (
        <PermissionsFilterBlock $maxWidth={capsuleMaxWidth}>
          <SearchFilterRow>
            <SearchFieldWrap $maxWidth={fieldMaxWidth}>
              <Field>
                <Field.Label>Search permissions</Field.Label>
                <MediaInput
                  start={
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                      <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M11.2 11.2L15 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  }
                  value={settingsQuery}
                  onChange={(e) => setSettingsQuery(e.target.value)}
                />
              </Field>
            </SearchFieldWrap>
            <FilterButton onClick={() => setFilterDrawerOpen(true)}>
              <Button.StartIcon>
                <FilterSliderIcon />
              </Button.StartIcon>
              Filter{appliedFilterCount > 0 ? ` (${appliedFilterCount})` : ''}
            </FilterButton>
          </SearchFilterRow>
          {filterTags.length > 0 && (
            <FilterTagsRow>
              {filterTags.map((tag) => (
                <Tag key={tag.key} isPill={false}>
                  <span>{tag.label}</span>
                  <Tag.Close aria-label="Remove filter" onClick={() => removeFilterTag(tag.kind, tag.id)} />
                </Tag>
              ))}
              <ClearFiltersButton onClick={clearAllFilters}>Clear filters</ClearFiltersButton>
            </FilterTagsRow>
          )}
        </PermissionsFilterBlock>
      ) : (
        <OpenAllRow $maxWidth={capsuleMaxWidth}>
          <SearchFieldWrap $maxWidth={fieldMaxWidth}>
            <Field>
              <Field.Label>Search permissions</Field.Label>
              <MediaInput
                start={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
                    <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M11.2 11.2L15 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                }
                value={settingsQuery}
                onChange={(e) => setSettingsQuery(e.target.value)}
              />
            </Field>
          </SearchFieldWrap>
          <OpenAllButton onClick={toggleAllCapsules}>
            {allCapsulesOpen ? 'Close all' : 'Open all'}
          </OpenAllButton>
        </OpenAllRow>
      )}

      <PermissionFilterProvider version={version} filters={permissionFilters}>
      {/* V4: Workforce Management (WFM) as a peer section to Settings/Products. */}
      {isWfmConcept && (
        <>
          <SectionTitleRow $maxWidth={capsuleMaxWidth}>
            <GroupHeading $maxWidth={capsuleMaxWidth} $flush>
              Workforce Management (WFM)
            </GroupHeading>
            <OpenAllButton onClick={toggleAllCapsules}>
              {allCapsulesOpen ? 'Close all' : 'Open all'}
            </OpenAllButton>
          </SectionTitleRow>

          {showCapsule('wfm-role-assignment') && (
            <div ref={wfmRef}>
              <SettingsCapsule
                title="WFM role assignment"
                description="Choose whether people in this Support role also receive a WFM role."
                searchText={withTags('wfm-role-assignment', WFM_ASSIGNMENT_SEARCH_TEXT)}
                {...capsuleProps('wfm-role-assignment')}
              >
                <WorkforceManagementSection
                  key={`${version}-${id}`}
                  query={q}
                  saved={hasSaved}
                />
              </SettingsCapsule>
            </div>
          )}
        </>
      )}

      {isPanelVersion && (
        <SectionTitleRow $maxWidth={capsuleMaxWidth}>
          <GroupHeading $maxWidth={capsuleMaxWidth} $flush={!isWfmConcept}>
            Settings
          </GroupHeading>
          {!isWfmConcept && (
            <OpenAllButton onClick={toggleAllCapsules}>
              {allCapsulesOpen ? 'Close all' : 'Open all'}
            </OpenAllButton>
          )}
        </SectionTitleRow>
      )}

      {showCapsule('tickets') && (
      <SettingsCapsule
        title="Tickets"
        description="Choose the ticket permissions for this role."
        searchText={withTags('tickets')}
        {...capsuleProps('tickets')}
      >
        <PermissionBlock tags={['tickets']}>
          <Label style={{ marginBottom: '12px' }}>Tickets they can access</Label>
          <RadioGroup>
            <RadioLabel><RadioInput name="ticket-access" checked={permissions.ticketAccess === 'org'} onChange={() => setPerm('ticketAccess', 'org')} /> Requested by and users in their organizations</RadioLabel>
            <RadioLabel><RadioInput name="ticket-access" checked={permissions.ticketAccess === 'groups'} onChange={() => setPerm('ticketAccess', 'groups')} /> Within their groups</RadioLabel>
            <RadioLabel><RadioInput name="ticket-access" checked={permissions.ticketAccess === 'public'} onChange={() => setPerm('ticketAccess', 'public')} /> Within their group and all public groups</RadioLabel>
            <RadioLabel><RadioInput name="ticket-access" checked={permissions.ticketAccess === 'all'} onChange={() => setPerm('ticketAccess', 'all')} /> All, including those in private groups</RadioLabel>
          </RadioGroup>
        </PermissionBlock>

        <PermissionBlock tags={['tickets']}>
          <SubSectionHeader>Manage suspended tickets</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.manageSuspended} onChange={(e) => setPerm('manageSuspended', e.target.checked)} /> Each allowed <HintText>- Automatically suspends tickets that may be risky or malicious</HintText></CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['tickets']}>
          <SubSectionHeader>Edit ticket properties</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.editTicketProperties} onChange={(e) => setPerm('editTicketProperties', e.target.checked)} /> Can tag and edit tickets and edit properties</CheckboxLabel>
            <CheckboxLabel><CheckboxInput checked={permissions.deleteTickets} onChange={(e) => setPerm('deleteTickets', e.target.checked)} /> Delete tickets</CheckboxLabel>
            <CheckboxLabel><CheckboxInput checked={permissions.restrictTicketContent} onChange={(e) => setPerm('restrictTicketContent', e.target.checked)} /> Restrict ticket content</CheckboxLabel>
            <CheckboxLabel><CheckboxInput checked={permissions.mergeTickets} onChange={(e) => setPerm('mergeTickets', e.target.checked)} /> Merge tickets</CheckboxLabel>
            <CheckboxLabel><CheckboxInput checked={permissions.editTicketTags} onChange={(e) => setPerm('editTicketTags', e.target.checked)} /> Edit ticket tags</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['tickets']}>
          <SubSectionHeader>Commenting permissions</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.privateComments} onChange={(e) => setPerm('privateComments', e.target.checked)} /> Private comments only</CheckboxLabel>
            <CheckboxLabel><CheckboxInput checked={permissions.publicPrivateComments} onChange={(e) => setPerm('publicPrivateComments', e.target.checked)} /> Public and private comments</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['tickets']}>
          <SubSectionHeader>Manage ticket forms</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.manageTicketForms} onChange={(e) => setPerm('manageTicketForms', e.target.checked)} /> Can access the Ticket Forms admin page and create, edit, update, and delete ticket forms</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['tickets']}>
          <SubSectionHeader>Manage ticket fields</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.manageTicketFields} onChange={(e) => setPerm('manageTicketFields', e.target.checked)} /> Can customize Ticket Fields admin page and create, edit, update, and delete ticket fields</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {showCapsule('custom-objects') && (
      <SettingsCapsule
        title="Custom objects"
        description="No objects yet."
        searchText={withTags('custom-objects')}
        {...capsuleProps('custom-objects')}
      >
        <PermissionBlock tags={['tickets']}>
          <LinkText>Can view and edit objects</LinkText>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {showCapsule('people') && (
      <SettingsCapsule
        title="People"
        description="Choose the people permissions for this role."
        searchText={withTags('people')}
        {...capsuleProps('people')}
      >
        <PermissionBlock tags={['user-management']}>
          <Label style={{ marginBottom: '12px' }}>Manage and users</Label>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.endUsersViewOnly} onChange={(e) => setPerm('endUsersViewOnly', e.target.checked)} /> View only</CheckboxLabel>
            <CheckboxLabel><CheckboxInput checked={permissions.endUsersOrgEdit} onChange={(e) => setPerm('endUsersOrgEdit', e.target.checked)} /> Add, edit, and assume profiles in organizations they belong to</CheckboxLabel>
            <CheckboxLabel><CheckboxInput checked={permissions.endUsersAnyEdit} onChange={(e) => setPerm('endUsersAnyEdit', e.target.checked)} /> Add, edit, delete, and assume profiles for any end user</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Search and view lists of end users</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.searchEndUsers} onChange={(e) => setPerm('searchEndUsers', e.target.checked)} /> Find end users by name, email, phone, or organization. Without this, agents can only view individual and team profiles.</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Manage team members</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.teamMembers === 'none'} onChange={() => setPerm('teamMembers', 'none')} /> Not allowed</CheckboxLabel>
            <CheckboxLabel><CheckboxInput checked={permissions.teamMembers === 'view'} onChange={() => setPerm('teamMembers', 'view')} /> View only</CheckboxLabel>
            <CheckboxLabel><CheckboxInput checked={permissions.teamMembers === 'manage'} onChange={() => setPerm('teamMembers', 'manage')} /> Create, assign roles, add, and delete</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Manage groups</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.manageGroupMembers} onChange={(e) => setPerm('manageGroupMembers', e.target.checked)} /> Add and remove team members from groups</CheckboxLabel>
            <CheckboxLabel><CheckboxInput checked={permissions.manageGroups} onChange={(e) => setPerm('manageGroups', e.target.checked)} /> Create, edit, and delete groups</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Manage organizations</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.manageOrganizations} onChange={(e) => setPerm('manageOrganizations', e.target.checked)} /> Add, update, delete organizations</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Manage organization fields</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.manageOrgFields} onChange={(e) => setPerm('manageOrgFields', e.target.checked)} /> Can add, edit, and delete organization fields</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Manage roles</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.manageRoles} onChange={(e) => setPerm('manageRoles', e.target.checked)} /> Create, edit, and delete roles</CheckboxLabel>
            <CheckboxLabel><CheckboxInput checked={permissions.manageSubdomainRoles} onChange={(e) => setPerm('manageSubdomainRoles', e.target.checked)} /> Can only edit subdomain roles</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['user-management']}>
          <SubSectionHeader>Manage user fields</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.manageUserFields} onChange={(e) => setPerm('manageUserFields', e.target.checked)} /> Can access the User Fields admin page and create, edit, update, and delete user fields</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {showCapsule('channels') && (
      <SettingsCapsule
        title="Channels"
        description="Choose the channel permissions for this role."
        searchText={withTags('channels')}
        {...capsuleProps('channels')}
      >
        <PermissionBlock tags={['tickets', 'channels']}>
          <Label style={{ marginBottom: '8px' }}>Manage channels and extensions</Label>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.manageChannels} onChange={(e) => setPerm('manageChannels', e.target.checked)} /> Channels include email, social messaging apps, and other means of communication. Extensions include triggers, automations, and integrations.</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['tickets', 'channels']}>
          <SubSectionHeader>Manage Facebook pages</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.manageFacebook} onChange={(e) => setPerm('manageFacebook', e.target.checked)} /> Can set Facebook pages to create tickets from Facebook wall posts</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {showCapsule('agent-workflow') && (
      <SettingsCapsule
        title="Agent workflow"
        description="Choose the agent workflow permissions for this role."
        searchText={withTags('agent-workflow')}
        {...capsuleProps('agent-workflow')}
      >
        <PermissionBlock tags={['workflow']}>
          <Label style={{ marginBottom: '12px' }}>Manage permissions</Label>
          <RadioGroup>
            <RadioLabel><RadioInput name="views" checked={permissions.views === 'my'} onChange={() => setPerm('views', 'my')} /> My views only</RadioLabel>
            <RadioLabel><RadioInput name="views" checked={permissions.views === 'see'} onChange={() => setPerm('views', 'see')} /> See views only</RadioLabel>
            <RadioLabel><RadioInput name="views" checked={permissions.views === 'personal'} onChange={() => setPerm('views', 'personal')} /> Add and edit personal views</RadioLabel>
            <RadioLabel><RadioInput name="views" checked={permissions.views === 'group'} onChange={() => setPerm('views', 'group')} /> Add and edit personal and group views</RadioLabel>
            <RadioLabel><RadioInput name="views" checked={permissions.views === 'global'} onChange={() => setPerm('views', 'global')} /> Add and edit personal, group, and global views</RadioLabel>
          </RadioGroup>
        </PermissionBlock>

        <PermissionBlock tags={['workflow']}>
          <SubSectionHeader>Limit number of views</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.limitViews} onChange={(e) => setPerm('limitViews', e.target.checked)} /> Limit views to 12 shared views and 8 personal views</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['workflow']}>
          <SubSectionHeader>Access view filtering</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.filterViews} onChange={(e) => setPerm('filterViews', e.target.checked)} /> Can view and filter views</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['workflow']}>
          <SubSectionHeader>Macro permissions</SubSectionHeader>
          <RadioGroup>
            <RadioLabel><RadioInput name="macros" checked={permissions.macros === 'apply'} onChange={() => setPerm('macros', 'apply')} /> Apply only</RadioLabel>
            <RadioLabel><RadioInput name="macros" checked={permissions.macros === 'personal'} onChange={() => setPerm('macros', 'personal')} /> Add and edit personal macros</RadioLabel>
            <RadioLabel><RadioInput name="macros" checked={permissions.macros === 'group'} onChange={() => setPerm('macros', 'group')} /> Add and edit personal and group macros</RadioLabel>
            <RadioLabel><RadioInput name="macros" checked={permissions.macros === 'global'} onChange={() => setPerm('macros', 'global')} /> Add and edit personal, group, and global macros</RadioLabel>
          </RadioGroup>
        </PermissionBlock>

        <PermissionBlock tags={['workflow']}>
          <SubSectionHeader>Access dynamic content</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.dynamicContent} onChange={(e) => setPerm('dynamicContent', e.target.checked)} /> Can view, edit, and add dynamic content</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['workflow']}>
          <SubSectionHeader>Manage contextual workspaces</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.contextualWorkspaces} onChange={(e) => setPerm('contextualWorkspaces', e.target.checked)} /> Can view, edit, and edit contextual workspaces</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {showCapsule('business-rules') && (
      <SettingsCapsule
        title="Business rules"
        description="Choose the business rules permissions for this role."
        searchText={withTags('business-rules')}
        {...capsuleProps('business-rules')}
      >
        <PermissionBlock tags={['automation']}>
          <Label style={{ marginBottom: '8px' }}>Automations</Label>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.automations} onChange={(e) => setPerm('automations', e.target.checked)} /> Can view, add, edit, and delete automations</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['automation']}>
          <SubSectionHeader>Skills</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.skills} onChange={(e) => setPerm('skills', e.target.checked)} /> Can view, add, edit, and delete skills</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['automation']}>
          <SubSectionHeader>Service level agreements</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.slas} onChange={(e) => setPerm('slas', e.target.checked)} /> Can view, add, edit, and delete service level agreements</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['automation']}>
          <SubSectionHeader>Triggers</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.triggers} onChange={(e) => setPerm('triggers', e.target.checked)} /> Can view, edit, add, and delete triggers</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['automation']}>
          <SubSectionHeader>Business rules analysis</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.businessRulesAnalysis} onChange={(e) => setPerm('businessRulesAnalysis', e.target.checked)} /> Can view, edit, add, and delete business rule analysis</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {showCapsule('security') && (
      <SettingsCapsule
        title="Security and privacy"
        description="Choose the security and privacy permissions for this role."
        searchText={withTags('security')}
        {...capsuleProps('security')}
      >
        <PermissionBlock tags={['gdpr', 'security']}>
          <Label style={{ marginBottom: '8px' }}>Manage access and security permissions for this role.</Label>
        </PermissionBlock>

        <PermissionBlock tags={['gdpr', 'security']}>
          <SubSectionHeader>Manage deletion schedules</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.deletionSchedules} onChange={(e) => setPerm('deletionSchedules', e.target.checked)} /> Admins or Admins automatically delete data like tickets.</CheckboxLabel>
          </CheckboxGroup>
        </PermissionBlock>

        <PermissionBlock tags={['gdpr', 'user-management']}>
          <SubSectionHeader>Data handling</SubSectionHeader>
          <CheckboxGroup>
            <CheckboxLabel><CheckboxInput checked={permissions.hidePii} onChange={(e) => setPerm('hidePii', e.target.checked)} /> Hide end user personally identifiable information (PII) from this role</CheckboxLabel>
          </CheckboxGroup>

          <div style={{ marginTop: '12px' }}>
            <table style={{ fontSize: '13px', color: '#2f3130' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '4px 16px 4px 0', fontWeight: 500 }}>User field</th>
                  <th style={{ textAlign: 'left', padding: '4px 0', fontWeight: 500 }}>Access</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '4px 16px 4px 0' }}>Name</td><td>✓</td></tr>
                <tr><td style={{ padding: '4px 16px 4px 0' }}>Phone</td><td>✓</td></tr>
                <tr><td style={{ padding: '4px 16px 4px 0' }}>Email</td><td>✓</td></tr>
              </tbody>
            </table>
          </div>
        </PermissionBlock>
      </SettingsCapsule>
      )}


      {/* V1/V2 keep the standalone Knowledge settings capsule. V3 merges it into
          the Knowledge product capsule below. */}
      {!isPanelVersion && (
      <SettingsCapsule
        title="Knowledge"
        description="Choose whether or not this role includes managing Knowledge."
        {...capsuleProps('knowledge')}
      >
        <CheckboxGroup>
          <CheckboxLabel><CheckboxInput checked={permissions.manageGuide} onChange={(e) => setPerm('manageGuide', e.target.checked)} /> Manage Guide</CheckboxLabel>
          <HintText style={{ marginLeft: '24px', display: 'block' }}>Can by default have an admin and can manage articles, themes, and settings.</HintText>
        </CheckboxGroup>
      </SettingsCapsule>
      )}


      {showCapsule('reporting') && (
      <SettingsCapsule
        title="Reporting and analytics"
        description={isCounselor
          ? 'Choose the analytics permissions for this role.'
          : 'Choose the reporting and analytics permissions for this role.'}
        searchText={withTags('reporting', isCounselor ? REPORTING_ERRORS_SEARCH_TEXT : '')}
        errorCount={isCounselor ? counselorSaveErrors.length : 0}
        {...capsuleProps('reporting')}
      >
        {isCounselor ? (
          <PermissionBlock tags={['reporting']}>
            <ReportingAnalyticsErrors onSaveErrorsChange={setCounselorSaveErrors} />
          </PermissionBlock>
        ) : (
          <>
            <PermissionBlock tags={['reporting']}>
              <Label style={{ marginBottom: '12px' }}>Explore permissions</Label>
              <RadioGroup>
                <RadioLabel><RadioInput name="explore" checked={permissions.explore === 'none'} onChange={() => setPerm('explore', 'none')} /> No access</RadioLabel>
                <RadioLabel><RadioInput name="explore" checked={permissions.explore === 'view'} onChange={() => setPerm('explore', 'view')} /> View reports</RadioLabel>
                <RadioLabel><RadioInput name="explore" checked={permissions.explore === 'create'} onChange={() => setPerm('explore', 'create')} /> Create reports</RadioLabel>
                <RadioLabel><RadioInput name="explore" checked={permissions.explore === 'manage'} onChange={() => setPerm('explore', 'manage')} /> Create reports and manage permissions</RadioLabel>
              </RadioGroup>
            </PermissionBlock>

            <PermissionBlock tags={['reporting']}>
              <SubSectionHeader>Reports permissions</SubSectionHeader>
              <CheckboxGroup>
                <CheckboxLabel><CheckboxInput checked={permissions.supportReports} onChange={(e) => setPerm('supportReports', e.target.checked)} /> Refer to the Reports tab in Support, not reports within Explore. These who can also export data.</CheckboxLabel>
              </CheckboxGroup>
            </PermissionBlock>

            <PermissionBlock tags={['reporting']}>
              <SubSectionHeader>View Talk dashboard</SubSectionHeader>
              <CheckboxGroup>
                <CheckboxLabel><CheckboxInput checked={permissions.talkDashboard} onChange={(e) => setPerm('talkDashboard', e.target.checked)} /> Can track phone calls on the Talk dashboard</CheckboxLabel>
              </CheckboxGroup>
            </PermissionBlock>
          </>
        )}
      </SettingsCapsule>
      )}


      {/* The ref is what the "Roles" link in a team member's Roles and access
          table scrolls to. In V1 this capsule sits last; in V2+ it moves into
          the product block below. */}
      {version === 'v1' && (
        <AiAgentsWrap ref={aiAgentsRef}>
          <SettingsCapsule
            title="AI agents"
            description="Choose whether this role can access AI agents."
            searchText={AI_AGENTS_SEARCH_TEXT}
            {...capsuleProps('ai-agents')}
          >
            <AIAgentsSection roleId={aiAgentsKey} query={q} />
          </SettingsCapsule>
        </AiAgentsWrap>
      )}

      {isPanelVersion && (
        <GroupHeading $maxWidth={capsuleMaxWidth}>Products</GroupHeading>
      )}

      {/* V2: after settings, one capsule per product. V3+: same, without Chat,
          no opt-in, Knowledge merges manage + access. */}
      {version !== 'v1' && productList.map(p => {
        if (!showCapsule(p.id)) return null
        if (p.id === 'ai-agents') {
          return (
            <AiAgentsWrap ref={aiAgentsRef} key={p.id}>
              <SettingsCapsule
                title="AI agents"
                description="Choose whether this role can access AI agents."
                searchText={withTags('ai-agents', AI_AGENTS_SEARCH_TEXT)}
                {...capsuleProps('ai-agents')}
              >
                <AIAgentsSection
                  roleId={aiAgentsKey}
                  query={q}
                  directAccess={isPanelVersion}
                />
              </SettingsCapsule>
            </AiAgentsWrap>
          )
        }
        const capsule = (
          <SettingsCapsule
            title={p.name}
            description={
              p.id === 'knowledge' && isPanelVersion
                ? 'Choose product access and whether this role can manage Knowledge.'
                : (isDenseQa && p.id === 'qa')
                  ? 'Choose an access level, then refine permissions by job if needed.'
                  : (isDomainMapQa && p.id === 'qa')
                    ? 'Choose an access level, then open a domain to refine its settings.'
                    : (isLayerCakeQa && p.id === 'qa')
                      ? 'Inherit from role type; add only the exceptions this role needs.'
                      : (isLayerCakeV65Qa && p.id === 'qa')
                        ? 'Choose a type, then customize permissions in place.'
                        : (isSectionedV7Qa && p.id === 'qa')
                          ? 'Choose a type, then customize permissions by job section.'
                          : `Choose whether this role can access ${p.name}.`
            }
            searchText={withTags(
              p.id,
              p.disabled
                ? 'Subscription limit reached'
                : (isDenseQa && p.id === 'qa')
                  ? qaPermissionsSearchText()
                  : (isDomainMapQa && p.id === 'qa')
                    ? qaDomainMapSearchText()
                    : (isLayerCakeQa && p.id === 'qa')
                      ? qaLayerCakeSearchText()
                      : (isLayerCakeV65Qa && p.id === 'qa')
                        ? qaLayerCakeV65SearchText()
                        : (isSectionedV7Qa && p.id === 'qa')
                          ? qaSectionedV7SearchText()
                          : productAccessSearchText(p, {
                              directAccess: isPanelVersion,
                              includeManage: p.id === 'knowledge' && isPanelVersion,
                            }),
            )}
            {...capsuleProps(p.id)}
          >
            {p.disabled
              ? <DisabledProductNote>Subscription limit reached</DisabledProductNote>
              : (isDenseQa && p.id === 'qa')
                ? (
                  <QaDensePermissions
                    key={rolePackage || 'qa'}
                    roleId={aiAgentsKey}
                    query={q}
                    packageAccessLevel={
                      rolePackage
                        ? productsForPackage(rolePackage).qa
                        : undefined
                    }
                    onPackageDivergenceChange={setQaPackageDiverged}
                  />
                )
                : (isDomainMapQa && p.id === 'qa')
                  ? (
                    <QaDomainMapPermissions
                      key={rolePackage || 'qa-map'}
                      roleId={aiAgentsKey}
                      query={q}
                      packageAccessLevel={
                        rolePackage
                          ? productsForPackage(rolePackage).qa
                          : undefined
                      }
                      onPackageDivergenceChange={setQaPackageDiverged}
                    />
                  )
                  : (isLayerCakeQa && p.id === 'qa')
                    ? (
                      <QaLayerCakePermissions
                        key={rolePackage || 'qa-layers'}
                        roleId={aiAgentsKey}
                        query={q}
                        packageAccessLevel={
                          rolePackage
                            ? productsForPackage(rolePackage).qa
                            : undefined
                        }
                        onPackageDivergenceChange={setQaPackageDiverged}
                      />
                    )
                    : (isLayerCakeV65Qa && p.id === 'qa')
                      ? (
                        <QaLayerCakePermissionsV65
                          key={rolePackage || 'qa-layers-65'}
                          roleId={aiAgentsKey}
                          query={q}
                          packageAccessLevel={
                            rolePackage
                              ? productsForPackage(rolePackage).qa
                              : undefined
                          }
                          onPackageDivergenceChange={setQaPackageDiverged}
                        />
                      )
                      : (isSectionedV7Qa && p.id === 'qa')
                        ? (
                          <QaSectionedPermissionsV7
                            key={rolePackage || 'qa-sectioned-v7'}
                            roleId={aiAgentsKey}
                            query={q}
                            packageAccessLevel={
                              rolePackage
                                ? productsForPackage(rolePackage).qa
                                : undefined
                            }
                            onPackageDivergenceChange={setQaPackageDiverged}
                          />
                        )
                        : (
                          <ProductAccessSection
                            roleId={aiAgentsKey}
                            product={p}
                            query={q}
                            directAccess={isPanelVersion}
                            includeManageKnowledge={p.id === 'knowledge' && isPanelVersion}
                          />
                        )}
          </SettingsCapsule>
        )
        return <Fragment key={p.id}>{capsule}</Fragment>
      })}
      </PermissionFilterProvider>
      <BottomSpacer />
        </Container>

        {/* Always show the Team members column — including create — so V4+
            matches earlier versions after save and keeps the assign affordance
            visible on the right. Assign stays disabled until the role exists. */}
        <SidePanel>
          <SidePanelTitle>Team members ({assignedMembers.length})</SidePanelTitle>
          {!hasSaved ? (
            <EmptyState>
              <EmptyStateTitle>No one in sight</EmptyStateTitle>
              <EmptyStateText>
                Save this role to assign it to team members.
              </EmptyStateText>
              <Button isDisabled>Assign role</Button>
            </EmptyState>
          ) : assignedMembers.length === 0 ? (
            <EmptyState>
              <EmptyStateTitle>No one in sight</EmptyStateTitle>
              <EmptyStateText>
                There's nobody in this role. You can assign it to team members via their profiles.
              </EmptyStateText>
              <Button onClick={() => setShowAssignModal(true)}>Assign role</Button>
            </EmptyState>
          ) : (
            <>
              <SidePanelHint>
                You can assign this role to team members via their profiles. To change roles
                for a team member in this role, select their name to go to their profile.
              </SidePanelHint>
              {showScaledSummary && (
                <SummaryAccessWarning type="warning" role="note">
                  <FilledWarningIcon />
                  <Alert.Title>
                    Access changed for {scaledPreview.affectedMemberCount} team member
                    {scaledPreview.affectedMemberCount === 1 ? '' : 's'}
                  </Alert.Title>
                  <PreviewAccessAnchor
                    href={`#/roles/${currentRoleId}/access-preview`}
                    isUnderlined
                    onClick={(e) => {
                      e.preventDefault()
                      navigate(`/roles/${currentRoleId}/access-preview`)
                    }}
                  >
                    Preview team members access change
                  </PreviewAccessAnchor>
                  <SummaryWarningList>
                    {scaledPreview.products.map((p) => (
                      <li key={p.id}>{p.name}</li>
                    ))}
                  </SummaryWarningList>
                </SummaryAccessWarning>
              )}
              <MemberTable>
                <MemberTableHead>Name</MemberTableHead>
                {assignedMembers.map(m => {
                  /* V2.5 uses the summary warning above the rows; Counselor is a
                     seeded existing role with no opt-in preview banners. */
                  const changes = (isCounselor || isScaledSimplified) ? [] : warningsFor(m)
                  return (
                  <MemberRow key={m.id}>
                    <MemberLink
                      onClick={() => navigate(`/team-members/${m.id}`, {
                        state: { fromRoleId: currentRoleId },
                      })}
                    >
                      {m.name}
                    </MemberLink>
                    {changes.length > 0 && (
                      <AccessWarning type="warning" role="note">
                        <FilledWarningIcon />
                        <Alert.Title>{changes.length > 1 ? 'Access changes' : 'Access change'}</Alert.Title>
                        <WarningChangeList>
                          {changes.map(c => (
                            <div key={c.key}>
                              <div>{c.product}</div>
                              <div>&bull; {c.body}</div>
                            </div>
                          ))}
                        </WarningChangeList>
                      </AccessWarning>
                    )}
                  </MemberRow>
                  )
                })}
              </MemberTable>
            </>
          )}
        </SidePanel>
      </ScrollArea>

      <BottomBar>
        <Button onClick={() => navigate('/roles')}>Cancel</Button>
        <Button isPrimary onClick={handleSave}>Save</Button>
      </BottomBar>

      {showAssignModal && (
        <AssignRoleModal
          onClose={() => setShowAssignModal(false)}
          onAssign={handleAssign}
        />
      )}

      {isPanelVersion && (
        <PermissionsFilterDrawer
          isOpen={filterDrawerOpen}
          onClose={() => setFilterDrawerOpen(false)}
          value={permissionFilters}
          onApply={setPermissionFilters}
          version={version}
        />
      )}
    </PageWrapper>
  )
}
