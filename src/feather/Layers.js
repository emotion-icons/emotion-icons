import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polygon points="12 2 2 7 12 12 22 7 12 2" key="k0" />
,
<polyline points="2 17 12 22 22 17" key="k1" />
,
<polyline points="2 12 12 17 22 12" key="k2" />
]


const Layers = ({ title, ...restProps }) => {
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
          ? [<title key="Layers-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Layers',
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

Layers.displayName = 'Layers'

Layers.defaultProps = { height: 24, width: 24}

export default Layers
