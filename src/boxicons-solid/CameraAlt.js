import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M14 12c0-1.065-.935-2-2-2s-2 .935-2 2 .935 2 2 2 2-.935 2-2zm7-8h-2V3h-3v1H9V2H5v2H3a1 1 0 0 0-1 1v5h6.573C9.278 8.819 10.558 8 12 8s2.722.819 3.427 2H22V5a1 1 0 0 0-1-1zm-2 4h-2V6h2v2z" key="k0" />
,
<path d="M12 16c-2.168 0-4-1.832-4-4H2v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7h-6c0 2.168-1.832 4-4 4z" key="k1" />
]


const CameraAlt = ({ title, ...restProps }) => {
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
          ? [<title key="CameraAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CameraAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CameraAlt.displayName = 'CameraAlt'

CameraAlt.defaultProps = { height: 24, width: 24}

export default CameraAlt
