# @emotion-icons/heroicons-solid

## 3.14.0

### Minor Changes

- [#461](https://github.com/emotion-icons/emotion-icons/pull/461): Update all package dependencies ([`22602317`](https://github.com/emotion-icons/emotion-icons/commit/22602317b414938da76253f7850f4a252cd91edb), [@icon-bot](https://github.com/icon-bot))

### Patch Changes

- Updated dependencies [[`22602317`](https://github.com/emotion-icons/emotion-icons/commit/22602317b414938da76253f7850f4a252cd91edb)]:
  - @emotion-icons/emotion-icon@4.1.0

## 3.0.0

### Major Changes

- [#245](https://github.com/emotion-icons/emotion-icons/pull/245): Upgrading to [Emotion 11](https://github.com/emotion-js/emotion/pull/1675) ([`34311c5c`](https://github.com/emotion-icons/emotion-icons/commit/34311c5c572384d32c95fe4a0e8c796c2d1caf77), [@JoshRosenstein](https://github.com/JoshRosenstein))

### Patch Changes

- Updated dependencies [[`34311c5c`](https://github.com/emotion-icons/emotion-icons/commit/34311c5c572384d32c95fe4a0e8c796c2d1caf77)]:
  - @emotion-icons/emotion-icon@4.0.0

## 2.11.0

### Minor Changes

- [#95](https://github.com/emotion-icons/emotion-icons/pull/95): Bump heroicons from 0.4.0 to 0.4.1 ([`183d3bb`](https://github.com/emotion-icons/emotion-icons/commit/183d3bb3f630deebb6288b2a7283035f883378ff), [@dependabot](https://github.com/apps/dependabot))

## 2.10.0

### Minor Changes

- [#93](https://github.com/emotion-icons/emotion-icons/pull/93): Bump heroicons from 0.3.7 to 0.4.0 ([`bc3951e`](https://github.com/emotion-icons/emotion-icons/commit/bc3951e8d8d462f2694050d03b3fa5bdeabbd4ce), [@jacobwgillespie](https://github.com/jacobwgillespie))

### Patch Changes

- [#93](https://github.com/emotion-icons/emotion-icons/pull/93): Fix issue where @emotion-icons/emotion-icon package.json incorrectly referenced its built files, breaking some builds ([`bc3951e`](https://github.com/emotion-icons/emotion-icons/commit/bc3951e8d8d462f2694050d03b3fa5bdeabbd4ce), [@jacobwgillespie](https://github.com/jacobwgillespie))

- Updated dependencies [[`bc3951e`](https://github.com/emotion-icons/emotion-icons/commit/bc3951e8d8d462f2694050d03b3fa5bdeabbd4ce)]:
  - @emotion-icons/emotion-icon@2.0.3

## 2.7.1

### Patch Changes

- [#67](https://github.com/emotion-icons/emotion-icons/pull/67): Fix IE11 compatibility issue ([`e3b78f3`](https://github.com/emotion-icons/emotion-icons/commit/e3b78f350f549f0b92bccef2695c61e3ad79ddd9), [@jacobwgillespie](https://github.com/jacobwgillespie))

- Updated dependencies [[`e3b78f3`](https://github.com/emotion-icons/emotion-icons/commit/e3b78f350f549f0b92bccef2695c61e3ad79ddd9)]:
  - @emotion-icons/emotion-icon@2.0.2

## 2.6.1

### Patch Changes

- [#49](https://github.com/emotion-icons/emotion-icons/pull/49): Fix issue where `.tsx` files were accidentally included in the NPM package (breaking some builds) ([`2dabd86`](https://github.com/emotion-icons/emotion-icons/commit/2dabd861008f5e44d53c01898d24446e2ef9f7f6), [@jacobwgillespie](https://github.com/jacobwgillespie))

- Updated dependencies [[`2dabd86`](https://github.com/emotion-icons/emotion-icons/commit/2dabd861008f5e44d53c01898d24446e2ef9f7f6)]:
  - @emotion-icons/emotion-icon@2.0.1

## 2.4.0

### Minor Changes

- [#40](https://github.com/emotion-icons/emotion-icons/pull/40): Upgrade Heroicons to v0.3.7 ([`a4a5fe6`](https://github.com/emotion-icons/emotion-icons/commit/a4a5fe691faa3e367d6338077b2b2f83096358c8), [@dependabot](https://github.com/apps/dependabot))

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
