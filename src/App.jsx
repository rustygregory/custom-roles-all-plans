import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TopBar, MainNav } from 'zendesk-globalnav-template/chrome'
import styled from 'styled-components'
import { ThemeProvider } from './flora-theme/elements/ThemeProvider'
import { AppProvider } from './context/AppContext'
import AdminCenterNav from './components/AdminCenterNav'
import TeamMembersList from './components/TeamMembersList'
import TeamMemberDetail from './components/TeamMemberDetail'
import RolesList from './components/RolesList'
import RoleDetail from './components/RoleDetail'
import './App.css'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #f8f9f9;
  overflow: hidden;
`

const ContentRow = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
  width: 100%;
  overflow: hidden;
`

const MiddleSection = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`

const WorkArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
  background: #fff;
  border-top-left-radius: 12px;
`

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <HashRouter>
          <PageContainer>
            <TopBar />
            <ContentRow>
              <MainNav currentProduct="admin_center" />
              <MiddleSection>
                <AdminCenterNav />
                <WorkArea>
                  <Routes>
                    <Route path="/" element={<Navigate to="/team-members" replace />} />
                    <Route path="/team-members" element={<TeamMembersList />} />
                    <Route path="/team-members/:id" element={<TeamMemberDetail />} />
                    <Route path="/roles" element={<RolesList />} />
                    <Route path="/roles/:id" element={<RoleDetail />} />
                  </Routes>
                </WorkArea>
              </MiddleSection>
            </ContentRow>
          </PageContainer>
        </HashRouter>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
