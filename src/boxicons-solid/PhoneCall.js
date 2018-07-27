import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-2.594 2.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l2.594-2.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0l-3 3a.996.996 0 0 0-.291.649c-.015.25-.302 6.172 4.291 10.765 3.988 3.988 8.99 4.299 10.428 4.299.219 0 .337-.008.337-.008.243-.015.478-.118.649-.291l3-3a.999.999 0 0 0 0-1.414l-4-4zM13.99 2v2C17.473 4 20 6.523 20 10h2c0-4.561-3.443-8-8.01-8z" key="k0" />
,
<path d="M18 10c0-2.542-1.458-4-4-4v2c1.439 0 2 .561 2 2h2z" key="k1" />
]


const PhoneCall = ({ title, ...restProps }) => {
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
          ? [<title key="PhoneCall-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PhoneCall',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PhoneCall.displayName = 'PhoneCall'

PhoneCall.defaultProps = { height: 24, width: 24}

export default PhoneCall
