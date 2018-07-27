import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18 22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12zm-6-6a1.5 1.5 0 1 1 .001 2.999A1.5 1.5 0 0 1 12 16z" key="k0" />
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
