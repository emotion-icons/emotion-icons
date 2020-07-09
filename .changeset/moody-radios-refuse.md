---
'@emotion-icons/boxicons-logos': major
'@emotion-icons/boxicons-regular': major
'@emotion-icons/boxicons-solid': major
'@emotion-icons/crypto': major
'@emotion-icons/emotion-icon': major
'@emotion-icons/entypo': major
'@emotion-icons/entypo-social': major
'@emotion-icons/evaicons-outline': major
'@emotion-icons/evaicons-solid': major
'@emotion-icons/evil': major
'@emotion-icons/fa-brands': major
'@emotion-icons/fa-regular': major
'@emotion-icons/fa-solid': major
'@emotion-icons/feather': major
'@emotion-icons/foundation': major
'@emotion-icons/heroicons-outline': major
'@emotion-icons/heroicons-solid': major
'@emotion-icons/icomoon': major
'@emotion-icons/ionicons-outline': major
'@emotion-icons/ionicons-sharp': major
'@emotion-icons/ionicons-solid': major
'@emotion-icons/material': major
'@emotion-icons/material-outlined': major
'@emotion-icons/material-rounded': major
'@emotion-icons/material-sharp': major
'@emotion-icons/material-twotone': major
'@emotion-icons/octicons': major
'@emotion-icons/open-iconic': major
'@emotion-icons/remix-fill': major
'@emotion-icons/remix-line': major
'@emotion-icons/simple-icons': major
'@emotion-icons/typicons': major
'@emotion-icons/zondicons': major
'emotion-icons': major
'@emotion-icons/storybook': major
'@emotion-icons/pack-builder': major
'@emotion-icons/website': major
---

This is a rewrite of Emotion Icons based on the [Styled Icons](https://github.com/styled-icons) build tooling. This library packages all the icons available from [@svg-icons](https://github.com/svg-icons/svg-icons) into React components using [Emotion](https://emotion.sh) (v10).

### New Features

* More icon packs (almost 17,000 icons in total)
* Individual packages for each icon pack (`@emotion-icons/octicons`, `@emotion-icons/material`, etc.)
* New website: [emotion-icons.dev](https://emotion-icons.dev) ✨

### Breaking Changes

#### Individual icon exports are not available from the `emotion-icons` package

Before:

```javascript
import {Alert} from 'emotion-icons/material/Alert'
```

After (one of these):

```javascript
import {Alert} from 'emotion-icons/material'

// Or install the icon pack individually
import {Alert} from '@emotion-icons/material'
import {Alert} from '@emotion-icons/material/Alert'
```

#### Renamed icon packs

The Ionicons packages `emotion-icons/ion-md` and `emotion-icons/ion-ios` have been replaced by:

* `@emotion-icons/ionicons-outline`
* `@emotion-icons/ionicons-sharp`
* `@emotion-icons/ionicons-solid`

The Simple Icons previously at `emotion-icons/simpleIcons` are now available as `@emotion-icons/simple-icons`.

#### Revamped internals

If you previously depended on any internal files inside `emotion-icons`, such as `createIcon.js`, V2 has an entirely different foundation for generating packages, so any non-icon files won't be accessible anymore.
