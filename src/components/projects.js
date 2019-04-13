import React from 'react'
import Project from './project'

import PROJECTS from '../projects.json'

export default () => (
  <section className="Projects gridded">
    { PROJECTS.map(data => <Project {...data} />) }
  </section>
)