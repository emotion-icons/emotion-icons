import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8 2H6v4H2v2h4v9a1 1 0 0 0 1 1h9v4h2v-4h4v-2H8V2z" key="k0" />
,
<path d="M18 14V7a1 1 0 0 0-1-1h-7v2h6v6h2z" key="k1" />
]


const Crop = ({ title, ...restProps }) => {
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
          ? [<title key="Crop-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Crop',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Crop.displayName = 'Crop'

Crop.defaultProps = { height: 24, width: 24}

export default Crop
