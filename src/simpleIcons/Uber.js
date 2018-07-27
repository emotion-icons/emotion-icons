import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.97.006A11.995 11.995 0 0 0 .034 10.801H8.37v-1.8a.6.6 0 0 1 .6-.599h5.997c.334 0 .6.268.6.6v5.997a.6.6 0 0 1-.599.6h-6a.599.599 0 0 1-.598-.6V13.2H.035c.663 6.592 6.543 11.397 13.134 10.735 6.592-.663 11.397-6.543 10.734-13.134A11.994 11.994 0 0 0 11.97.006z" key="k0" />
]

export const hex='#000000'
const Uber = ({ title, ...restProps }) => {
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
          ? [<title key="Uber-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Uber',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Uber.displayName = 'Uber'

Uber.defaultProps = { height: 24, width: 24}

export default Uber
