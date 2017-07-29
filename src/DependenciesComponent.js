import React from 'react'
import {
  hero,
  one,
  two
} from './DependenciesComponent.css'

const DependenciesComponent = () => (
  <div className={hero}>
    <h1 className={one}>Holas carolas</h1>
    <h1 className={two}>Holas carolas</h1>
  </div>
)

export default DependenciesComponent
