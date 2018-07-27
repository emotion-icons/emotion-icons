import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" key="k0" />
]


const ChevronDown = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="ChevronDown-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 448 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ChevronDown',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ChevronDown.displayName = 'ChevronDown'

ChevronDown.defaultProps = { height: undefined, width: undefined}

export default ChevronDown
