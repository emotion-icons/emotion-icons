import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M14.793 7.793L12 10.586 9.207 7.793 7.793 9.207 10.586 12l-2.793 2.793 1.414 1.414L12 13.414l2.793 2.793 1.414-1.414L13.414 12l2.793-2.793z" key="k0" />
,
<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" key="k1" />
]


const XCircle = ({ title, ...restProps }) => {
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
          ? [<title key="XCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-XCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

XCircle.displayName = 'XCircle'

XCircle.defaultProps = { height: 24, width: 24}

export default XCircle
