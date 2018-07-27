import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.47 21.848a1.002 1.002 0 0 0 1.06 0C20.903 16.614 21 8.35 21 8a1 1 0 0 0-.47-.848l-8-5a1 1 0 0 0-1.061 0l-8 5A1.002 1.002 0 0 0 3 8c0 .35.097 8.614 8.47 13.848zM12 5l6 3.5S17.834 14 12 19V5z" key="k0" />
]


const ShieldAlt = ({ title, ...restProps }) => {
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
          ? [<title key="ShieldAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ShieldAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ShieldAlt.displayName = 'ShieldAlt'

ShieldAlt.defaultProps = { height: 24, width: 24}

export default ShieldAlt
