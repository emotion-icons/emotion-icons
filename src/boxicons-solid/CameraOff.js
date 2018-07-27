import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 20h12.879l-4.014-4.014c-2.061-.074-3.777-1.79-3.851-3.851L2 6.121V19a1 1 0 0 0 1 1zM21 5h-3.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5h-.172L3.707 2.293 2.293 3.707l18 18 1.414-1.414-.362-.362A.992.992 0 0 0 22 19V6a1 1 0 0 0-1-1zm-7.081 7.505c.048-.163.081-.331.081-.505 0-1.065-.935-2-2-2a1.82 1.82 0 0 0-.505.081L9.994 8.58A3.863 3.863 0 0 1 12 8c2.168 0 4 1.832 4 4 0 .729-.221 1.412-.58 2.006l-1.501-1.501z" key="k0" />
]


const CameraOff = ({ title, ...restProps }) => {
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
          ? [<title key="CameraOff-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CameraOff',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CameraOff.displayName = 'CameraOff'

CameraOff.defaultProps = { height: 24, width: 24}

export default CameraOff
