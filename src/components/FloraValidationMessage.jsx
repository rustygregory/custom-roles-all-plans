import styled from 'styled-components'

/* Flora Central “Exclamation circle” stroke (20px) — from Flora Core
   Forms building blocks / Validation message. */
export const FloraExclamationCircle = ({ label = 'Error' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    role="img"
    aria-label={label}
    focusable="false"
  >
    <path
      d="M10 12.166C10.5522 12.166 10.9998 12.6139 11 13.166C11 13.7183 10.5523 14.166 10 14.166C9.44772 14.166 9 13.7183 9 13.166C9.0002 12.6139 9.44784 12.166 10 12.166Z"
      fill="currentColor"
    />
    <path
      d="M10 5.83301C10.4602 5.83303 10.833 6.20677 10.833 6.66699V10.417C10.8329 10.8771 10.4601 11.25 10 11.25C9.53986 11.25 9.16715 10.8771 9.16699 10.417V6.66699C9.16699 6.20675 9.53976 5.83301 10 5.83301Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1.66699C14.6024 1.66701 18.333 5.39764 18.333 10C18.333 14.6023 14.6023 18.333 10 18.333C5.39764 18.333 1.66701 14.6024 1.66699 10C1.66699 5.39763 5.39763 1.66699 10 1.66699ZM10 3.33301C6.3181 3.33301 3.33301 6.3181 3.33301 10C3.33303 13.6819 6.31812 16.667 10 16.667C13.6819 16.667 16.667 13.6819 16.667 10C16.667 6.31812 13.6819 3.33303 10 3.33301Z"
      fill="currentColor"
    />
  </svg>
)

const Row = styled.div.attrs({ role: 'alert' })`
  display: inline-flex;
  align-items: flex-start;
  /* 8px ink-to-text: Central 20px icon has ~1.67px empty on each side. */
  gap: 6.33px;
  margin-top: 8px;
  max-width: 100%;
  color: #c63f46;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`

const IconSlot = styled.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
`

const Text = styled.span`
  padding-block: 2px;
  min-width: 0;
`

/** Flora Field validation message: 20px Central icon + 8px gap + Small/Default text. */
export default function FloraValidationMessage({ children, validationLabel = 'Error' }) {
  return (
    <Row>
      <IconSlot>
        <FloraExclamationCircle label={validationLabel} />
      </IconSlot>
      <Text>{children}</Text>
    </Row>
  )
}
