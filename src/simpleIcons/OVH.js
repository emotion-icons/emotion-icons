import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.881 10.095l2.563-4.45A11.93 11.93 0 0 1 24 11.555c0 2.88-1.017 5.523-2.71 7.594h-6.62l2.04-3.541h-2.696l3.176-5.513h2.691zm-2.32-5.243L9.333 19.14l.003.009H2.709A11.947 11.947 0 0 1 0 11.555c0-2.152.57-4.17 1.561-5.918L5.855 13.1 10.6 4.852h6.961z" key="k0" />
]

export const hex='#123F6D'
const OVH = ({ title, ...restProps }) => {
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
          ? [<title key="OVH-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-OVH',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

OVH.displayName = 'OVH'

OVH.defaultProps = { height: 24, width: 24}

export default OVH
