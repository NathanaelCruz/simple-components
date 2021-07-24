import React, { Fragment } from 'react'
import { bool, func } from 'prop-types'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Logo } from '../../images/index'
import Navigation from '../Navigation'
import * as S from './style'

const Header = ({open, setOpen}) => {
    return(
        <Fragment>
            <S.ButtonHamburguer open={open} onClick={() => setOpen(!open)}>
                { open ? <CloseIcon/> : <MenuIcon/> }
            </S.ButtonHamburguer>
            <S.Header open={open}>
                <Link to="/">
                    <Logo/>
                </Link>
                <Navigation/>
            </S.Header>
        </Fragment>
    )
}
S.ButtonHamburguer.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  }
export default Header