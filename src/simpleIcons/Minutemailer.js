import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5.564 2.703l3.45 3.734-2.434 4.798 5.14-.921 2.34 5.646L24 2.926 5.564 2.703zm-.636 8.088l.957-.787-1.234.39-.126-.18.51-.495-.669.27C1.813 10.979 0 13.455 0 16.35c0 1.951.822 3.705 2.133 4.947a6.763 6.763 0 0 1-.885-3.355c0-2.865 1.809-5.415 4.315-6.42l.315-.766-.75.331-.211-.285.011-.011zm4.364-1.97L10.89 6l9.398-2.201L9.292 8.821z" key="k0" />
]

export const hex='#3ABFE6'
const Minutemailer = ({ title, ...restProps }) => {
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
          ? [<title key="Minutemailer-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Minutemailer',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Minutemailer.displayName = 'Minutemailer'

Minutemailer.defaultProps = { height: 24, width: 24}

export default Minutemailer
