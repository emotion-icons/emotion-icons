import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 10H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3h2c0-2.757-2.243-5-5-5S7 4.243 7 7v3H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-7 4a2 2 0 0 1 2 2 1.99 1.99 0 0 1-1 1.723V20h-2v-2.277c-.596-.346-1-.983-1-1.723a2 2 0 0 1 2-2z" key="k0" />
]


const LockOpen = ({ title, ...restProps }) => {
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
          ? [<title key="LockOpen-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LockOpen',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LockOpen.displayName = 'LockOpen'

LockOpen.defaultProps = { height: 24, width: 24}

export default LockOpen
