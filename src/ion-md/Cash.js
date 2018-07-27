import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M32 96v256h448V96H32zm160.5 224h-80.4c0-26.6-21.5-48.1-48.1-48.1V192c35.3 0 64-28.7 64-64h64.5c-19.9 23.5-32.5 57.8-32.5 96s12.6 72.5 32.5 96zM448 271.9c-26 0-48 21.5-48 48.1h-80.5c19.9-23.5 32.5-57.8 32.5-96s-12.6-72.5-32.5-96H384c0 35.3 28.7 64 64 64v79.9zM32 384h448v32H32z" key="k0" />
]


const Cash = ({ title, ...restProps }) => {
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
          ? [<title key="Cash-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Cash',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Cash.displayName = 'Cash'

Cash.defaultProps = { height: undefined, width: undefined}

export default Cash
