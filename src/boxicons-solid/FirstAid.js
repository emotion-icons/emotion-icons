import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 6h-4V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM9 4h6v2H9V4zm7 11h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z" key="k0" />
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
