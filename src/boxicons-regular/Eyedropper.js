import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.707 2.293a.999.999 0 0 0-1.414 0l-3.296 3.296-1.298-1.296-1.414 1.414 1.298 1.296-8.29 8.29a1.001 1.001 0 0 0-.263.465l-1 4a.997.997 0 0 0 1.212 1.212l4-1c.176-.044.337-.135.465-.263l8.292-8.292 1.294 1.292 1.414-1.414-1.294-1.292 3.294-3.294a.999.999 0 0 0 0-1.414l-3-3zM7.488 18.097l-2.114.529.529-2.114 8.095-8.095 1.586 1.584-8.096 8.096z" key="k0" />
]


const Eyedropper = ({ title, ...restProps }) => {
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
          ? [<title key="Eyedropper-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Eyedropper',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Eyedropper.displayName = 'Eyedropper'

Eyedropper.defaultProps = { height: 24, width: 24}

export default Eyedropper
