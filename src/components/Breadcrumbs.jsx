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
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Separator = styled.span`
  color: #87929d;
  margin: 0 2px;
`

const Current = styled.span`
  color: #2f3941;
`

export default function Breadcrumbs({ items }) {
  const navigate = useNavigate()

  return (
    <BreadcrumbContainer>
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            {i > 0 && <Separator>{'>'}</Separator>}
            {isLast ? (
              <Current>{item.label}</Current>
            ) : (
              <BreadcrumbLink onClick={() => item.path && navigate(item.path)}>
                {item.label}
              </BreadcrumbLink>
            )}
          </span>
        )
      })}
    </BreadcrumbContainer>
  )
}
