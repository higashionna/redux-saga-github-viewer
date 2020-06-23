import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 16px;
  margin-top: 128px;

  h1 {
    text-align: center;
  }
`

const PullRequest = () => {
  return (
    <Container>
      <h1>PullRequest</h1>
    </Container>
  )
}

export default PullRequest
