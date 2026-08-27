import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  font-size: 13px;
`

const BreadcrumbLink = styled.span`
  color: #1f73b7;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #144a75;
  }
`

const Separator = styled.span`
  color: #68737d;
  margin: 0 2px;
`

const Subtle = styled.span`
  color: #68737d;
`

export default function Breadcrumbs({ items }) {
  const navigate = useNavigate()

  return (
    <BreadcrumbContainer>
      {items.map((item, i) => {
        const isLink = Boolean(item.path)
        return (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {i > 0 && <Separator>{'>'}</Separator>}
            {isLink ? (
              <BreadcrumbLink onClick={() => navigate(item.path)}>
                {item.label}
              </BreadcrumbLink>
            ) : (
              <Subtle>{item.label}</Subtle>
            )}
          </span>
        )
      })}
    </BreadcrumbContainer>
  )
}
