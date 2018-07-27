import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22 12l-4-4v3H3v2h15v3z" key="k0" />
]


const TrendingFlat = ({ title, ...restProps }) => {
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
          ? [<title key="TrendingFlat-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TrendingFlat',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TrendingFlat.displayName = 'TrendingFlat'

TrendingFlat.defaultProps = { height: 24, width: 24}

export default TrendingFlat
