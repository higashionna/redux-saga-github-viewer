import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/variable'

const Container = styled.div``

const MenuIcon = styled.i`
  cursor: pointer;
`

const DropDownMenu = styled.div`
  position: absolute;
  margin-top: 16px;
  right: 16px;
  width: 200px;
  border-radius: 2px;
  padding: 8px 0px;
  background: white;
  color: ${colors.black};
  box-shadow: 1px 1px 4px 1px #33333326;
`

const MenuItem = styled.li`
  padding: 0;

  a {
    display: block;
    color: ${colors.black};
    padding: 8px;
    font-size: 1rem;
  }

  a:hover {
    background: ${colors.link};
    color: white;
  }
`

const DropDown = ({ menu }) => {
    const [show, setShow] = useState(false)

    const onHide = useCallback(() => {
        setTimeout(() => setShow(false))
        const root = document.querySelector('#root')
        root.removeEventListener('click', onHide)
    }, [])

    const onShow = useCallback(() => {
        setShow(true)
        const root = document.querySelector('#root')
        root.addEventListener('click', onHide)
    }, [onHide])

    return (
        <Container>
            <MenuIcon className="fa fa-bars" onClick={onShow} />
            {show && (
                <DropDownMenu>
                    <ul>
                        {menu.map(({ to, label }) => {
                            return (
                                <MenuItem key={to}>
                                    <Link to={to}>{label}</Link>
                                </MenuItem>
                            )
                        })}
                    </ul>
                </DropDownMenu>
            )}
        </Container>
    )
}

DropDown.propTypes = {
    menu: PropTypes.array
}

export default DropDown
