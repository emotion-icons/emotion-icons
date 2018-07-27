import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M11.992 8.994V6.996H7.995v-2h3.997V2.999l3.998 2.998-3.998 2.998zm-1.998 2.998H5.996V2.998L2 1h7.995v2.998h1V1c0-.55-.45-.999-1-.999H.999A1.001 1.001 0 0 0 0 1v11.372c0 .39.22.73.55.91L5.996 16v-3.008h3.998c.55 0 1-.45 1-1V7.996h-1v3.998z" key="k0" />
]


const SignOut = ({ title, ...restProps }) => {
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
          ? [<title key="SignOut-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 16 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SignOut',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SignOut.displayName = 'SignOut'

SignOut.defaultProps = { height: 16, width: 16}

export default SignOut
