import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Breadcrumbs from './Breadcrumbs'
import RolesAndAccessTab from './RolesAndAccessTab'
import { teamMembers } from '../data/mockData'

const Container = styled.div`
  padding: 24px 32px;
  overflow-y: auto;
  flex: 1;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2f3941;
  margin: 0;
`

const ViewInSupportLink = styled.a`
  font-size: 13px;
  color: #1f73b7;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
  }
`

const TabContainer = styled.div`
  margin-bottom: 24px;
`

const TabList = styled.div`
  display: flex;
  border-bottom: 2px solid #e9ebed;
  margin-bottom: 0;
`

const Tab = styled.button`
  background: none;
  border: none;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: ${p => p.$active ? '600' : '400'};
  color: ${p => p.$active ? '#2f3941' : '#68737d'};
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${p => p.$active ? '#1f73b7' : 'transparent'};
  }

  &:hover {
    color: #2f3941;
  }
`

const TabPanel = styled.div`
  padding-top: 24px;
`

const AccountPlaceholder = styled.div`
  padding: 32px;
  background: #f8f9f9;
  border: 1px solid #e9ebed;
  border-radius: 4px;
  color: #68737d;
  text-align: center;
  font-size: 14px;
`


export default function TeamMemberDetail() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('roles')
  const member = teamMembers.find(m => m.id === id) || teamMembers[0]

  return (
    <Container>
      <Breadcrumbs items={[
        { label: 'People', path: '/team-members' },
        { label: 'Team', path: '/team-members' },
        { label: 'Team members', path: '/team-members' },
        { label: member.name },
      ]} />

      <Header>
        <Title>{member.name}</Title>
        <ViewInSupportLink href="#">
          View in Support ↗
        </ViewInSupportLink>
      </Header>

      <TabContainer>
        <TabList>
          <Tab $active={activeTab === 'account'} onClick={() => setActiveTab('account')}>
            Account
          </Tab>
          <Tab $active={activeTab === 'roles'} onClick={() => setActiveTab('roles')}>
            Roles and access
          </Tab>
        </TabList>
      </TabContainer>

      {activeTab === 'account' && (
        <TabPanel>
          <AccountPlaceholder>
            Account settings content would appear here.
          </AccountPlaceholder>
        </TabPanel>
      )}

      {activeTab === 'roles' && (
        <TabPanel>
          <RolesAndAccessTab memberId={member.id} />
        </TabPanel>
      )}

      <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
        <button style={{ padding: '8px 16px', border: '1px solid #d8dcde', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontSize: '14px' }}>
          Cancel
        </button>
        <button style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', background: '#1f73b7', color: '#fff', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
          Save
        </button>
      </div>
    </Container>
  )
}
