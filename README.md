# emotion-icons

[![Build Status](https://img.shields.io/travis/JoshRosenstein/emotion-icons/master.svg?style=flat-square)](https://travis-ci.org/JoshRosenstein/emotion-icons)&nbsp;
[![npm](https://img.shields.io/npm/dm/emotion-icons.svg?style=flat-square)](https://www.npmjs.com/package/emotion-icons)&nbsp;
[![npm](https://img.shields.io/npm/v/emotion-icons.svg?style=flat-square)](https://www.npmjs.com/package/emotion-icons)&nbsp;
[![Built with Emotion](https://img.shields.io/badge/built%20with-emotion-db7093.svg?style=flat-square)](https://emotion.sh/)&nbsp;
[![Inspired By](https://img.shields.io/badge/Inspired%20by-styled--icons-blue.svg?style=flat-square)](https://styled-icons.js.org/)&nbsp;
[![Powered By](https://img.shields.io/badge/Docs%20Powered%20by-docz-blue.svg?style=flat-square)](https://www.docz.site/)

## Bundled Icon Sets

(4,680 Total icons)

- [`Feather`](http://feathericons.com) by Cole Bemis & Contributors
- [`FontAwesome`](http://fortawesome.github.io/Font-Awesome/icons/) by Dave Gandy
- [`Ionicons`](https://ionicons.com/) by Ben Sperry
- [`MaterialIcons`](https://material.io/icons/) by Google, Inc.
- [`Octicons`](http://octicons.github.com) by Github, Inc.
- [`SimpleIcons`](http://SimpleIcons.org) by Dan Leech & Contributors
- [`boxicons`](https://boxicons.com/) by Aniket Suvarna

`emotion-icons` provides the [Font Awesome](https://fontawesome.com/), [Feather](https://feathericons.com/), [Material Design](https://material.io/icons/), and [Octicons](https://octicons.github.com/) icon composed with [emotion-js](https://emotion.sh/).

---

## Documentation

> **[See Docs Here](https://rosenstein.io/emotion-icons/)**

## Quick Start
```
yarn add emotion-icons
```
```jsx
import {material, octicons} from 'emotion-icons'
import Alert from 'emotion-icons/boxicons/Alert'
import {Alert} from 'emotion-icons/boxicons'
import * as faSolid from 'emotion-icons/fa-solid'
```
### File Structure 
Dive Deeper:[UNPKG](https://unpkg.com/emotion-icons@latest/)
```
emotion-icons
│   createIcon.cjs.js
│   createIcon.js
│   index.cjs.js
│   index.js
│
│──boxicons-regular/
│   │   Adjust.cjs.js
│   │   Adjust.js
│   │   ...
│   │   index.cjs.js
│   │   index.js
│──boxicons-regular/
│──boxicons-solid/
│──fa-brands/
│──fa-regular/
│──fa-solid/
│──feather/
│──ion-ios/
│──ion-md/
│──material/
│──octicons/
│──simpleIcons/

```
### Sample Source File
#### emotion-icons/feather/Award.js
```jsx
import createIcon from "../createIcon";
export var AwardConfig = {
  displayName: "Award",
  attrs: {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  css: {
    display: "inline-block",
    verticalAlign: "middle",
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
    margin: "auto"
  },
  width: 24,
  height: 24,
  titleKey: "Award-title",
  viewBox: "0 0 24 24",
  labelledby: "icon-title-Award",
  body: [
    { type: "circle", props: { cx: 12, cy: 8, r: 7, key: "k0" } },
    {
      type: "polyline",
      props: { points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88", key: "k1" }
    }
  ]
};
export default createIcon(AwardConfig);

```
#### emotion-icons/createIcon.js
```jsx
import React from 'react'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid' 

const createInnerElements = body =>
  body.map(item => React.createElement(item.type, {...item.props}))

function calcRatio(value, ratio = 1) {
  if (typeof ratio !== 'number') return value
  if (typeof value === 'number') return value * ratio
  const unitlessValue = parseFloat(value)
  return unitlessValue * ratio + value.replace(`${unitlessValue}`, '')
}

const calcDimension = (key, {size, ratio, ...HW}) => {
  const targetV = HW[key]
  const value = size
    ? ratio
      ? calcRatio(size, ratio)
      : size
    : targetV
      ? ratio
        ? calcRatio(targetV, ratio)
        : targetV
      : null
  return value ? {[key]: value} : {}
}

const createIcon = config => {
  const Inner = createInnerElements(config.body)
  const StyledIcon = styled('svg', {
    shouldForwardProp: name =>
      !['width', 'size', 'height', 'css', 'color'].includes(name) && isPropValid(name),
  })(
    ({
      size,
      ratio,
      height = config['height'],
      width = config['width'],
      css,
      color = config['color'],
    }) => ({
      ...config.css,
      ...calcDimension('height', {size, ratio, height, width}),
      ...calcDimension('width', {size, ratio, height, width}),
      ...(color ? {color} : {}),
      ...css,
    }),
  )

  const Icon = ({title, ...restProps}) => {
    const passProps = {
      viewBox: config.viewBox,
      'aria-hidden': title ? null : 'true',
      'aria-labelledby': title && config.labelledby,
      focusable: 'false',
      role: title ? undefined : 'img',
      ...config.attrs,
      ...restProps,
    }
    return (
      <StyledIcon {...passProps}>
        {title && <title key={config.titleKey}>{title}</title>}
        {Inner}
      </StyledIcon>
    )
  }

  Icon.displayName = config.displayName

  Icon.defaultProps = config.defaultProps
  return Icon
}

export default createIcon
```
