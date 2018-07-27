import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 48c22 0 40 18 40 40s-18 40-40 40-40-18-40-40 18-40 40-40zm192 144.1H320V464h-42.7V320h-42.7v144H192V192.1H64v-42.7h384v42.7z" key="k0" />
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
      viewBox: '0 0 512 512',
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

Body.defaultProps = { height: undefined, width: undefined}

export default Body
