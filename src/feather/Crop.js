import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" key="k0" />
,
<path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" key="k1" />
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
        "fill": "none",
  "stroke": "currentColor",
  "strokeLinecap": "round",
  "strokeLinejoin": "round",
      ...restProps
    }
    )
  }

Crop.displayName = 'Crop'

Crop.defaultProps = { height: 24, width: 24}

export default Crop
