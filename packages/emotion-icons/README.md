<h1 align="center">👩‍🎤 emotion-icons</h1>

<p align="center"><a href="https://github.com/emotion-icons/emotion-icons/actions"><img src="https://github.com/emotion-icons/emotion-icons/workflows/CI/badge.svg" alt="Build Status" /></a>
<a href="https://www.npmjs.com/package/emotion-icons"><img src="https://badgen.net/npm/dm/emotion-icons" alt="npm" /></a>
<a href="https://www.npmjs.com/package/emotion-icons"><img src="https://badgen.net/npm/v/emotion-icons" alt="npm" /></a>
<a href="https://emotion.sh"><img src="https://badgen.net/badge/built%20with/emotion/f090d5" alt="Built with Emotion" /></a>
<img src="https://badgen.net/badge/powered%20by/typescript/blue" alt="Powered by TypeScript" /> <a href="https://github.com/sponsors/jacobwgillespie"><img src="https://badgen.net/badge/icon/sponsors/red?label&color=d73a49&icon=github" alt="Sponsor" /></a></p>

<p align="center"><a href="https://vercel.com/?utm_source=emotion-icons"><img height="32" src="https://emotion-icons.dev/powered-by-vercel.svg" alt="Powered by Vercel" /></a></p>

`emotion-icons` provides over 20,000 icons from the following icon packs as [Emotion React Components](https://emotion.sh/), with full support for TypeScript types and tree-shaking / ES modules.

**[➡️ View the Icon Explorer](https://emotion-icons.dev)**

- [Bootstrap](https://icons.getbootstrap.com/)
- [Boxicons](https://boxicons.com/)
- [Crypto Icons](http://cryptoicons.co)
- [Entypo](http://www.entypo.com/)
- [Eva Icons](https://akveo.github.io/eva-icons/)
- [Evil Icons](https://evil-icons.io)
- [Feather](https://feathericons.com/)
- [FluentUI System](https://github.com/microsoft/fluentui-system-icons)
- [Font Awesome](https://fontawesome.com/)
- [Foundation](https://zurb.com/playground/foundation-icon-fonts-3)
- [Heroicons](https://github.com/refactoringui/heroicons)
- [Icomoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)
- [Material Design](https://material.io/icons/)
- [Octicons](https://octicons.github.com/)
- [Open Iconic](https://www.npmjs.com/package/open-iconic)
- [Remix](https://remixicon.com/)
- [Simple Icons](https://github.com/simple-icons/simple-icons)
- [Typicons](https://www.s-ings.com/typicons/)
- [Zondicons](https://www.zondicons.com/)

---

<p align="center"><strong>Do you use Styled Components?</strong></p>

<p align="center">Check out <a href="https://github.com/styled-icons/styled-icons">💅 Styled Icons</a></p>

<p align="center"><strong>Would you like plain SVGs?</strong></p>

<p align="center">Check out <a href="https://github.com/svg-icons/svg-icons">🎛️ SVG Icons</a></p>

---

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Props](#props)
  - [Icon Dimensions](#icon-dimensions)
  - [Emotion](#emotion)
  - [Base Icon Styles](#base-icon-styles)
  - [Accessibility](#accessibility)
  - [Tree Shaking](#tree-shaking)
  - [TypeScript](#typescript)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install all the icon packs simultaneously:

```
yarn add emotion-icons
```

or

```
npm install emotion-icons --save
```

Alternatively you can install only the icon packs you need:

```
yarn add @emotion-icons/bootstrap
yarn add @emotion-icons/boxicons-logos
yarn add @emotion-icons/boxicons-regular
yarn add @emotion-icons/boxicons-solid
yarn add @emotion-icons/crypto
yarn add @emotion-icons/entypo
yarn add @emotion-icons/entypo-social
yarn add @emotion-icons/evaicons-outline
yarn add @emotion-icons/evaicons-solid
yarn add @emotion-icons/evil
yarn add @emotion-icons/fa-brands
yarn add @emotion-icons/fa-regular
yarn add @emotion-icons/fa-solid
yarn add @emotion-icons/feather
yarn add @emotion-icons/fluentui-system-filled
yarn add @emotion-icons/fluentui-system-regular
yarn add @emotion-icons/foundation
yarn add @emotion-icons/heroicons-outline
yarn add @emotion-icons/heroicons-solid
yarn add @emotion-icons/icomoon
yarn add @emotion-icons/ionicons-sharp
yarn add @emotion-icons/ionicons-solid
yarn add @emotion-icons/ionicons-outline
yarn add @emotion-icons/material
yarn add @emotion-icons/material-outlined
yarn add @emotion-icons/material-rounded
yarn add @emotion-icons/material-twotone
yarn add @emotion-icons/material-sharp
yarn add @emotion-icons/octicons
yarn add @emotion-icons/open-iconic
yarn add @emotion-icons/remix-fill
yarn add @emotion-icons/remix-line
yarn add @emotion-icons/simple-icons
yarn add @emotion-icons/typicons
yarn add @emotion-icons/zondicons
```

Finally, you will need to have installed a version of `@emotion/react` at least version 11.0.0 or newer, as `emotion-icons` depends on `@emotion/react` as a peer dependency:

```
yarn add @emotion/react
```

## Usage

All icons are available for preview at the [Icon Explorer](https://emotion-icons.dev).

The entire icon packs are available via the main import and sub-imports:

```javascript
import {material, octicons} from 'emotion-icons'

import * as bootstrap from '@emotion-icons/bootstrap'
import * as boxiconsLogos from '@emotion-icons/boxicons-logos'
import * as boxiconsRegular from '@emotion-icons/boxicons-regular'
import * as boxiconsSolid from '@emotion-icons/boxicons-solid'
import * as crypto from '@emotion-icons/crypto'
import * as entypo from '@emotion-icons/entypo'
import * as entypoSocial from '@emotion-icons/entypo-social'
import * as evaiconsOutline from '@emotion-icons/evaicons-outline'
import * as evaiconsSolid from '@emotion-icons/evaicons-solid'
import * as evil from '@emotion-icons/evil'
import * as faBrands from '@emotion-icons/fa-brands'
import * as faRegular from '@emotion-icons/fa-regular'
import * as faSolid from '@emotion-icons/fa-solid'
import * as feather from '@emotion-icons/feather'
import * as fluentUISystemFilled from '@emotion-icons/fluentui-system-filled'
import * as fluentUISystemRegular from '@emotion-icons/fluentui-system-regular'
import * as foundation from '@emotion-icons/foundation'
import * as heroiconsOutline from '@emotion-icons/heroicons-outline'
import * as heroiconsSolid from '@emotion-icons/heroicons-solid'
import * as icomoon from '@emotion-icons/icomoon'
import * as ioniconsSharp from '@emotion-icons/ionicons-sharp'
import * as ioniconsSolid from '@emotion-icons/ionicons-solid'
import * as ioniconsOutline from '@emotion-icons/ionicons-outline'
import * as material from '@emotion-icons/material'
import * as materialOutlined from '@emotion-icons/material-outlined'
import * as materialRounded from '@emotion-icons/material-rounded'
import * as materialSharp from '@emotion-icons/material-sharp'
import * as materialTwoTone from '@emotion-icons/material-twotone'
import * as octicons from '@emotion-icons/octicons'
import * as openIconic from '@emotion-icons/open-iconic'
import * as remixFill from '@emotion-icons/remix-fill'
import * as remixLine from '@emotion-icons/remix-line'
import * as simpleIcons from '@emotion-icons/simple-icons'
import * as typicons from '@emotion-icons/typicons'
import * as zondicons from '@emotion-icons/zondicons'
```

You can also import just the icons you need:

```javascript
import React, {Fragment} from 'react'
import {AccountCircle, Lock} from '@emotion-icons/material'

const App = () => (
  <Fragment>
    <AccountCircle />
    <Lock />
  </Fragment>
)
```

For the individual icon pack packages (`@emotion-icons/PACK`), the icons are also importable individually - this is not possible with the uber-`emotion-icons` package containing all the packs:

```javascript
import React from 'react'
import {Lock} from '@emotion-icons/material/Lock'

const App = () => <Lock />
```

### Props

Emotion Icons accept all the valid props of an `<svg />` element, in addition to the following custom props:

| Prop    | Required | Type           | Description                                                                                                                                   |
| ------- | -------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `size`  | optional | string, number | This is a convenience for setting both `width` and `height` to the same value                                                                 |
| `title` | optional | string         | This sets the icon title and enables the standalone icon accessibility mode. See [accessibility](#accessibility) below for additional details |

**Example**

```javascript
import React from 'react'
import {Lock} from '@emotion-icons/material'

const App = () => <Lock size="48" title="Unlock account" />
```

### Icon Dimensions

Some icons natively have non-square dimensions - original dimensions are exported from the individual icon exports:

```javascript
import {LogoGithub, LogoGithubDimensions} from '@emotion-icons/octicons/LogoGithub'

const App = () => <LogoGithub />

console.log(LogoGithubDimension) // {height: 16, width: 45}
```

Dimension exports are not available on the icon pack or index exports:

```javascript
import * as octicons from '@emotion-icons/octicons'
import {octicons} from 'emotion-icons'

// octicons contains only icon exports
```

### Emotion

All icons are exported as [Emotion React Components](https://emotion.sh/), which means it is possible to utilize the Emotion API:

```javascript
import styled from '@emotion/styled'
import {Lock} from '@emotion-icons/material'

export const BlueLock = () => <Lock css="color: blue" />

export const RedLock = styled(Lock)`
  color: red;

  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
`
```

### Base Icon Styles

If you wish to style all icons at once, you can create a wrapper styled component that imparts a particular style to all icons contained within the wrapper by targeting the `EmotionIconBase` component:

```javascript
import styled from '@emotion/styled'
import {EmotionIconBase} from '@emotion-icons/emotion-icon'

export const IconStyleWrapper = styled.div`
  ${EmotionIconBase} {
    color: red;
    /* icon styles go here */
  }
`
```

### Accessibility

Emotion Icons have two different built-in "modes" for accessibility purposes. By default, icons are considered decorative, meaning the icon is just visual sugar and the surrounding content is sufficient for conveying meaning. This will set the `aria-hidden` attribute on the resulting HTML to hide the icon from screen readers.

```javascript
// this icon
<Lock />

// will result in
<svg aria-hidden="true">...</svg>
```

Alternatively the icon could be used in standalone mode, meaning the icon itself should convey meaning. This mode is enabled by setting a `title` prop - this is the text that will be read by a screen reader. This results in `role` being set to `img` and the addition of a `<title>` element.

```javascript
// this icon
<Lock title="Lock account" />

// will result in
<svg role="img"><title>Lock account</title> ...</svg>
```

Since Style Icons accept all `<svg>` element attributes as props, you are free to override these `aria-*` attributes if you have a more complex use-case.

As this library provides direct access to the `<svg>` element, you may wish to further wrap the icon for additional semantic meaning. For example, for a loading spinner:

```javascript
import styled from '@emotion/styled'
import {Spinner} from '@emotion-icons/fa-solid/Spinner'

const VisuallyHidden = styled.span`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding-top: 0 !important;
  padding-right: 0 !important;
  padding-bottom: 0 !important;
  padding-left: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`

<span title="Loading posts..." role="alert" aria-live="assertive">
  <Spinner />
  <VisuallyHidden>Loading posts...</VisuallyHidden>
</span>
```

### Tree Shaking

Emotion Icons supports automatic tree-shaking via the `package.json` `module` property from any of the import paths (icon pack, individual icon, etc.). Tree shaking has been tested with Create React App v2, Next.js, Rollup, and Webpack v4.

### TypeScript

The icons of `emotion-icons` are built using TypeScript and export type definitions. If you need a type to reference any styled icon, there is a `EmotionIcon` type exported from the `@emotion-icons/emotion-icon` package (recommended) or the `emotion-icons/types` import:

```typescript
import styled from '@emotion/styled'

// Recommended:
import {EmotionIcon} from '@emotion-icons/emotion-icon'
// Alternatively:
import {EmotionIcon} from 'emotion-icons/types'

interface Props {
  icon: EmotionIcon
}
```

**NOTE:** you should ensure that the version of `@types/react` in your project is at least `16.8.14` or greater. That version of the React types package added support for ARIA attributes on SVG elements, which Emotion Icons uses.

If you have any ideas for improvements to the TypeScript typing, please open an issue or PR!

## Contributing

Contributions are welcome! Feel free to open an issue or a pull request and participate at whatever level you would like.

## License

The MIT License - see `LICENSE`.

The Bootstrap icons are licensed under the [MIT License](https://github.com/twbs/icons/blob/main/LICENSE.md).

The Boxicons are licensed under the [CC BY 4.0 License](https://boxicons.com/get-started#license).

The Cryptocurrency icons are licensed under the [CC0 1.0 Universal License](https://github.com/atomiclabs/cryptocurrency-icons/blob/master/LICENSE.md).

The Entypo icons are licensed under the [CC BY-SA 4.0 License](http://www.entypo.com/).

The Eva Icons are licensed under the [MIT License](https://github.com/akveo/eva-icons/blob/master/LICENSE.txt).

The Evil Icons are licensed under the [MIT License](https://github.com/evil-icons/evil-icons/blob/master/LICENSE.txt).

The Font Awesome icons are licensed under the [CC BY 4.0 License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt).

The Feather icons are licensed under the [MIT License](https://github.com/feathericons/feather/blob/master/LICENSE).

The FluentUI System icons are licensed under the [MIT License](https://github.com/microsoft/fluentui-system-icons/blob/master/LICENSE).

The Foundation icons are licensed under the [MIT License](https://github.com/thecreation/standard-icons/blob/master/modules/foundation-icons/LICENSE).

The Heroicons are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

The Icomoon icons are dual licensed under [GPL](http://www.gnu.org/licenses/gpl.html) / [CC BY 4.0 License](http://creativecommons.org/licenses/by/4.0/).

The Ionicons are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

The Material Design icons are licensed under the [Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE).

The Octicons are licensed under the [MIT License](https://github.com/primer/octicons/blob/master/LICENSE).

The Open Iconic icons are licensed under the [MIT License](https://github.com/iconic/open-iconic/blob/master/ICON-LICENSE).

The Remix icons are licensed under the [Apache License 2.0](https://github.com/Remix-Design/RemixIcon/blob/master/License).

The Simple Icons are licensed under the [CC0 1.0 Universal License](https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md).

The Typicons are licensed under the [CC BY SA 3.0 License](http://creativecommons.org/licenses/by-sa/3.0/).

The Zondicons are licensed under the [MIT License](https://github.com/dukestreetstudio/zondicons/blob/master/LICENSE).
