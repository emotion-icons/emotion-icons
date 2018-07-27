import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 14c-2.206 0-4 1.794-4 4s1.794 4 4 4a4.003 4.003 0 0 0 3.998-3.98H10V16h4v2.039h.004A4.002 4.002 0 0 0 18 22c2.206 0 4-1.794 4-4s-1.794-4-4-4h-2v-4h2c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4v2h-4V5.98h-.002A4.003 4.003 0 0 0 6 2C3.794 2 2 3.794 2 6s1.794 4 4 4h2v4H6zm2 4c0 1.122-.879 2-2 2s-2-.878-2-2 .879-2 2-2h2v2zm8-12c0-1.122.879-2 2-2s2 .878 2 2-.879 2-2 2h-2V6zm0 10h2c1.121 0 2 .878 2 2s-.879 2-2 2-2-.878-2-2v-2zm-6-6h4v4h-4v-4zM6 8c-1.121 0-2-.878-2-2s.879-2 2-2 2 .878 2 2v2H6z" key="k0" />
]


const Command = ({ title, ...restProps }) => {
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
          ? [<title key="Command-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Command',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Command.displayName = 'Command'

Command.defaultProps = { height: 24, width: 24}

export default Command
