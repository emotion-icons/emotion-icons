import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.004 5H8c-3.794 0-7 3.206-7 7s3.206 7 7 7h9v-2H8c-2.71 0-5-2.29-5-5s2.29-5 5-5h10V6l.001 1h.003c1.623 0 2.995 1.374 2.996 3.001.001.79-.313 1.54-.885 2.111A2.98 2.98 0 0 1 18 13H8c-.532 0-1-.468-1-1s.468-1 1-1h9V9H8c-1.626 0-3 1.374-3 3s1.374 3 3 3h10.001a4.967 4.967 0 0 0 3.527-1.473A4.95 4.95 0 0 0 23 9.999 5.005 5.005 0 0 0 18.004 5z" key="k0" />
]


const Paperclip = ({ title, ...restProps }) => {
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
          ? [<title key="Paperclip-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Paperclip',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Paperclip.displayName = 'Paperclip'

Paperclip.defaultProps = { height: 24, width: 24}

export default Paperclip
