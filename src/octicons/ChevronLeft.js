import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z" key="k0" />
]


const ChevronLeft = ({ title, ...restProps }) => {
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
          ? [<title key="ChevronLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 8 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ChevronLeft',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ChevronLeft.displayName = 'ChevronLeft'

ChevronLeft.defaultProps = { height: 16, width: 8}

export default ChevronLeft
