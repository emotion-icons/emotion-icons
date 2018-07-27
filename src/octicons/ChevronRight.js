import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z" key="k0" />
]


const ChevronRight = ({ title, ...restProps }) => {
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
          ? [<title key="ChevronRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 8 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ChevronRight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ChevronRight.displayName = 'ChevronRight'

ChevronRight.defaultProps = { height: 16, width: 8}

export default ChevronRight
