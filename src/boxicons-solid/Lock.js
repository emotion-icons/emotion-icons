import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 10h-2V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277c-.596-.346-1-.983-1-1.723a2 2 0 1 1 4 0 1.99 1.99 0 0 1-1 1.723z" key="k0" />
]


const Lock = ({ title, ...restProps }) => {
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
          ? [<title key="Lock-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Lock',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Lock.displayName = 'Lock'

Lock.defaultProps = { height: 24, width: 24}

export default Lock
