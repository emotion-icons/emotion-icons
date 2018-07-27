import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M476.1 249.3L268 129.1c-5.4-3.1-12.3.6-12.3 6.7V251L44.3 129.1c-5.4-3.1-12.3.6-12.3 6.7v240.3c0 6.1 6.9 9.8 12.3 6.7L255.6 261v115.2c0 6.1 6.9 9.8 12.3 6.7L476 262.7c5.3-3 5.3-10.4.1-13.4z" key="k0" />
]


const Fastforward = ({ title, ...restProps }) => {
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
          ? [<title key="Fastforward-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Fastforward',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Fastforward.displayName = 'Fastforward'

Fastforward.defaultProps = { height: undefined, width: undefined}

export default Fastforward
