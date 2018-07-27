import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z" key="k0" />
]


const ChevronDown = ({ title, ...restProps }) => {
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
          ? [<title key="ChevronDown-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 10 16',
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

ChevronDown.defaultProps = { height: 16, width: 10}

export default ChevronDown
