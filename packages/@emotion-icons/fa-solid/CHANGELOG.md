# @emotion-icons/fa-solid

## 3.14.0

### Minor Changes

- [#461](https://github.com/emotion-icons/emotion-icons/pull/461): Update all package dependencies ([`22602317`](https://github.com/emotion-icons/emotion-icons/commit/22602317b414938da76253f7850f4a252cd91edb), [@icon-bot](https://github.com/icon-bot))

### Patch Changes

- Updated dependencies [[`22602317`](https://github.com/emotion-icons/emotion-icons/commit/22602317b414938da76253f7850f4a252cd91edb)]:
  - @emotion-icons/emotion-icon@4.1.0

## 3.13.0

### Minor Changes

- [#374](https://github.com/emotion-icons/emotion-icons/pull/374): Bump @svg-icons/fa-solid from 1.39.1 to 1.42.0 ([`fd1cee07`](https://github.com/emotion-icons/emotion-icons/commit/fd1cee07392d37c18cf8dc7cd08be181d4819e5a), [@dependabot](https://github.com/apps/dependabot))

## 3.6.0

### Minor Changes

- [#281](https://github.com/emotion-icons/emotion-icons/pull/281): Upgrade Font Awesome to v5.15.2 ([`153c3d32`](https://github.com/emotion-icons/emotion-icons/commit/153c3d32bdb4f1e814c496ee1e2e09e370b62a9f), [@jacobwgillespie](https://github.com/jacobwgillespie))

## 3.0.0

### Major Changes

- [#245](https://github.com/emotion-icons/emotion-icons/pull/245): Upgrading to [Emotion 11](https://github.com/emotion-js/emotion/pull/1675) ([`34311c5c`](https://github.com/emotion-icons/emotion-icons/commit/34311c5c572384d32c95fe4a0e8c796c2d1caf77), [@JoshRosenstein](https://github.com/JoshRosenstein))

### Minor Changes

- [#246](https://github.com/emotion-icons/emotion-icons/pull/246): Upgrade Font Awesome to v5.15.1 ([`94ca2f3e`](https://github.com/emotion-icons/emotion-icons/commit/94ca2f3e9ab5fcb8db2b2017382c9b764b4458ef), [@jacobwgillespie](https://github.com/jacobwgillespie))

### Patch Changes

- Updated dependencies [[`34311c5c`](https://github.com/emotion-icons/emotion-icons/commit/34311c5c572384d32c95fe4a0e8c796c2d1caf77)]:
  - @emotion-icons/emotion-icon@4.0.0

## 2.15.0

### Minor Changes

- [#145](https://github.com/emotion-icons/emotion-icons/pull/145): Upgrade Font Awesome icons to v5.15.0 ([`398a29ff`](https://github.com/emotion-icons/emotion-icons/commit/398a29ff09e67f00c59d1f749e57fd7502cb3d79), [@jacobwgillespie](https://github.com/jacobwgillespie))

## 2.10.0

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

## 2.2.0

### Minor Changes

- [#29](https://github.com/emotion-icons/emotion-icons/pull/29): Upgrade Font Awesome to v5.14.0 ([`bef8ccc`](https://github.com/emotion-icons/emotion-icons/commit/bef8cccf61f08698cf3724482dcfb6c696535fc1), [@dependabot](https://github.com/apps/dependabot))

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
