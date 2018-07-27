import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18 22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12zM7 4h10v16H7V4z" key="k0" />
,
<circle cx={12} cy={18} r={1} key="k1" />
]


const MobileAlt = ({ title, ...restProps }) => {
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
          ? [<title key="MobileAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MobileAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MobileAlt.displayName = 'MobileAlt'

MobileAlt.defaultProps = { height: 24, width: 24}

export default MobileAlt
