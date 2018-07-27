import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15.975 5L12 2v2c-4.336 0-8 3.664-8 8 0 4.337 3.664 8 8 8 4.337 0 8-3.663 8-8h-2c0 3.252-2.748 6-6 6s-6-2.748-6-6 2.748-6 6-6v2l3.975-3z" key="k0" />
]


const Revision = ({ title, ...restProps }) => {
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
          ? [<title key="Revision-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Revision',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Revision.displayName = 'Revision'

Revision.defaultProps = { height: 24, width: 24}

export default Revision
