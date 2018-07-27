import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 12c0-4.337-3.663-8-8-8v2c3.252 0 6 2.748 6 6s-2.748 6-6 6v1l-.002-1h-.011a5.74 5.74 0 0 1-1.232-.134l-.43 1.953c.546.12 1.106.181 1.662.181h.015C16.338 19.999 20 16.336 20 12z" key="k0" />
,
<path d="M11.975 2L8 5l3.975 3zM4 12c0 .962.175 1.906.519 2.808l1.869-.713a5.835 5.835 0 0 1-.373-2.516l-1.994-.143A7.552 7.552 0 0 0 4 12zm3.778-4.227L6.364 6.357a8.158 8.158 0 0 0-1.85 2.85l1.869.711a6.16 6.16 0 0 1 1.395-2.145zm.416 11.244l.963-1.752a6.214 6.214 0 0 1-1.937-1.676l-1.594 1.209a8.225 8.225 0 0 0 2.568 2.219z" key="k1" />
]


const Rotate = ({ title, ...restProps }) => {
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
          ? [<title key="Rotate-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Rotate',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Rotate.displayName = 'Rotate'

Rotate.defaultProps = { height: 24, width: 24}

export default Rotate
