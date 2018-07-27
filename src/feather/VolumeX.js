import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" key="k0" />
,
<line x1={23} x2={17} y1={9} y2={15} key="k1" />
,
<line x1={17} x2={23} y1={9} y2={15} key="k2" />
]


const VolumeX = ({ title, ...restProps }) => {
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
          ? [<title key="VolumeX-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VolumeX',
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

VolumeX.displayName = 'VolumeX'

VolumeX.defaultProps = { height: 24, width: 24}

export default VolumeX
