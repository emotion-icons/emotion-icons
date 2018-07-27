import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 6h-4V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM9 4h6v2H9V4zm11 16H4V8h16v12z" key="k0" />
,
<path d="M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z" key="k1" />
]


const FirstAid = ({ title, ...restProps }) => {
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
          ? [<title key="FirstAid-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FirstAid',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FirstAid.displayName = 'FirstAid'

FirstAid.defaultProps = { height: 24, width: 24}

export default FirstAid
