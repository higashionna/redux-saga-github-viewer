import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/variable'
import DropDown from './DropDown'

const Container = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${colors.black};
  color: white;
`

const Logo = styled.div`
  a {
    color: white;
  }
`
const NavigationLinks = styled.ul`
  display: flex;
  width: 100%;
  padding: 0 32px;
  li {
    margin-right: 16px;
  }
  li > a {
    color: ${colors.white};
    font-size: 1.1rem;
  }
`

const Title = styled.h1`
  white-space: nowrap;
`

const Menu = styled.div`
  padding: 8px;
  font-size: 1.2rem;
`


const links = [
  { to: '/issue', label: 'Issue' },
  { to: '/Profile', label: 'Profile' },
  { to: '/pull-request', label: 'Pull Request' }
]

const menu = [
  { to: '/', label: 'Top' },
  { to: '/profile', label: 'Your Profile' },
  { to: '/issue', label: 'Issue' },
  { to: '/pull-request', label: 'Pull Request' }
]

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <Title>Github Viewer</Title>
        </Link>
      </Logo>
      <NavigationLinks>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          )
        })}
      </NavigationLinks>
      <Menu>
        <DropDown menu={menu} />
      </Menu>
    </Container>
  )
}

export default Header