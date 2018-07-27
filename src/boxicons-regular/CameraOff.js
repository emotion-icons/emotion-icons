import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 20h12.879l-2-2H4V8.121l-2-2V19a1 1 0 0 0 1 1zM21 5h-3.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.997.997 0 0 0-.707.293L6.586 5h-.172L3.707 2.293 2.293 3.707l18 18 1.414-1.414-.362-.362A.993.993 0 0 0 22 19V6a1 1 0 0 0-1-1zm-7.081 7.505l-2.424-2.425c.163-.046.331-.08.505-.08 1.065 0 2 .935 2 2 0 .174-.033.342-.081.505zm1.502 1.501A3.881 3.881 0 0 0 16 12c0-2.168-1.832-4-4-4-.729 0-1.412.22-2.007.579L7.914 6.5l2.5-2.5h3.172l2.707 2.707A.996.996 0 0 0 17 7h3v11h-.586l-3.993-3.994z" key="k0" />
,
<path d="M8.014 12.135c.074 2.062 1.789 3.777 3.851 3.851l-3.851-3.851z" key="k1" />
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
