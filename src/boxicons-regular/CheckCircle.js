import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" key="k0" />
,
<path d="M9.999 13.587L7.7 11.292l-1.412 1.416 3.006 3a.998.998 0 0 0 1.413-.001l6.5-6.5-1.414-1.414-5.794 5.794z" key="k1" />
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
