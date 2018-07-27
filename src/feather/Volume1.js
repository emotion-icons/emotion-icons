import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" key="k0" />
,
<path d="M15.54 8.46a5 5 0 0 1 0 7.07" key="k1" />
]


const Volume1 = ({ title, ...restProps }) => {
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
          ? [<title key="Volume1-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Volume1',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "none",
  "stroke": "currentColor",
  "strokeLinecap": "round",
  "strokeLinejoin": "round",
      ...restProps
    }
    )
  }

Volume1.displayName = 'Volume1'

Volume1.defaultProps = { height: 24, width: 24}

export default Volume1
