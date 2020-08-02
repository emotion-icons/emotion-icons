# @emotion-icons/simple-icons

## 2.6.1

### Patch Changes

- [#49](https://github.com/emotion-icons/emotion-icons/pull/49): Fix issue where `.tsx` files were accidentally included in the NPM package (breaking some builds) ([`2dabd86`](https://github.com/emotion-icons/emotion-icons/commit/2dabd861008f5e44d53c01898d24446e2ef9f7f6), [@jacobwgillespie](https://github.com/jacobwgillespie))

- Updated dependencies [[`2dabd86`](https://github.com/emotion-icons/emotion-icons/commit/2dabd861008f5e44d53c01898d24446e2ef9f7f6)]:
  - @emotion-icons/emotion-icon@2.0.1

## 2.5.0

### Minor Changes

- [#43](https://github.com/emotion-icons/emotion-icons/pull/43): Upgrade Simple Icons to v3.3.0 ([`db57056`](https://github.com/emotion-icons/emotion-icons/commit/db57056b179de07b33817470b6672f9b1e76867c), [@dependabot](https://github.com/apps/dependabot))

## 2.3.0

### Minor Changes

- [#33](https://github.com/emotion-icons/emotion-icons/pull/33): Upgrade simple-icons to v3.2.0 ([`13fd7e4`](https://github.com/emotion-icons/emotion-icons/commit/13fd7e4f2c13e9ea9d046b77994e11ea3c26006d), [@dependabot](https://github.com/apps/dependabot))

## 2.1.0

### Minor Changes

- [#22](https://github.com/emotion-icons/emotion-icons/pull/22): Upgrade simple-icons to v3.1.0 ([`5d2c281`](https://github.com/emotion-icons/emotion-icons/commit/5d2c281ab81a760d5b592403acec6fe8d3037d56), [@dependabot](https://github.com/apps/dependabot))

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
  - @emotion-icons/emotion-icon@2.0.0

## 1.0.0

- Initial release, supporting Emotion v10 ([@JoshRosenstein](https://github.com/JoshRosenstein))
