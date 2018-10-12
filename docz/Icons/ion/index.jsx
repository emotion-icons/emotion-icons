import React from 'react'
import {IconExplorer} from '../components/IconExplorer'
import icons from '../Icons'
import createSearch from '../createSearch'

const filteredIcons = icons.filter(icon => ['ion-ios', 'ion-md'].includes(icon.pack))
//icon => icon.pack === 'fa-solid' || icon.pack === 'fa-brand' || icon.pack === 'fa-regular',

const search = createSearch(filteredIcons)

export default () => (
  <div>
    <IconExplorer icons={filteredIcons} search={search} />
  </div>
)
