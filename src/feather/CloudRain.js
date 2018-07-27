import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={16} x2={16} y1={13} y2={21} key="k0" />
,
<line x1={8} x2={8} y1={13} y2={21} key="k1" />
,
<line x1={12} x2={12} y1={15} y2={23} key="k2" />
,
<path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" key="k3" />
]


const CloudRain = ({ title, ...restProps }) => {
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
          ? [<title key="CloudRain-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CloudRain',
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

CloudRain.displayName = 'CloudRain'

CloudRain.defaultProps = { height: 24, width: 24}

export default CloudRain
