import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 17h3.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm1-8h3c.197 0 .391-.059.555-.168L12 5.868v12.264l-4.445-2.964A1.006 1.006 0 0 0 7 15H4V9z" key="k0" />
]


const Volume = ({ title, ...restProps }) => {
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
          ? [<title key="Volume-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Volume',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Volume.displayName = 'Volume'

Volume.defaultProps = { height: 24, width: 24}

export default Volume
