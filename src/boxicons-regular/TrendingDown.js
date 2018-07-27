import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M14 9.586l-4 4-6.293-6.293-1.414 1.414L10 16.414l4-4 4.293 4.293L16 19h6v-6l-2.293 2.293z" key="k0" />
]


const TrendingDown = ({ title, ...restProps }) => {
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
          ? [<title key="TrendingDown-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TrendingDown',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TrendingDown.displayName = 'TrendingDown'

TrendingDown.defaultProps = { height: 24, width: 24}

export default TrendingDown
