import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15 6c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" key="k0" />
,
<path d="M14 10h2v4h-2zm-2-8h6v2h-6zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2zm19.293-5.293l-2-2 1.414-1.414 2 2z" key="k1" />
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
