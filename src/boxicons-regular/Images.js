import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM8 4h12v10.4L16 8l-3.636 5.818L11 12l-3 4V4z" key="k0" />
,
<path d="M4 8H2v13a1 1 0 0 0 1 1h13v-2H4V8z" key="k1" />
,
<circle cx={11.5} cy={7.5} r={1.5} key="k2" />
]


const Images = ({ title, ...restProps }) => {
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
          ? [<title key="Images-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Images',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Images.displayName = 'Images'

Images.defaultProps = { height: 24, width: 24}

export default Images
