# emotion-icons

## 2.1.0

### Minor Changes

- [#22](https://github.com/emotion-icons/emotion-icons/pull/22): Upgrade simple-icons to v3.1.0 ([`5d2c281`](https://github.com/emotion-icons/emotion-icons/commit/5d2c281ab81a760d5b592403acec6fe8d3037d56), [@dependabot](https://github.com/apps/dependabot))

### Patch Changes

- Updated dependencies [[`5d2c281`](https://github.com/emotion-icons/emotion-icons/commit/5d2c281ab81a760d5b592403acec6fe8d3037d56)]:
  - @emotion-icons/simple-icons@2.1.0
  
## 2.0.0

### Major Changes

- [#11](https://github.com/emotion-icons/emotion-icons/pull/11): This is a rewrite of Emotion Icons based on the [Styled Icons](https://github.com/styled-icons) build tooling. This library packages all the icons available from [@svg-icons](https://github.com/svg-icons/svg-icons) into React components using [Emotion](https://emotion.sh) (v10). ([`c5fe333`](https://github.com/emotion-icons/emotion-icons/commit/c5fe33345d42c9ec2ab315f2af79b056a910c4a4), [@jacobwgillespie](https://github.com/jacobwgillespie))

  ### New Features

  - More icon packs (almost 17,000 icons in total)
  - Individual packages for each icon pack (`@emotion-icons/octicons`, `@emotion-icons/material`, etc.)
  - New website: [emotion-icons.dev](https://emotion-icons.dev) ✨

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

  - `@emotion-icons/ionicons-outline`
  - `@emotion-icons/ionicons-sharp`
  - `@emotion-icons/ionicons-solid`

  The Simple Icons previously at `emotion-icons/simpleIcons` are now available as `@emotion-icons/simple-icons`.

  #### Revamped internals

  If you previously depended on any internal files inside `emotion-icons`, such as `createIcon.js`, V2 has an entirely different foundation for generating packages, so any non-icon files won't be accessible anymore.

### Patch Changes

- Updated dependencies [[`c5fe333`](https://github.com/emotion-icons/emotion-icons/commit/c5fe33345d42c9ec2ab315f2af79b056a910c4a4)]:
  - @emotion-icons/boxicons-logos@2.0.0
  - @emotion-icons/boxicons-regular@2.0.0
  - @emotion-icons/boxicons-solid@2.0.0
  - @emotion-icons/crypto@2.0.0
  - @emotion-icons/emotion-icon@2.0.0
  - @emotion-icons/entypo@2.0.0
  - @emotion-icons/entypo-social@2.0.0
  - @emotion-icons/evaicons-outline@2.0.0
  - @emotion-icons/evaicons-solid@2.0.0
  - @emotion-icons/evil@2.0.0
  - @emotion-icons/fa-brands@2.0.0
  - @emotion-icons/fa-regular@2.0.0
  - @emotion-icons/fa-solid@2.0.0
  - @emotion-icons/feather@2.0.0
  - @emotion-icons/foundation@2.0.0
  - @emotion-icons/heroicons-outline@2.0.0
  - @emotion-icons/heroicons-solid@2.0.0
  - @emotion-icons/icomoon@2.0.0
  - @emotion-icons/ionicons-outline@2.0.0
  - @emotion-icons/ionicons-sharp@2.0.0
  - @emotion-icons/ionicons-solid@2.0.0
  - @emotion-icons/material@2.0.0
  - @emotion-icons/material-outlined@2.0.0
  - @emotion-icons/material-rounded@2.0.0
  - @emotion-icons/material-sharp@2.0.0
  - @emotion-icons/material-twotone@2.0.0
  - @emotion-icons/octicons@2.0.0
  - @emotion-icons/open-iconic@2.0.0
  - @emotion-icons/remix-fill@2.0.0
  - @emotion-icons/remix-line@2.0.0
  - @emotion-icons/simple-icons@2.0.0
  - @emotion-icons/typicons@2.0.0
  - @emotion-icons/zondicons@2.0.0

## 1.0.0

- Initial release, supporting Emotion v10 ([@JoshRosenstein](https://github.com/JoshRosenstein))
