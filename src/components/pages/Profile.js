import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../styles/variable'

const Container = styled.div`
  padding: 16px;
  margin: auto;
`

const borderStyle = `1px solid ${colors.border}`

const Title = styled.h1``

const Content = styled.div`
  margin: 32px 0;
  display: flex;
  border-radius: 6px;
  border: ${borderStyle};
`

const Left = styled.div`
  padding: 16px;
  width: 50%;
`
const Right = styled.div`
  padding: 16px;
  width: 50%;
`

const Group = styled.div``

const Label = styled.label`
  color: ${colors.weakBlack};
`

const Field = styled.p`
  padding: 16px 0;
  font-size: 1.2rem;
`

const Profile = ({ user, fetchUser }) => {
  useEffect(() => {
    fetchUser()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  if (!user) {
    return <></>
  }
  return (
    <Container>
      <Title>Profile</Title>
      <Content>
        <Left>
          <Group>
            <Label>プロフィール</Label>
            <Field>
              <img src={user.avatarUrl} alt="プロフィール" />
            </Field>
          </Group>
        </Left>
        <Right>
          <Group>
            <Label>ユーザ名</Label>
            <Field>{user.login}</Field>
          </Group>
          <Group>
            <Label>アカウントURL</Label>
            <Field><a href={user.htmlUrl}>{user.htmlUrl}</a></Field>
          </Group>
          <Group>
            <Label>フォロー数</Label>
            <Field>{user.following}</Field>
          </Group>
          <Group>
            <Label>フォロワー数</Label>
            <Field>{user.followers}</Field>
          </Group>
          <Group>
            <Label>パブリックレポジトリ数</Label>
            <Field>{user.publicRepos}</Field>
          </Group>
          <Group>
            <Label>プライベートレポジトリ数</Label>
            <Field>{user.ownedPrivateRepos}</Field>
          </Group>
        </Right>
      </Content>
    </Container>
  )
}

Profile.propTypes = {
  user: PropTypes.object,
  fetchUser: PropTypes.func
}

export default Profile
