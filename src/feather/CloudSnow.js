import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" key="k0" />
,
<line x1={8} x2={8} y1={16} y2={16} key="k1" />
,
<line x1={8} x2={8} y1={20} y2={20} key="k2" />
,
<line x1={12} x2={12} y1={18} y2={18} key="k3" />
,
<line x1={12} x2={12} y1={22} y2={22} key="k4" />
,
<line x1={16} x2={16} y1={16} y2={16} key="k5" />
,
<line x1={16} x2={16} y1={20} y2={20} key="k6" />
]


const CloudSnow = ({ title, ...restProps }) => {
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
          ? [<title key="CloudSnow-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CloudSnow',
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

CloudSnow.displayName = 'CloudSnow'

CloudSnow.defaultProps = { height: 24, width: 24}

export default CloudSnow
