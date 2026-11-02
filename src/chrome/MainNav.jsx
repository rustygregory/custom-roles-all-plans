import styled from 'styled-components'
import {
  Home,
  Inbox,
  Contacts,
  Organization,
  CustomObjects,
  Analytics,
  Settings,
} from './icons'

const Rail = styled.nav`
  display: flex;
  flex-direction: column;
  width: 56px;
  min-width: 56px;
  height: 100%;
  background: #f8f9f9;
  box-sizing: border-box;
  flex-shrink: 0;
`

const Spacer = styled.div`
  flex: ${p => p.$flex || '0 0 auto'};
  height: ${p => p.$height || 'auto'};
`

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 48px;
`

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: ${p => (p.$active ? '#e9ebed' : 'transparent')};
  color: #5c6970;
  cursor: default;

  &:hover {
    background: ${p => (p.$active ? '#e9ebed' : '#e9ebed')};
  }
`

const NAV_ITEMS = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'inbox', label: 'Inbox', Icon: Inbox },
  { id: 'contacts', label: 'Contacts', Icon: Contacts },
  { id: 'organization', label: 'Organization', Icon: Organization },
  { id: 'custom_objects', label: 'Custom Objects', Icon: CustomObjects },
  { id: 'analytics', label: 'Analytics', Icon: Analytics },
  { id: 'admin_center', label: 'Settings', Icon: Settings },
]

/** Slim product icon rail — decorative chrome for prototypes (not interactive). */
export default function MainNav({ currentProduct = 'admin_center' }) {
  return (
    <Rail aria-label="Product navigation">
      <Spacer $height="16px" />
      <Items>
        {NAV_ITEMS.map(({ id, label, Icon }) => (
          <Item key={id}>
            <NavButton
              type="button"
              tabIndex={-1}
              aria-label={label}
              aria-current={id === currentProduct ? 'page' : undefined}
              $active={id === currentProduct}
            >
              <Icon />
            </NavButton>
          </Item>
        ))}
      </Items>
      <Spacer $flex="1" />
    </Rail>
  )
}
