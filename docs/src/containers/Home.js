import React from 'react'
import { withSiteData } from 'react-static'
//
import logo from "../images/emotion.png"
//import * as JSSearch from 'js-search'
import Fuse from 'fuse.js'
import {
  faBrands,
  faRegular,
  faSolid,
  feather,
  material,
  octicons,
  ionIos,
  ionMd,
  simpleIcons,
  boxiconsRegular,
  boxiconsSolid
} from "../../../"
import icons from '../../../manifest.json'
import Badges from '../components/Badges'
import IconExplorer from '../components/IconExplorer'



icons.forEach(icon => {
  switch (icon.pack) {
    case "boxicons-solid":
      icon.icon = boxiconsSolid[icon.name]
      break

    case "boxicons-regular":
      icon.icon = boxiconsRegular[icon.name]
      break

    case "ion-ios":
      icon.icon = ionIos[icon.name]
      break
    case "ion-md":
      icon.icon = ionMd[icon.name]
      break
    case "simpleIcons":
      icon.icon = simpleIcons[icon.name]
      break
    case "fa-brands":
      icon.icon = faBrands[icon.name]
      break

    case "fa-regular":
      icon.icon = faRegular[icon.name]
      break

    case "fa-solid":
      icon.icon = faSolid[icon.name]
      break

    case "feather":
      icon.icon = feather[icon.name]
      break

    case "material":
      icon.icon = material[icon.name]
      break

    case "octicons":
      icon.icon = octicons[icon.name]
      break
    default:
  }
})

// const search = new JSSearch.Search('importPath')
// search.searchIndex = new JSSearch.UnorderedSearchIndex()
// search.indexStrategy = new JSSearch.AllSubstringsIndexStrategy()
// search.addIndex('name')
// search.addIndex('originalName')
// search.addDocuments(icons)

const fuseOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [
    "importPath",
    "name",
    'originalName'
]}

const search = new Fuse(icons, fuseOptions)

export default withSiteData(() => (
  <div>



    <div css={{ display: 'inline-block' }}>
    <img style={{width: 75, height: 75}}src={logo} alt="Emotion Avatar" />
                            </div>
                                <h1 style={{display:"inline-block"}}>Emotion Icons </h1>
                        <Badges />
                            <p>
                            This site and repo is an altered fork of <a href="https://github.com/jacobwgillespie/styled-icons">styled-icons</a>, using <a href="https://emotion.sh/">Emotion </a>
                            instead of <a href="https://www.styled-components.com/">Styled Components </a>

                            </p>

    <p>
      emotion-icons provides the
<a href="https://fontawesome.com/">Font Awesome (free)</a>, <a href="https://material.io/icons/">Material</a>, <a href="https://octicons.github.com/">Octicons</a> <a href="https://octicons.github.com/">Feather</a> ,
 <a href="https://octicons.github.com/">Ionicons</a> and <a href="https://octicons.github.com/">SimpleIcons</a> icons composed with <a href="https://emotion.sh//">Emotion </a>
    </p>

    <code style={{overflow: 'auto'}} className="demo">
      {`
import {Zap} from 'emotion-icons/octicons/Zap'
const RedZap = styled(Zap)\`
  color: red;
\`
const App = () => <RedZap />
    `.trim()}
    </code>

    <p>
      <a href="https://github.com/joshuarosenstein/emotion-icons">View documentation on GitHub</a>
    </p>

    <h2>Icon Explorer</h2>

<IconExplorer icons={icons} search={search} />
  </div>
)
)
