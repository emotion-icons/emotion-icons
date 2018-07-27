import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M480 397V262.5l-51.3 51.3-141.1-141-89.6 89.7L63.6 128 32 159.6l166 166.3 89.6-89.7 109.3 109.4-51.3 51.4H480z" key="k0" />
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
      viewBox: '0 0 512 512',
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

TrendingDown.defaultProps = { height: undefined, width: undefined}

export default TrendingDown
