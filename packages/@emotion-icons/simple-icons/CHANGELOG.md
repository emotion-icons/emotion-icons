# @emotion-icons/simple-icons

## 2.12.0

### Minor Changes

- [#116](https://github.com/emotion-icons/emotion-icons/pull/116): Bump simple-icons from 3.6.1 to 3.7.0 ([`0521d88`](https://github.com/emotion-icons/emotion-icons/commit/0521d88a8c17bf6552dd3d62e5e4d00aa79a215d), [@dependabot](https://github.com/apps/dependabot))

## 2.10.0

### Minor Changes

- [#93](https://github.com/emotion-icons/emotion-icons/pull/93): Bump Simple Icons from 3.5.0 to 3.6.0 ([`bc3951e`](https://github.com/emotion-icons/emotion-icons/commit/bc3951e8d8d462f2694050d03b3fa5bdeabbd4ce), [@jacobwgillespie](https://github.com/jacobwgillespie))

### Patch Changes

- [#93](https://github.com/emotion-icons/emotion-icons/pull/93): Fix issue where @emotion-icons/emotion-icon package.json incorrectly referenced its built files, breaking some builds ([`bc3951e`](https://github.com/emotion-icons/emotion-icons/commit/bc3951e8d8d462f2694050d03b3fa5bdeabbd4ce), [@jacobwgillespie](https://github.com/jacobwgillespie))

- Updated dependencies [[`bc3951e`](https://github.com/emotion-icons/emotion-icons/commit/bc3951e8d8d462f2694050d03b3fa5bdeabbd4ce)]:
  - @emotion-icons/emotion-icon@2.0.3

## 2.9.0

### Minor Changes

- [#85](https://github.com/emotion-icons/emotion-icons/pull/85): Upgrade Simple Icons to v3.5.0 ([`455258e`](https://github.com/emotion-icons/emotion-icons/commit/455258e281a91123a5813c8f9b93bcd2cc6e258c), [@jacobwgillespie](https://github.com/jacobwgillespie))

## 2.8.0

### Minor Changes

- [#69](https://github.com/emotion-icons/emotion-icons/pull/69): Upgrade Simple Icons to v3.4.1 ([`ba98d3a`](https://github.com/emotion-icons/emotion-icons/commit/ba98d3ab257ba234fe327ff77447462bf2aac0ea), [@jacobwgillespie](https://github.com/jacobwgillespie))

## 2.7.1

### Patch Changes

- [#67](https://github.com/emotion-icons/emotion-icons/pull/67): Fix IE11 compatibility issue ([`e3b78f3`](https://github.com/emotion-icons/emotion-icons/commit/e3b78f350f549f0b92bccef2695c61e3ad79ddd9), [@jacobwgillespie](https://github.com/jacobwgillespie))

- Updated dependencies [[`e3b78f3`](https://github.com/emotion-icons/emotion-icons/commit/e3b78f350f549f0b92bccef2695c61e3ad79ddd9)]:
  - @emotion-icons/emotion-icon@2.0.2

## 2.7.0

### Minor Changes

- [#54](https://github.com/emotion-icons/emotion-icons/pull/54): Upgrade Simple Icons to v3.4.0 ([`683b450`](https://github.com/emotion-icons/emotion-icons/commit/683b4501cf18696973459b27d9d50031fcbd916a), [@dependabot](https://github.com/apps/dependabot))

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
