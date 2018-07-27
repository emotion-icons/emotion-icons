import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={12} cy={4} r={2} key="k0" />
,
<path d="M20 7H4v2h5v13h2v-7h2v7h2V9h5z" key="k1" />
]


const Body = ({ title, ...restProps }) => {
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
          ? [<title key="Body-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Body',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Body.displayName = 'Body'

Body.defaultProps = { height: 24, width: 24}

export default Body
