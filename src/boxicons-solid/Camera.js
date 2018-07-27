import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 10c-1.065 0-2 .935-2 2s.935 2 2 2 2-.935 2-2-.935-2-2-2z" key="k0" />
,
<path d="M21 5h-3.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-9 11c-2.168 0-4-1.832-4-4s1.832-4 4-4 4 1.832 4 4-1.832 4-4 4z" key="k1" />
]


const Camera = ({ title, ...restProps }) => {
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
          ? [<title key="Camera-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Camera',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Camera.displayName = 'Camera'

Camera.defaultProps = { height: 24, width: 24}

export default Camera
