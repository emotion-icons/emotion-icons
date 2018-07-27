import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M128 176h256v128H128z" key="k0" />
,
<path d="M448 96H64c-8.8 0-16 7.2-16 16v256c0 8.8 6.9 16 15.8 16H448c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16zm-32 240H96V144h320v192zM80 464h57l22.5-64h-56.4zM279.4 48h-46.8l-11.5 32h69.8zM375 464h57l-23-64h-56.5zm-143-64h48v32h-48z" key="k1" />
]


const Easel = ({ title, ...restProps }) => {
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
          ? [<title key="Easel-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Easel',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Easel.displayName = 'Easel'

Easel.defaultProps = { height: undefined, width: undefined}

export default Easel
