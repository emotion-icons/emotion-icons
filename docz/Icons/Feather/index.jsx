import React from 'react'
import {IconExplorer} from '../components/IconExplorer'
import icons from '../Icons'
import createSearch from '../createSearch'

const filteredIcons = icons.filter(icon => icon.pack === 'feather')
const search = createSearch(filteredIcons)

export default () => (
  <div>
    <IconExplorer icons={filteredIcons} search={search} />
  </div>
)
