import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 288c-45.443 0-83.675 26.076-102.205 64h204.41c-18.53-37.924-56.762-64-102.205-64z" key="k0" />
,
<path d="M256 48C140.563 48 48 141.6 48 256s92.563 208 208 208 208-93.6 208-208S370.401 48 256 48zm0 374.4c-91.518 0-166.404-74.883-166.404-166.4 0-91.518 74.887-166.4 166.404-166.4S422.404 164.482 422.404 256 347.518 422.4 256 422.4z" key="k1" />
,
<path d="M328.8 235.2c17.683 0 31.201-13.518 31.201-31.2s-13.519-31.2-31.201-31.2c-17.682 0-31.2 13.518-31.2 31.2s13.518 31.2 31.2 31.2zm-145.6 0c17.682 0 31.2-13.518 31.2-31.2s-13.519-31.2-31.2-31.2c-17.683 0-31.201 13.518-31.201 31.2s13.519 31.2 31.201 31.2z" key="k2" />
]


const Sad = ({ title, ...restProps }) => {
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
          ? [<title key="Sad-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Sad',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Sad.displayName = 'Sad'

Sad.defaultProps = { height: undefined, width: undefined}

export default Sad
