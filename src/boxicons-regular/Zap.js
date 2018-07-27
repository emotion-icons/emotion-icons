import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3.029 12.241a1 1 0 0 0 .729.729l6.997 1.75-1.717 6.006a1 1 0 0 0 1.631 1.017l10-9a1 1 0 0 0-.427-1.713l-6.997-1.75 1.717-6.006a1 1 0 0 0-1.631-1.018l-10 9a1.004 1.004 0 0 0-.302.985zm9.054-6.17l-1.045 3.654a.997.997 0 0 0 .72 1.244l6.176 1.545-6.017 5.414 1.045-3.654a.997.997 0 0 0-.72-1.244l-6.176-1.545 6.017-5.414z" key="k0" />
]


const Zap = ({ title, ...restProps }) => {
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
          ? [<title key="Zap-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Zap',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Zap.displayName = 'Zap'

Zap.defaultProps = { height: 24, width: 24}

export default Zap
