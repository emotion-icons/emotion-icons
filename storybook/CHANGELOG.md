# @emotion-icons/storybook

## 2.0.14

### Patch Changes

- Updated dependencies [[`183d3bb`](https://github.com/emotion-icons/emotion-icons/commit/183d3bb3f630deebb6288b2a7283035f883378ff), [`63f0c22`](https://github.com/emotion-icons/emotion-icons/commit/63f0c22fe79f758ba8e0fbdb6be4fcd5d4b5f0ed)]:
  - emotion-icons@2.11.0

## 2.0.13

### Patch Changes

- Updated dependencies [[`bc3951e`](https://github.com/emotion-icons/emotion-icons/commit/bc3951e8d8d462f2694050d03b3fa5bdeabbd4ce), [`bc3951e`](https://github.com/emotion-icons/emotion-icons/commit/bc3951e8d8d462f2694050d03b3fa5bdeabbd4ce), [`bc3951e`](https://github.com/emotion-icons/emotion-icons/commit/bc3951e8d8d462f2694050d03b3fa5bdeabbd4ce), [`bc3951e`](https://github.com/emotion-icons/emotion-icons/commit/bc3951e8d8d462f2694050d03b3fa5bdeabbd4ce), [`bc3951e`](https://github.com/emotion-icons/emotion-icons/commit/bc3951e8d8d462f2694050d03b3fa5bdeabbd4ce)]:
  - emotion-icons@2.10.0

## 2.0.12

### Patch Changes

- Updated dependencies [[`455258e`](https://github.com/emotion-icons/emotion-icons/commit/455258e281a91123a5813c8f9b93bcd2cc6e258c), [`455258e`](https://github.com/emotion-icons/emotion-icons/commit/455258e281a91123a5813c8f9b93bcd2cc6e258c)]:
  - emotion-icons@2.9.0

## 2.0.11

### Patch Changes

- Updated dependencies [[`ba98d3a`](https://github.com/emotion-icons/emotion-icons/commit/ba98d3ab257ba234fe327ff77447462bf2aac0ea)]:
  - emotion-icons@2.8.0

## 2.0.10

### Patch Changes

- [#67](https://github.com/emotion-icons/emotion-icons/pull/67): Fix IE11 compatibility issue ([`e3b78f3`](https://github.com/emotion-icons/emotion-icons/commit/e3b78f350f549f0b92bccef2695c61e3ad79ddd9), [@jacobwgillespie](https://github.com/jacobwgillespie))

- Updated dependencies [[`e3b78f3`](https://github.com/emotion-icons/emotion-icons/commit/e3b78f350f549f0b92bccef2695c61e3ad79ddd9)]:
  - emotion-icons@2.7.1

## 2.0.9

### Patch Changes

- Updated dependencies [[`683b450`](https://github.com/emotion-icons/emotion-icons/commit/683b4501cf18696973459b27d9d50031fcbd916a)]:
  - emotion-icons@2.7.0

## 2.0.8

### Patch Changes

- Updated dependencies [[`2dabd86`](https://github.com/emotion-icons/emotion-icons/commit/2dabd861008f5e44d53c01898d24446e2ef9f7f6)]:
  - emotion-icons@2.6.1

## 2.0.7

### Patch Changes

- Updated dependencies [[`9b3c69f`](https://github.com/emotion-icons/emotion-icons/commit/9b3c69f56532b179dd071703ec463de1771daaa3)]:
  - emotion-icons@2.6.0

## 2.0.6

### Patch Changes

- Updated dependencies [[`db57056`](https://github.com/emotion-icons/emotion-icons/commit/db57056b179de07b33817470b6672f9b1e76867c)]:
  - emotion-icons@2.5.0

## 2.0.5

### Patch Changes

- Updated dependencies [[`a4a5fe6`](https://github.com/emotion-icons/emotion-icons/commit/a4a5fe691faa3e367d6338077b2b2f83096358c8)]:
  - emotion-icons@2.4.0

## 2.0.4

### Patch Changes

- Updated dependencies [[`13fd7e4`](https://github.com/emotion-icons/emotion-icons/commit/13fd7e4f2c13e9ea9d046b77994e11ea3c26006d)]:
  - emotion-icons@2.3.0

## 2.0.3

### Patch Changes

- Updated dependencies [[`fddc016`](https://github.com/emotion-icons/emotion-icons/commit/fddc016e9fbfa9ab531988322433c11593296a4e), [`b5919db`](https://github.com/emotion-icons/emotion-icons/commit/b5919db58d1cad9e52e6f0381a00db4e704a3b76)]:
  - emotion-icons@2.2.1

## 2.0.2

### Patch Changes

- Updated dependencies [[`bef8ccc`](https://github.com/emotion-icons/emotion-icons/commit/bef8cccf61f08698cf3724482dcfb6c696535fc1)]:
  - emotion-icons@2.2.0

## 2.0.1

### Patch Changes

- Updated dependencies [[`5d2c281`](https://github.com/emotion-icons/emotion-icons/commit/5d2c281ab81a760d5b592403acec6fe8d3037d56)]:
  - emotion-icons@2.1.0

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
  - emotion-icons@2.0.0

## 10.6.0

### Minor Changes

- [#1286](https://github.com/emotion-icons/emotion-icons/pull/1286): Revamp all build tooling, build icon source files with Babel (TypeScript still type-checks and builds `.d.ts` files) ([`57170c8`](https://github.com/emotion-icons/emotion-icons/commit/57170c86283d1ddbe541c6124f06b6a7f227b45b), [@jacobwgillespie](https://github.com/jacobwgillespie))

### Patch Changes

- Updated dependencies [[`57170c8`](https://github.com/emotion-icons/emotion-icons/commit/57170c86283d1ddbe541c6124f06b6a7f227b45b)]:
  - emotion-icons@10.6.0
