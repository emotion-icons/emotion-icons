import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={15} height={13} x={1} y={3} key="k0" />
,
<polygon points="16 8 20 8 23 11 23 16 16 16 16 8" key="k1" />
,
<circle cx={5.5} cy={18.5} r={2.5} key="k2" />
,
<circle cx={18.5} cy={18.5} r={2.5} key="k3" />
]


const Truck = ({ title, ...restProps }) => {
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
          ? [<title key="Truck-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Truck',
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

Truck.displayName = 'Truck'

Truck.defaultProps = { height: 24, width: 24}

export default Truck
