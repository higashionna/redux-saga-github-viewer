import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Header from './components/organisms/Header'
import Index from './components/pages/Index'
import Profile from './containers/Profile'
import Issue from './components/pages/Issue'
import PullRequest from './components/pages/PullRequest'
import Modal from './containers/Modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Container = styled.div``

const Content = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`

const App = ({ fetchUser }) => {
    useEffect(() => {
        fetchUser()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <Router basename='/redux-github-viewer'>
            <Container>
                <GlobalStyle />
                <Header />
                <Content>
                    <Switch>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/issue">
                            <Issue />
                        </Route>
                        <Route path="/pull-request">
                            <PullRequest />
                        </Route>
                        <Route exact path="/">
                            <Index />
                        </Route>
                    </Switch>
                </Content>
                <Modal />
                <ToastContainer />
            </Container>
        </Router>
    )
}

export default App

