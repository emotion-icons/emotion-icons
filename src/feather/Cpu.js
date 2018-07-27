import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={16} height={16} x={4} y={4} rx={2} ry={2} key="k0" />
,
<rect width={6} height={6} x={9} y={9} key="k1" />
,
<line x1={9} x2={9} y1={1} y2={4} key="k2" />
,
<line x1={15} x2={15} y1={1} y2={4} key="k3" />
,
<line x1={9} x2={9} y1={20} y2={23} key="k4" />
,
<line x1={15} x2={15} y1={20} y2={23} key="k5" />
,
<line x1={20} x2={23} y1={9} y2={9} key="k6" />
,
<line x1={20} x2={23} y1={14} y2={14} key="k7" />
,
<line x1={1} x2={4} y1={9} y2={9} key="k8" />
,
<line x1={1} x2={4} y1={14} y2={14} key="k9" />
]


const Cpu = ({ title, ...restProps }) => {
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
          ? [<title key="Cpu-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Cpu',
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

Cpu.displayName = 'Cpu'

Cpu.defaultProps = { height: 24, width: 24}

export default Cpu
