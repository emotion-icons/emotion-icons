import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5.707 19.707L12 13.414l4.461 4.461L14.337 20H20v-5.663l-2.125 2.124L13.414 12l4.461-4.461L20 9.663V4h-5.663l2.124 2.125L12 10.586 5.707 4.293 4.293 5.707 10.586 12l-6.293 6.293z" key="k0" />
]


const ShuffleAlt = ({ title, ...restProps }) => {
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
          ? [<title key="ShuffleAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ShuffleAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ShuffleAlt.displayName = 'ShuffleAlt'

ShuffleAlt.defaultProps = { height: 24, width: 24}

export default ShuffleAlt
