import React from 'react'
import {IconExplorer} from '../components/IconExplorer'
import icons from '../Icons'
import createSearch from '../createSearch'

const search = createSearch(icons)

export default () => (
  <div>
    <IconExplorer icons={icons} search={search} />
  </div>
)
