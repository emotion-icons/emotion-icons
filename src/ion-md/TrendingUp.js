import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M345.6 128l51.3 51.3-109.3 109.4-89.6-89.6L32 365.4 63.6 397 198 262.5l89.6 89.7 141.1-141 51.3 51.3V128H345.6z" key="k0" />
]


const TrendingUp = ({ title, ...restProps }) => {
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
          ? [<title key="TrendingUp-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TrendingUp',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TrendingUp.displayName = 'TrendingUp'

TrendingUp.defaultProps = { height: undefined, width: undefined}

export default TrendingUp
