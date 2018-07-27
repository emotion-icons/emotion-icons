import React from 'react'
import {
  faBrands,
  faRegular,
  faSolid,
  feather,
  material,
  octicons,
  ionIos,
  ionMd,
  boxiconsRegular,
  boxiconsSolid,
  simpleIcons,
} from 'emotion-icons'

import Fuse from 'fuse.js'
import icons from 'emotion-icons/manifest.json'
import { IconExplorer } from './components/IconExplorer'


icons.forEach(icon => {
  switch (icon.pack) {
    case 'boxicons-regular':
      icon.icon = boxiconsRegular[icon.name]
      break
    case 'boxicons-solid':
      icon.icon = boxiconsSolid[icon.name]
      break
    case 'ion-ios':
      icon.icon = ionIos[icon.name]
      break
    case 'ion-md':
      icon.icon = ionMd[icon.name]
      break
    case 'simpleIcons':
      icon.icon = simpleIcons[icon.name]
      break
    case 'fa-brands':
      icon.icon = faBrands[icon.name]
      break

    case 'fa-regular':
      icon.icon = faRegular[icon.name]
      break

    case 'fa-solid':
      icon.icon = faSolid[icon.name]
      break

    case 'feather':
      icon.icon = feather[icon.name]
      break

    case 'material':
      icon.icon = material[icon.name]
      break

    case 'octicons':
      icon.icon = octicons[icon.name]
      break
    default:
  }
})
const fuseOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: ['importPath', 'name', 'originalName'],
}

const search = new Fuse(icons, fuseOptions)
export default () => (
  <div>
    <div css={{ display: 'inline-block' }}>
      <img
        style={{ width: 75, height: 75 }}
        src="https://uploads.codesandbox.io/uploads/user/654fb2c0-8e71-49fb-b4d2-18b945fec988/ihyz-emotion.png"
        alt="Emotion Avatar"
      />
    </div>
    <h1 style={{ display: 'inline-block' }}>Emotion Icons </h1>

    <p>
      This site and repo is an altered fork of{' '}
      <a href="https://github.com/jacobwgillespie/styled-icons">styled-icons</a>,
      using <a href="https://emotion.sh/">Emotion </a>
      instead of{' '}
      <a href="https://www.styled-components.com/">Styled Components </a>
    </p>

    <p>
      Import icons from the{' '}
      <a href="https://fontawesome.com/">Font Awesome (free)</a>,{' '}
      <a href="https://simpleicons.org/">SimpleIcons</a>, ,
      <a href="https://ionicons.com/">IonIcons</a>,{' '}
      <a href="https://material.io/icons/">Material</a>, or{' '}
      <a href="https://octicons.github.com/">Octicons</a> icon packs as{' '}
      <a href="https://emotion.sh//">Emotion </a>
    </p>

    <code style={{ overflow: 'auto' }} className="demo">
      {`
import {Zap} from 'emotion-icons/octicons/Zap'

const RedZap = styled(Zap)\`
  color: red;
\`

const App = () => <RedZap />
    `.trim()}
    </code>

    <p>
      <a href="https://github.com/joshuarosenstein/emotion-icons">
        View documentation on GitHub
      </a>
    </p>

    <h2>Icon Explorer</h2>

    <IconExplorer icons={icons} search={search} />
  </div>
)
