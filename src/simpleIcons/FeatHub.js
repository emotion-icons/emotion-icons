import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.73.01h6.54v6.867H8.73V.01zm0 17.113h6.54v6.867H8.73v-6.867zM.01 8.73h23.98v6.54H.01V8.73z" key="k0" />
]

export const hex='#9B9B9B'
const FeatHub = ({ title, ...restProps }) => {
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
          ? [<title key="FeatHub-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FeatHub',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FeatHub.displayName = 'FeatHub'

FeatHub.defaultProps = { height: 24, width: 24}

export default FeatHub
