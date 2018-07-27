import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13.763 2.354A.998.998 0 0 0 13 2H7a1 1 0 0 0-.995.9l-1 10A1 1 0 0 0 6 14h3v7a1 1 0 0 0 1.832.555l8-12A1 1 0 0 0 18 8h-4.819l.806-4.835a1.002 1.002 0 0 0-.224-.811z" key="k0" />
]


const Bolt = ({ title, ...restProps }) => {
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
          ? [<title key="Bolt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
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

Bolt.defaultProps = { height: 24, width: 24}

export default Bolt
