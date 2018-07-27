import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M66.4 322.5H16V0h50.4v322.5zM166.9 76.1h-50.4V512h50.4V76.1zm100.6 0h-50.4V512h50.4V76.1zM368 76h-50.4v247H368V76z" key="k0" />
]


const Gitter = ({ title, ...restProps }) => {
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
          ? [<title key="Gitter-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 384 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Gitter',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Gitter.displayName = 'Gitter'

Gitter.defaultProps = { height: undefined, width: undefined}

export default Gitter
