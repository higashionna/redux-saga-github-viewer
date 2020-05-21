import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

import { GlobalStyle } from './styles'
import styled from 'styled-components'

import Header from './components/organisms/Header'

import Index from './components/pages/Index'
import Profile from './containers/Profile'

import Issue from './containers/Issue'
import PullRequest from './components/pages/PullRequest'

import { devToolsEnhancer } from 'redux-devtools-extension'
import Modal from './containers/Modal'


const Container = styled.div``

const Content = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`
const store = createStore(rootReducer, devToolsEnhancer())

const App = () => (
    <Provider store={store}>
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
            </Container>
        </Router>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
