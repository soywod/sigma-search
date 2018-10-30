import React from 'react'
import {Link} from 'react-router-dom'

import Container from '../container/Container'

// @ts-ignore
import styles from './Nav.styl'

// @ts-ignore
import logo from './images/logo.jpeg'

// @ts-ignore
import logo_sm from './images/logo-sm.jpeg'

// ----------------------------------------------------------------- # Private #
// ------------------------------------------------------------------ # Public #

export default function Nav() {
  return (
    <header className={styles.container}>
      <Container tag="nav" className={styles.nav}>
        <Link className={styles.link} to="">
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>

        <Link className={styles.link} to="">
          <img className={styles.logo} src={logo_sm} alt="Logo" />
        </Link>

        <Link className={styles.link} to="about">About us</Link>
        <Link className={styles.link} to="what-we-do">What we do</Link>
        <Link className={styles.link} to="contact">Contact us</Link>
      </Container>
    </header>
  )
}
