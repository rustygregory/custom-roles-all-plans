import styled from 'styled-components'

/* A permission group as a collapsible card. White with a hairline border — the
   capsule from the roles page redesign: the header alone (title, description,
   chevron) is the whole click target, so the radio and checkbox rows inside the
   body can be used without collapsing the card under the cursor. */
const Card = styled.section`
  box-sizing: border-box;
  max-width: 630px;
  border: 1px solid #d8dcde;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 12px;
`

const Header = styled.button.attrs({ type: 'button' })`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 14px 16px;
  border: none;
  background: none;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  border-radius: 8px;
`

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const HeaderTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`

const HeaderDescription = styled.span`
  font-size: 13px;
  color: #68737d;
  line-height: 1.45;
`

const Chevron = styled.svg`
  flex-shrink: 0;
  margin-top: 5px;
  color: #68737d;
  transform: ${p => (p.$open ? 'rotate(180deg)' : 'none')};
`

const Body = styled.div`
  padding: 20px 16px 16px;
  border-top: 1px solid #e9ebed;
`

export default function SettingsCapsule({ title, description, open, onToggle, children }) {
  return (
    <Card>
      <Header onClick={onToggle} aria-expanded={open}>
        <HeaderText>
          <HeaderTitle>{title}</HeaderTitle>
          {description && <HeaderDescription>{description}</HeaderDescription>}
        </HeaderText>
        <Chevron $open={open} width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Chevron>
      </Header>
      {open && <Body>{children}</Body>}
    </Card>
  )
}
