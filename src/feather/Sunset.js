import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17 18a5 5 0 0 0-10 0" key="k0" />
,
<line x1={12} x2={12} y1={9} y2={2} key="k1" />
,
<line x1={4.22} x2={5.64} y1={10.22} y2={11.64} key="k2" />
,
<line x1={1} x2={3} y1={18} y2={18} key="k3" />
,
<line x1={21} x2={23} y1={18} y2={18} key="k4" />
,
<line x1={18.36} x2={19.78} y1={11.64} y2={10.22} key="k5" />
,
<line x1={23} x2={1} y1={22} y2={22} key="k6" />
,
<polyline points="16 5 12 9 8 5" key="k7" />
]


const Sunset = ({ title, ...restProps }) => {
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
          ? [<title key="Sunset-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Sunset',
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

Sunset.displayName = 'Sunset'

Sunset.defaultProps = { height: 24, width: 24}

export default Sunset
