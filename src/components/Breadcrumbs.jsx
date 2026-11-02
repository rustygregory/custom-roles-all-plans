import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs'
import { Anchor } from '@zendeskgarden/react-buttons'
import { getColor } from '@zendeskgarden/react-theming'

/* 8px between breadcrumb and page title */
const BreadcrumbWrap = styled.div`
  margin-bottom: 8px;
`

/* Flora Core Breadcrumb parents = Anchor → fg/primary */
const BreadcrumbAnchor = styled(Anchor).attrs({
  isUnderlined: false,
  'data-inspect-token-color': 'fg/primary',
})``

/*
 * Non-navigable ancestor (no path): Admin Center uses fg/subtle.
 * Explicit token avoids Garden non-current inherit → fg/default.
 */
const AncestorText = styled.span.attrs({ 'data-inspect-token-color': 'fg/subtle' })`
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
`

/* Flora Core "Current" text → fg/subtle */
const CurrentPage = styled.span.attrs({ 'data-inspect-token-color': 'fg/subtle' })`
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};
`

export default function Breadcrumbs({ items }) {
  const navigate = useNavigate()

  return (
    <BreadcrumbWrap>
      <Breadcrumb aria-label="Breadcrumbs">
        {items.map((item, i) => {
          const isCurrent = i === items.length - 1

          if (isCurrent) {
            return <CurrentPage key={`${item.label}-${i}`}>{item.label}</CurrentPage>
          }

          if (item.path) {
            return (
              <BreadcrumbAnchor
                key={`${item.label}-${i}`}
                href={item.path}
                onClick={e => {
                  e.preventDefault()
                  navigate(item.path)
                }}
              >
                {item.label}
              </BreadcrumbAnchor>
            )
          }

          return <AncestorText key={`${item.label}-${i}`}>{item.label}</AncestorText>
        })}
      </Breadcrumb>
    </BreadcrumbWrap>
  )
}
