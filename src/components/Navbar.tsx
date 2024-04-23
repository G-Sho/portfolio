import React from 'react'
// 追記
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}
      >
        <Toolbar>
        <AnchorLink href='#career' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button>
              CAREER
            </Button>
          </AnchorLink>
          <AnchorLink href='#about' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button>
              ABOUT
            </Button>
          </AnchorLink>
          <AnchorLink href='#studies' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              STUDIES
            </Button>
          </AnchorLink>
          <AnchorLink href='#achievements' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              ACHIEVEMENTS
            </Button>
          </AnchorLink>
          <AnchorLink href='#contact' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
            CONTACT
            </Button>
          </AnchorLink>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
