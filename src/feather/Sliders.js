import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={4} x2={4} y1={21} y2={14} key="k0" />
,
<line x1={4} x2={4} y1={10} y2={3} key="k1" />
,
<line x1={12} x2={12} y1={21} y2={12} key="k2" />
,
<line x1={12} x2={12} y1={8} y2={3} key="k3" />
,
<line x1={20} x2={20} y1={21} y2={16} key="k4" />
,
<line x1={20} x2={20} y1={12} y2={3} key="k5" />
,
<line x1={1} x2={7} y1={14} y2={14} key="k6" />
,
<line x1={9} x2={15} y1={8} y2={8} key="k7" />
,
<line x1={17} x2={23} y1={16} y2={16} key="k8" />
]


const Sliders = ({ title, ...restProps }) => {
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
          ? [<title key="Sliders-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Sliders',
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

Sliders.displayName = 'Sliders'

Sliders.defaultProps = { height: 24, width: 24}

export default Sliders
