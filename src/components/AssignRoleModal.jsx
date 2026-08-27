import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '@zendeskgarden/react-buttons'
import { teamMembers } from '../data/mockData'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(47, 57, 65, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`

const Dialog = styled.div`
  background: #fff;
  border-radius: 12px;
  width: 560px;
  max-width: calc(100vw - 48px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`

const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e9ebed;
`

const DialogTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  color: #68737d;
  padding: 4px;

  &:hover {
    color: #2f3941;
  }
`

const DialogBody = styled.div`
  padding: 24px;
`

const HelperText = styled.p`
  font-size: 14px;
  color: #2f3941;
  line-height: 1.5;
  margin: 0 0 24px;
`

const FieldLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
  margin-bottom: 8px;
`

const SelectWrap = styled.div`
  position: relative;
`

const SelectControl = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  min-height: 40px;
  padding: 0 40px 0 10px;
  border: 1px solid ${p => p.$open ? '#1f73b7' : '#d8dcde'};
  border-radius: 6px;
  cursor: text;
  box-shadow: ${p => p.$open ? '0 0 0 3px rgba(31, 115, 183, 0.15)' : 'none'};
`

const Chevron = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%) ${p => p.$open ? 'rotate(180deg)' : 'none'};
  pointer-events: none;
  display: inline-flex;
  color: #68737d;
`

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #e9ebed;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 600;
  color: #2f3941;
`

const TagRemove = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #68737d;
  font-size: 14px;
  line-height: 1;
  padding: 0;

  &:hover {
    color: #2f3941;
  }
`

const TextInput = styled.input`
  flex: 1;
  min-width: 60px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 0;
  height: 38px;
`

const Menu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #d8dcde;
  border-radius: 6px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  max-height: 280px;
  overflow-y: auto;
  z-index: 10;
`

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: ${p => p.$disabled ? 'default' : 'pointer'};
  background: ${p => p.$highlighted ? '#f8f9f9' : 'transparent'};
  border-left: 3px solid ${p => p.$highlighted ? '#1f73b7' : 'transparent'};

  &:hover {
    background: ${p => p.$disabled ? 'transparent' : '#f8f9f9'};
  }
`

const Check = styled.span`
  width: 16px;
  color: #1f73b7;
  font-size: 14px;
`

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const MemberName = styled.span`
  font-size: 15px;
  color: ${p => p.$disabled ? '#c2c8cc' : '#2f3941'};
`

const MemberSub = styled.span`
  font-size: 13px;
  color: ${p => p.$disabled ? '#c2c8cc' : '#68737d'};
`

const DialogFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
`

export default function AssignRoleModal({ onClose, onAssign }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState([])
  const [query, setQuery] = useState('')
  const wrapRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggle = (member) => {
    if (member.disabled) return
    setSelected(prev =>
      prev.some(m => m.id === member.id)
        ? prev.filter(m => m.id !== member.id)
        : [...prev, member]
    )
    setQuery('')
  }

  const remove = (id) => {
    setSelected(prev => prev.filter(m => m.id !== id))
  }

  // "Rusty Admin" is the current user — shown disabled like the screenshot
  const options = [
    ...teamMembers,
    { id: 'rusty-admin', name: 'Rusty Admin', role: "Admin (can't change your own role)", disabled: true },
  ]

  const q = query.trim().toLowerCase()
  const filtered = q
    ? options.filter(m =>
        m.name.toLowerCase().includes(q) ||
        (m.email || '').toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q)
      )
    : options

  return (
    <Overlay onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <Dialog>
        <DialogHeader>
          <DialogTitle>Assign role</DialogTitle>
          <CloseButton aria-label="Close" onClick={onClose}>✕</CloseButton>
        </DialogHeader>

        <DialogBody>
          <HelperText>
            Team members can only have one role at a time. When their role changes,
            their permissions change too.
          </HelperText>

          <FieldLabel>Select team members</FieldLabel>
          <SelectWrap ref={wrapRef}>
            <SelectControl $open={open} onClick={() => setOpen(true)}>
              {selected.map(m => (
                <Tag key={m.id}>
                  {m.name}
                  <TagRemove onClick={(e) => { e.stopPropagation(); remove(m.id) }}>✕</TagRemove>
                </Tag>
              ))}
              <TextInput
                value={query}
                placeholder={selected.length === 0 ? 'Search team members' : ''}
                onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
                onFocus={() => setOpen(true)}
              />
              <Chevron $open={open}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Chevron>
            </SelectControl>

            {open && (
              <Menu>
                {filtered.length === 0 && (
                  <MenuItem $disabled>
                    <MemberInfo>
                      <MemberSub $disabled>No results for "{query.trim()}"</MemberSub>
                    </MemberInfo>
                  </MenuItem>
                )}
                {filtered.map(member => {
                  const isSelected = selected.some(m => m.id === member.id)
                  return (
                    <MenuItem
                      key={member.id}
                      $disabled={member.disabled}
                      $highlighted={isSelected}
                      onClick={() => toggle(member)}
                    >
                      <Check>{isSelected ? '✓' : ''}</Check>
                      <MemberInfo>
                        <MemberName $disabled={member.disabled}>{member.name}</MemberName>
                        <MemberSub $disabled={member.disabled}>{member.role}</MemberSub>
                      </MemberInfo>
                    </MenuItem>
                  )
                })}
              </Menu>
            )}
          </SelectWrap>
        </DialogBody>

        <DialogFooter>
          <Button isBasic onClick={onClose}>Cancel</Button>
          <Button
            isPrimary
            onClick={() => onAssign(selected.map(m => m.id))}
          >
            Assign role
          </Button>
        </DialogFooter>
      </Dialog>
    </Overlay>
  )
}
