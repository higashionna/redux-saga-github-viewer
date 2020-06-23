import React, { useState } from 'react'
import styled from 'styled-components'
import IssueContainer from '../../containers/Issue'
import PullRequestTab from '../templates/PullRequest'
import TabHeader from '../organisms/TabHeader'

const tabs = [
  {
    key: 'issue',
    label: 'Issue'
  },
  {
    key: 'pull-requests',
    label: 'Pull Request'
  }
]

const Container = styled.div``
const Content = styled.div``

const Tabs = [
  {
    key: 'issue',
    // eslint-disable-next-line react/display-name
    component: (key) => <IssueContainer key={key} />
  },
  {
    key: 'pull-requests',
    // eslint-disable-next-line react/display-name
    component: (key) => <PullRequestTab key={key} />
  }
]

const Index = () => {
  const [selected, setSelected] = useState('issue')
  return (
    <Container>
      <Content>
        <TabHeader selected={selected} onChange={setSelected} tabs={tabs} />
        {Tabs.map((item) => (selected === item.key ? item.component(item.key) : <div key={item.key}></div>))}
      </Content>
    </Container>
  )
}

export default Index