import icons from './manifest.json'
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

export default icons
