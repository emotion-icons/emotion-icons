import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.293 13.707a.997.997 0 0 1-1.413.001l-3.006-3L7.7 11.292l2.299 2.295 5.794-5.794 1.414 1.414-6.5 6.5z" key="k0" />
]


const CheckCircle = ({ title, ...restProps }) => {
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
          ? [<title key="CheckCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CheckCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CheckCircle.displayName = 'CheckCircle'

CheckCircle.defaultProps = { height: 24, width: 24}

export default CheckCircle
