import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M200.8 157.2l-36.4 37.4L411.7 448l36.3-37.4zM181 64h37v68h-37zm0 198h37v68h-37zm89-86h69v37h-69zm35.6-60.2l-25.7-26.3-47.1 48.3 25.6 26.2zm-136.8 22l-47.1-48.3-25.6 26.3 47.1 48.2zM96.1 277.9l25.6 26.2 47.1-48.2-25.6-26.3zM64 176h65v37H64z" key="k0" />
]


const ColorWand = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: 'middle',
        overflow: 'hidden'
      },
      ({ size,height,width,css }) => ({
        height: size ? size : height,
        width: size ? size : width,
        ...css
      }),
    ),
    {
      children: (
        title
          ? [<title key="ColorWand-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ColorWand',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ColorWand.displayName = 'ColorWand'

ColorWand.defaultProps = { height: undefined, width: undefined}

export default ColorWand
