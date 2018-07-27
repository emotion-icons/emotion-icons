import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={22} x2={2} y1={12} y2={12} key="k0" />
,
<path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" key="k1" />
,
<line x1={6} x2={6} y1={16} y2={16} key="k2" />
,
<line x1={10} x2={10} y1={16} y2={16} key="k3" />
]


const HardDrive = ({ title, ...restProps }) => {
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
          ? [<title key="HardDrive-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-HardDrive',
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

HardDrive.displayName = 'HardDrive'

HardDrive.defaultProps = { height: 24, width: 24}

export default HardDrive
