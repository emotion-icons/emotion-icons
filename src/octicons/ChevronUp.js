import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z" key="k0" />
]


const ChevronUp = ({ title, ...restProps }) => {
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
          ? [<title key="ChevronUp-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 10 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ChevronUp',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ChevronUp.displayName = 'ChevronUp'

ChevronUp.defaultProps = { height: 16, width: 10}

export default ChevronUp
