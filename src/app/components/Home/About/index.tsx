import React from 'react'
import {Link} from 'react-router-dom'

import Container from '../../Container'
import Section from '../../Section'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import background from './images/about.jpeg'

// ------------------------------------------------------------------ # Public #

export default function About() {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>About us</h2>

            <p>
              We are actively extending our international presence, a process which is
              limited only by the challenge of finding firms which share our demanding
              professianal standards.
            </p>

            <ul>
              <li>&gt; Our Values</li>
              <li>&gt; Our International Capability</li>
            </ul>

            <Link to="/about">&gt; See more</Link>
          </div>

          <div className={styles.image}>
            <img src={background} alt="" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
