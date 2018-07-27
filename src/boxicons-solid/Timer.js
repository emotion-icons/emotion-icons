import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15 6c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7zm1 8h-2v-4h2v4zM12 2h6v2h-6zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2zM21.293 6.707l-2-2 1.414-1.414 2 2z" key="k0" />
]


const Timer = ({ title, ...restProps }) => {
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
          ? [<title key="Timer-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Timer',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Timer.displayName = 'Timer'

Timer.defaultProps = { height: 24, width: 24}

export default Timer
