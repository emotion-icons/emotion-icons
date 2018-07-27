import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M295.973 160H180.572L215.19 30.184C219.25 14.956 207.756 0 192 0H56C43.971 0 33.8 8.905 32.211 20.828l-31.996 240C-1.704 275.217 9.504 288 24.004 288h118.701L96.646 482.466C93.05 497.649 104.659 512 119.992 512c8.35 0 16.376-4.374 20.778-11.978l175.973-303.997c9.244-15.967-2.288-36.025-20.77-36.025z" key="k0" />
]


const Bolt = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Bolt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 320 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bolt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bolt.displayName = 'Bolt'

Bolt.defaultProps = { height: undefined, width: undefined}

export default Bolt
