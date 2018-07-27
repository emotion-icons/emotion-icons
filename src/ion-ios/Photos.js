import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M464 144H128c-17.6 0-32 14.4-32 32v240c0 17.6 14.4 32 32 32h336c17.6 0 32-14.4 32-32V176c0-17.6-14.4-32-32-32z" key="k0" />
,
<path d="M100 116h332V96c0-17.6-14.4-32-32-32H48c-17.6 0-32 14.4-32 32v256c0 17.6 14.4 32 32 32h20V148c0-17.6 14.4-32 32-32z" key="k1" />
]


const Photos = ({ title, ...restProps }) => {
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
          ? [<title key="Photos-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Photos',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Photos.displayName = 'Photos'

Photos.defaultProps = { height: undefined, width: undefined}

export default Photos
