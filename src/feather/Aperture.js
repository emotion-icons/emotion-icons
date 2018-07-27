import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={12} cy={12} r={10} key="k0" />
,
<line x1={14.31} x2={20.05} y1={8} y2={17.94} key="k1" />
,
<line x1={9.69} x2={21.17} y1={8} y2={8} key="k2" />
,
<line x1={7.38} x2={13.12} y1={12} y2={2.06} key="k3" />
,
<line x1={9.69} x2={3.95} y1={16} y2={6.06} key="k4" />
,
<line x1={14.31} x2={2.83} y1={16} y2={16} key="k5" />
,
<line x1={16.62} x2={10.88} y1={12} y2={21.94} key="k6" />
]


const Aperture = ({ title, ...restProps }) => {
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
          ? [<title key="Aperture-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Aperture',
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

Aperture.displayName = 'Aperture'

Aperture.defaultProps = { height: 24, width: 24}

export default Aperture
