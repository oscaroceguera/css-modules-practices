import React from 'react'
import {
  CompositionComponentHero,
  h1One,
  h1Two
} from './composition.css'

const CompositionComponent = () => (
  <div className={CompositionComponentHero}>
    <h1 className={h1One}>Holas carolas</h1>
    <h1 className={h1Two}>Holas carolas</h1>
  </div>
)

export default CompositionComponent
