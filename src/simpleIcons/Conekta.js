import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.25 19.502L2.7 12l5.55-7.5 3.45 4.65L9.447 12l2.25 3-3.45 4.502z" key="k0" />
,
<path d="M12.45 24l8.85-12-8.85-12h-6.9l9 12-9 12h6.9z" key="k1" />
]

export const hex='#414959'
const Conekta = ({ title, ...restProps }) => {
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
          ? [<title key="Conekta-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Conekta',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Conekta.displayName = 'Conekta'

Conekta.defaultProps = { height: 24, width: 24}

export default Conekta
