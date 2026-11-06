import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { PALETTE } from '../flora-theme/elements/palette'
import { requestCommentAt, setInspectModeFlag } from './bridge'
import { measureBoxes, measureMargins } from './measure'
import { elementFromPointInRoot, readElementDetails } from './readStyles'

const Z = 9100
const MINT_500 = PALETTE.mint[500]
const MEASURE = '#ff6b4a'
const PANEL_WIDTH = 300
const PANEL_MARGIN = 16

function defaultPanelPosition() {
  return {
    left: Math.max(PANEL_MARGIN, window.innerWidth - PANEL_WIDTH - PANEL_MARGIN),
    top: 64,
  }
}

function clampPanelPosition(left, top, height = 240) {
  const maxLeft = Math.max(PANEL_MARGIN, window.innerWidth - PANEL_WIDTH - PANEL_MARGIN)
  const maxTop = Math.max(PANEL_MARGIN, window.innerHeight - Math.min(height, window.innerHeight - PANEL_MARGIN) - PANEL_MARGIN)
  return {
    left: Math.min(Math.max(PANEL_MARGIN, left), maxLeft),
    top: Math.min(Math.max(PANEL_MARGIN, top), maxTop),
  }
}

function getInspectRoot() {
  return (
    document.querySelector('[data-inspect-root="true"]') ||
    document.querySelector('[data-comment-root="true"]')
  )
}

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  min-height: 28px;
  padding: 0 10px;
  border: 1px solid ${(p) => (p.$active ? MINT_500 : '#363d44')};
  border-radius: 4px;
  background-color: ${(p) => (p.$active ? MINT_500 : 'transparent')};
  color: ${(p) => (p.$active ? '#ffffff' : '#c8cdd0')};
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${(p) => (p.$active ? '#16a260' : '#262c32')};
    border-color: ${(p) => (p.$active ? MINT_500 : '#555e66')};
    color: #ffffff;
  }

  &:focus-visible {
    outline: 2px solid #9affce;
    outline-offset: 2px;
  }

  /* Mint console: dark ink so the control stays readable on Mint/500. */
  header[data-inspect-console='true'] & {
    border-color: ${(p) => (p.$active ? '#0e261a' : 'rgba(14, 38, 26, 0.4)')};
    background-color: ${(p) => (p.$active ? '#0e261a' : 'transparent')};
    color: ${(p) => (p.$active ? '#ffffff' : '#0e261a')};

    &:hover {
      background-color: ${(p) => (p.$active ? '#143726' : 'rgba(14, 38, 26, 0.12)')};
      border-color: #0e261a;
      color: ${(p) => (p.$active ? '#ffffff' : '#0e261a')};
    }

    &:focus-visible {
      outline-color: #0e261a;
    }
  }
`

const Catcher = styled.div`
  position: fixed;
  z-index: ${Z};
  cursor: crosshair;
  background: transparent;
`

const Highlight = styled.div`
  position: fixed;
  z-index: ${Z + 1};
  pointer-events: none;
  box-sizing: border-box;
  border: 2px solid ${MINT_500};
  background: rgba(1, 177, 92, 0.12);
  border-radius: 2px;
`

const MarginBand = styled.div`
  position: fixed;
  z-index: ${Z + 2};
  pointer-events: none;
  background: rgba(255, 107, 74, 0.28);
`

const MeasureLine = styled.div`
  position: fixed;
  z-index: ${Z + 3};
  pointer-events: none;
  background: ${MEASURE};
`

const MeasureLabel = styled.div`
  position: fixed;
  z-index: ${Z + 4};
  pointer-events: none;
  transform: translate(-50%, -50%);
  padding: 1px 5px;
  border-radius: 3px;
  background: ${MEASURE};
  color: #ffffff;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
`

const Panel = styled.aside`
  position: fixed;
  z-index: ${Z + 5};
  width: ${PANEL_WIDTH}px;
  max-height: calc(100vh - 32px);
  overflow: auto;
  box-sizing: border-box;
  padding: 12px 14px 14px;
  border-radius: 8px;
  background: #1a1f24;
  color: #e8eaed;
  border: 1px solid #363d44;
  box-shadow: 0 8px 24px rgba(10, 13, 14, 0.28);
  font-family: inherit;
  font-size: 12px;
  line-height: 16px;
`

const PanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin: -4px -6px 10px;
  padding: 4px 6px 8px;
  border-radius: 4px;
  cursor: grab;
  touch-action: none;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`

const PanelTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  color: #ffffff;
  word-break: break-word;
`

const PanelHint = styled.div`
  margin: 0 0 10px;
  color: #8b9298;
  font-size: 11px;
  line-height: 14px;
