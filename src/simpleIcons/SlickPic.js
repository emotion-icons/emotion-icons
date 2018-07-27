import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.483 18.308L6.056 14.085l2.52-9.201L24 9.104l-2.517 9.204zm-13.414-5.37l12.263 3.354 1.654-6.033L9.72 6.9l-1.65 6.034v.004z" key="k0" />
,
<path d="M8.526 15.795l-4.891 1.311-1.625-6.045 4.146-1.11.501-1.835L0 9.902l2.478 9.215 9.178-2.467" key="k1" />
]

export const hex='#FF880F'
const SlickPic = ({ title, ...restProps }) => {
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
          ? [<title key="SlickPic-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SlickPic',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SlickPic.displayName = 'SlickPic'

SlickPic.defaultProps = { height: 24, width: 24}

export default SlickPic
