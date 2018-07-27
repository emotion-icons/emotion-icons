import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 22h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm3-9h3v-3h2v3h3v2h-3v3H9v-3H6v-2z" key="k0" />
,
<path d="M21 2H8v2h12v12h2V3a1 1 0 0 0-1-1z" key="k1" />
]


const Duplicate = ({ title, ...restProps }) => {
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
          ? [<title key="Duplicate-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Duplicate',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Duplicate.displayName = 'Duplicate'

Duplicate.defaultProps = { height: 24, width: 24}

export default Duplicate
