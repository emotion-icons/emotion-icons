import React from 'react'
import {IconExplorer} from './components/IconExplorer'
import icons from './Icons'
import createSearch from './createSearch'

const octi = icons.filter(icon => icon.pack === 'octicons')
const search = createSearch(octi)

export default () => (
  <div>
    <IconExplorer icons={octi} search={search} />
  </div>
)
