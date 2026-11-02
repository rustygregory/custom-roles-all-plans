import styled from 'styled-components'
import {
  ZendeskMark,
  ChevronDown,
  Plus,
  Search,
  Chat,
  Phone,
  Bell,
  Help,
  User,
} from './icons'

const Bar = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  height: 64px;
  box-sizing: border-box;
  width: 100%;
  background: #f8f9f9;
  flex-shrink: 0;
`

const ProductCluster = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 32px;
  color: #5c6970;
`

const ProductButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #293239;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  cursor: default;

  svg {
    color: #5c6970;
  }
`

const MainCluster = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  min-width: 0;
  padding-right: 4px;
`

const LeftActions = styled.div`
  display: flex;
  align-items: center;
`

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background: #d8dcde;
  margin: 0 8px 0 4px;
`

const TextButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #293239;
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  cursor: default;

  &:disabled {
    color: #848f99;
    cursor: default;
  }

  svg {
    color: #5c6970;
  }
`

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #5c6970;
  cursor: default;
`

const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const UtilityGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f8f9f9;
  color: #5c6970;
  box-shadow: inset 0 0 0 1px #d8dcde;
`

/** Slim product TopBar — decorative chrome for prototypes (not interactive). */
export default function TopBar() {
  return (
    <Bar>
      <ProductCluster>
        <LogoWrap>
          <ZendeskMark />
        </LogoWrap>
        <ProductButton type="button" tabIndex={-1}>
          <span>Support</span>
          <ChevronDown />
        </ProductButton>
      </ProductCluster>

      <MainCluster>
        <LeftActions>
          <Divider />
          <TextButton type="button" tabIndex={-1}>
            <Plus />
            <span>Add</span>
          </TextButton>
        </LeftActions>

        <RightActions>
          <UtilityGroup>
            <IconButton type="button" tabIndex={-1} aria-label="Search">
              <Search />
            </IconButton>
            <TextButton type="button" tabIndex={-1} disabled>
              Conversations
            </TextButton>
            <IconButton type="button" tabIndex={-1} aria-label="Chat">
              <Chat />
            </IconButton>
            <IconButton type="button" tabIndex={-1} aria-label="Phone">
              <Phone />
            </IconButton>
          </UtilityGroup>
          <Divider style={{ margin: 0 }} />
          <IconButton type="button" tabIndex={-1} aria-label="Notifications">
            <Bell />
          </IconButton>
          <IconButton type="button" tabIndex={-1} aria-label="Help">
            <Help />
          </IconButton>
          <Avatar aria-hidden="true">
            <User />
          </Avatar>
        </RightActions>
      </MainCluster>
    </Bar>
  )
}
