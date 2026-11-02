import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

/* Flora Typography Medium / Default — 14/20 */
const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`

/* fg/primary — primaryHue.700 */
const BreadcrumbLink = styled.span`
  color: #406cc4;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  &:hover {
    color: #284173;
    text-decoration: underline;
  }

  &:active {
    color: #1f335a;
  }
`

/* fg/subtle — neutralHue.700 */
const Separator = styled.span`
  color: #646864;
  margin: 0 2px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`

const Subtle = styled.span`
  color: #646864;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
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
