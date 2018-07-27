import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.293 7.293L14 11.586l-4-4-7.707 7.707 1.414 1.414L10 10.414l4 4 5.707-5.707L22 11V5h-6z" key="k0" />
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
      viewBox: '0 0 24 24',
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

TrendingUp.defaultProps = { height: 24, width: 24}

export default TrendingUp
