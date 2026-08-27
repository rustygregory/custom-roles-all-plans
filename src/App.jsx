import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { TopBar, MainNav } from 'zendesk-globalnav-template/chrome'
import styled from 'styled-components'
import { ThemeProvider } from './flora-theme/elements/ThemeProvider'
import { AppProvider, useAppContext } from './context/AppContext'
import PrototypeBar from './prototype-bar/PrototypeBar'
import CommentLayer from './comments/CommentLayer'
import AdminCenterNav from './components/AdminCenterNav'
import TeamMembersList from './components/TeamMembersList'
import TeamMemberDetail from './components/TeamMemberDetail'
import RolesList from './components/RolesList'
import RoleDetail from './components/RoleDetail'
import './App.css'

/* Percent, not vw/vh, so comment mode's #root squeeze narrows the shell too. */
const Shell = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  width: 100%;
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

const VERSIONS = [
  { id: 'v1', label: 'V1' },
  { id: 'v2', label: 'V2 Scaled access change' },
]

function Prototype() {
  const { version, setVersion } = useAppContext()
  const [commentSlot, setCommentSlot] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  /* Refresh = reset the prototype: app state already lives in memory only, so
     the one thing a reload otherwise keeps is the route in the URL hash. */
  useEffect(() => {
    const nav = performance.getEntriesByType('navigation')[0]
    if (nav?.type === 'reload' && location.pathname !== '/roles') {
      navigate('/roles', { replace: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Shell>
      {/* Our chrome, above the product's. */}
      <PrototypeBar
        title="Custom roles for all plans"
        meta="Aug 2026"
        versions={VERSIONS}
        versionId={version}
        onVersionChange={setVersion}
        commentSlotRef={setCommentSlot}
      />
      <PageContainer>
        <TopBar />
        <ContentRow>
          <MainNav currentProduct="admin_center" />
          <MiddleSection>
            <AdminCenterNav />
            {/* Comment mode pins to this wrapper only, so the prototype bar, top
                bar, nav rail and Admin Center nav stay clickable with it on. */}
            <WorkArea data-comment-root="true">
              <Routes>
                <Route path="/" element={<Navigate to="/roles" replace />} />
                <Route path="/team-members" element={<TeamMembersList />} />
                <Route path="/team-members/:id" element={<TeamMemberDetail />} />
                <Route path="/roles" element={<RolesList />} />
                <Route path="/roles/:id" element={<RoleDetail />} />
              </Routes>
            </WorkArea>
          </MiddleSection>
        </ContentRow>
      </PageContainer>

      {/* The route is the whole comment context: the same position is a
          different screen on /roles than on a role's detail page. */}
      <CommentLayer
        toggleContainer={commentSlot}
        context={{ version, route: location.pathname }}
        onRestoreContext={(saved) => {
          if (saved.route) navigate(saved.route)
        }}
      />
    </Shell>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <HashRouter>
          <Prototype />
        </HashRouter>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
