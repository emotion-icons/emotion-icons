import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M190.4 354.1L91.9 256l98.4-98.1-30-29.9L32 256l128.4 128 30-29.9zm131.2 0L420 256l-98.4-98.1 30-29.9L480 256 351.6 384l-30-29.9z" key="k0" />
,
<path d="M155.6 276h40v-40h-40v40zm200.8-40h-40v40h40v-40zM236 276h40v-40h-40v40z" key="k1" />
]


const CodeWorking = ({ title, ...restProps }) => {
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
          ? [<title key="CodeWorking-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CodeWorking',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CodeWorking.displayName = 'CodeWorking'

CodeWorking.defaultProps = { height: undefined, width: undefined}

export default CodeWorking