`

const CloseBtn = styled.button`
  flex-shrink: 0;
  border: none;
  background: transparent;
  color: #c8cdd0;
  cursor: pointer;
  padding: 0 2px;
  font-size: 16px;
  line-height: 1;

  &:hover {
    color: #ffffff;
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 6px 8px;
  padding: 5px 0;
  border-top: 1px solid #2c333a;
`

const RowLabel = styled.div`
  color: #8b9298;
`

const RowValue = styled.div`
  color: ${(p) => (p.$token ? '#9affce' : p.$measure ? MEASURE : '#e8eaed')};
  word-break: break-word;
`

const RowDetail = styled.div`
  grid-column: 2;
  color: #6b737a;
  font-size: 11px;
  margin-top: -2px;
`

const Swatch = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  margin-right: 6px;
  vertical-align: -1px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: ${(p) => p.$color};
`

const CopyButton = styled.button`
  margin-top: 12px;
  width: 100%;
  min-height: 28px;
  border: 1px solid #555e66;
  border-radius: 4px;
  background: transparent;
  color: #e8eaed;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #262c32;
    border-color: #6b737a;
  }
`

function boxFromEl(el) {
  if (!el) return null
  const r = el.getBoundingClientRect()
  return { left: r.left, top: r.top, width: r.width, height: r.height }
}

function startFromUrl() {
  try {
    return new URLSearchParams(window.location.search).get('inspect') === 'true'
  } catch {
    return false
  }
}

/**
 * Inspect mode: hover to highlight, click to select, Esc / toggle to exit.
 * Selection shows CSS margin bands; hover another element for gaps / insets.
 * ⌘/Ctrl+Click places a comment when Comment mode is also on.
 */
export default function InspectLayer({
  toggleContainer,
  onActiveChange,
}) {
  const [isOn, setIsOn] = useState(startFromUrl)
  const [hoverEl, setHoverEl] = useState(null)
  const [selectedEl, setSelectedEl] = useState(null)
  const [tick, setTick] = useState(0)
  const [copied, setCopied] = useState(false)
  const [panelPos, setPanelPos] = useState(defaultPanelPosition)
  const [scrimOpen, setScrimOpen] = useState(false)
  const panelRef = useRef(null)
  const dragRef = useRef(null)

  useEffect(() => {
    setInspectModeFlag(isOn)
    onActiveChange?.(isOn)
    if (!isOn) {
      setHoverEl(null)
      setSelectedEl(null)
      setScrimOpen(false)
    }
    return () => setInspectModeFlag(false)
  }, [isOn, onActiveChange])

  useEffect(() => {
    if (!isOn) return undefined
    const bump = () => setTick((v) => v + 1)
    const root = getInspectRoot()
    window.addEventListener('scroll', bump, true)
    window.addEventListener('resize', bump)
    const observer = new ResizeObserver(bump)
    if (root) observer.observe(root)
    return () => {
      window.removeEventListener('scroll', bump, true)
      window.removeEventListener('resize', bump)
      observer.disconnect()
    }
  }, [isOn])

  useEffect(() => {
    if (!isOn) return undefined
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      if (selectedEl) {
        event.stopImmediatePropagation()
        setSelectedEl(null)
        return
      }
      event.stopImmediatePropagation()
      setIsOn(false)
    }
    window.addEventListener('keydown', onKeyDown, true)
    return () => window.removeEventListener('keydown', onKeyDown, true)
  }, [isOn, selectedEl])

  /* Scrim open: inspect the modal only; clear any selection the scrim covers. */
  useEffect(() => {
    if (!isOn) return undefined
    const inModal = (el) => Boolean(el?.closest?.('[data-garden-id="modals.modal"]'))
    const check = () => {
      const open = Boolean(document.querySelector('[data-garden-id="modals.backdrop"]'))
      setScrimOpen(open)
      if (!open) return
      setSelectedEl((current) => (inModal(current) ? current : null))
      setHoverEl((current) => (inModal(current) ? current : null))
    }
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [isOn])

  /* Keep the panel on-screen if the window is resized after a drag. */
  useEffect(() => {
    if (!isOn) return undefined
    const onResize = () => {
      const height = panelRef.current?.offsetHeight || 240
      setPanelPos((pos) => clampPanelPosition(pos.left, pos.top, height))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isOn])

  const onPanelPointerDown = (event) => {
    if (event.button != null && event.button !== 0) return
    if (event.target.closest('button')) return
    const height = panelRef.current?.offsetHeight || 240
    dragRef.current = {
      offsetX: event.clientX - panelPos.left,
      offsetY: event.clientY - panelPos.top,
      height,
    }
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }

  const onPanelPointerMove = (event) => {
    const drag = dragRef.current
    if (!drag) return
    setPanelPos(
      clampPanelPosition(
        event.clientX - drag.offsetX,
        event.clientY - drag.offsetY,
        drag.height,
      ),
    )
  }

  const onPanelPointerUp = () => {
    dragRef.current = null
  }

  const catcherBox = useMemo(() => {
    void tick
    if (!isOn) return null
    return boxFromEl(getInspectRoot())
  }, [tick, isOn])

  const hoverBox = useMemo(() => {
    void tick
    return boxFromEl(hoverEl)
  }, [hoverEl, tick])

  const selectedBox = useMemo(() => {
    void tick
    return boxFromEl(selectedEl)
  }, [selectedEl, tick])

  const details = useMemo(() => {
    void tick
    return selectedEl ? readElementDetails(selectedEl) : null
  }, [selectedEl, tick])

  const marginMeasure = useMemo(() => {
    void tick
    if (!selectedEl) return { mode: 'margin', guides: [], bands: [], summary: [] }
    return measureMargins(selectedEl)
  }, [selectedEl, tick])

  const measure = useMemo(() => {
    void tick
    if (!selectedBox || !hoverBox || !hoverEl || hoverEl === selectedEl) {
      return { mode: 'gap', guides: [], summary: [] }
    }
    return measureBoxes(selectedBox, hoverBox)
  }, [selectedBox, hoverBox, hoverEl, selectedEl, tick])

  const measuringGap = measure.guides.length > 0
  const overlayGuides = measuringGap ? measure.guides : marginMeasure.guides
  const measureSummary = measuringGap
    ? measure.summary
    : marginMeasure.summary.filter((line) => line !== 'Margin 0')

  const onMove = useCallback((event) => {
    const root = getInspectRoot()
    const el = elementFromPointInRoot(event.clientX, event.clientY, root)
    setHoverEl(el)
  }, [])

  const onClick = useCallback((event) => {
    event.preventDefault()
    event.stopPropagation()

    if (event.metaKey || event.ctrlKey) {
      if (document.documentElement.dataset.commentMode === 'true') {
        requestCommentAt(event.clientX, event.clientY)
        return
      }
      /* Comment off: pass through to the prototype under the catcher. */
      const root = getInspectRoot()
      const beneath = document.elementsFromPoint(event.clientX, event.clientY).find((el) => {
        if (!(el instanceof Element)) return false
        if (el.closest('[data-inspect-ui="true"]')) return false
        if (el.closest('[data-garden-id="modals.modal"]')) return true
        if (el.closest('[data-garden-id="modals.backdrop"]')) return false
        return Boolean(root?.contains(el))
      })
      const clickable = beneath?.closest?.(
        'a[href], button, input, select, textarea, [role="button"], [role="combobox"]',
      )
      if (clickable) clickable.click()
      return
    }

    const root = getInspectRoot()
    const el = elementFromPointInRoot(event.clientX, event.clientY, root)
    setSelectedEl(el)
  }, [])

  /* Scrim open: inspect only the modal (hover + click → specs). Ignore covered page.
     Let PrototypeBar / inspect chrome clicks through so Exit inspect still works. */
  useEffect(() => {
    if (!isOn || !scrimOpen) return undefined
    const isInspectChrome = (target) =>
      Boolean(
        target?.closest?.(
          '[data-inspect-ui="true"], [data-inspect-console], [data-comment-ui="true"]',
        ),
      )
    const onMoveDoc = (event) => {
      if (isInspectChrome(event.target)) return
      onMove(event)
    }
    const onClickDoc = (event) => {
      if (isInspectChrome(event.target)) return
      event.preventDefault()
      event.stopPropagation()
      const el = elementFromPointInRoot(event.clientX, event.clientY, getInspectRoot())
      setSelectedEl(el)
    }
    document.addEventListener('mousemove', onMoveDoc, true)
    document.addEventListener('click', onClickDoc, true)
    return () => {
      document.removeEventListener('mousemove', onMoveDoc, true)
      document.removeEventListener('click', onClickDoc, true)
    }
  }, [isOn, scrimOpen, onMove])

  const copyDetails = async () => {
    if (!details?.copyText) return
    const measureBlock =
      measureSummary.length > 0 ? `\n\nMeasure:\n${measureSummary.join('\n')}` : ''
    try {
      await navigator.clipboard.writeText(`${details.copyText}${measureBlock}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  const toggle = (
    <ToggleButton
      type="button"
      $active={isOn}
      aria-pressed={isOn}
      onClick={() => setIsOn((v) => !v)}
    >
      {isOn ? 'Exit inspect' : 'Inspect'}
    </ToggleButton>
  )

  return (
    <>
      {toggleContainer ? createPortal(toggle, toggleContainer) : toggle}

      {isOn && catcherBox && (
        <Catcher
          data-inspect-ui="true"
          onMouseMove={scrimOpen ? undefined : onMove}
          onMouseLeave={scrimOpen ? undefined : () => setHoverEl(null)}
          onClick={scrimOpen ? undefined : onClick}
          style={{
            left: catcherBox.left,
            top: catcherBox.top,
            width: catcherBox.width,
            height: catcherBox.height,
            /* Yield to portaled modal + scrim so dialog controls stay clickable. */
            pointerEvents: scrimOpen ? 'none' : 'auto',
          }}
        />
      )}

      {isOn && hoverBox && hoverEl !== selectedEl && (
        <Highlight
          data-inspect-ui="true"
          style={{
            left: hoverBox.left,
            top: hoverBox.top,
            width: hoverBox.width,
            height: hoverBox.height,
          }}
        />
      )}

      {isOn && selectedBox && (
        <Highlight
          data-inspect-ui="true"
          style={{
            left: selectedBox.left,
            top: selectedBox.top,
            width: selectedBox.width,
            height: selectedBox.height,
            borderWidth: 2,
            background: 'rgba(1, 177, 92, 0.18)',
          }}
        />
      )}

      {isOn &&
        !measuringGap &&
        marginMeasure.bands.map((band) => (
          <MarginBand
            key={band.id}
            data-inspect-ui="true"
            style={{
              left: band.left,
              top: band.top,
              width: band.width,
              height: band.height,
            }}
          />
        ))}

      {isOn &&
        overlayGuides.map((g) => {
          const isH = g.axis === 'h'
          const length = isH ? Math.abs(g.x2 - g.x1) : Math.abs(g.y2 - g.y1)
          if (length < 1) return null
          return (
            <div key={g.id}>
              <MeasureLine
                data-inspect-ui="true"
                style={
                  isH
                    ? {
                        left: Math.min(g.x1, g.x2),
                        top: g.y1 - 0.5,
                        width: length,
                        height: 1,
                      }
                    : {
                        left: g.x1 - 0.5,
                        top: Math.min(g.y1, g.y2),
                        width: 1,
                        height: length,
                      }
                }
              />
              <MeasureLabel
                data-inspect-ui="true"
                style={{ left: g.labelX, top: g.labelY }}
              >
                {g.label}px
              </MeasureLabel>
            </div>
          )
        })}

      {isOn && details && (
        <Panel
          ref={panelRef}
          data-inspect-ui="true"
          role="dialog"
          aria-label="Inspect details"
          style={{ left: panelPos.left, top: panelPos.top }}
        >
          <PanelHeader
            onPointerDown={onPanelPointerDown}
            onPointerMove={onPanelPointerMove}
            onPointerUp={onPanelPointerUp}
            onPointerCancel={onPanelPointerUp}
            title="Drag to move"
          >
            <PanelTitle>{details.title}</PanelTitle>
            <CloseBtn type="button" aria-label="Clear selection" onClick={() => setSelectedEl(null)}>
              ×
            </CloseBtn>
          </PanelHeader>
          <PanelHint>
            Drag the header to move. Select an element to measure CSS margins; hover another for
            gaps or insets. Esc clears, then exits. ⌘/Ctrl+click places a comment when Comment is on.
          </PanelHint>
          {measureSummary.map((line) => (
            <Row key={line}>
              <RowLabel>Measure</RowLabel>
              <RowValue $measure>{line}</RowValue>
            </Row>
          ))}
          {details.rows.map((row) => (
            <Row key={`${row.label}:${row.value}`}>
              <RowLabel>{row.label}</RowLabel>
              <RowValue $token={row.kind === 'token'}>
                {row.kind === 'computed' && /^#|[rgb]/.test(row.value) && (
                  <Swatch $color={row.value} />
                )}
                {row.kind === 'token' && row.detail?.includes('#') && (
                  <Swatch $color={row.detail.replace(/^rendered\s+/, '')} />
                )}
                {row.value}
              </RowValue>
              {row.detail && <RowDetail>{row.detail}</RowDetail>}
            </Row>
          ))}
          <CopyButton type="button" onClick={copyDetails}>
            {copied ? 'Copied' : 'Copy values'}
          </CopyButton>
        </Panel>
      )}
    </>
  )
}
