import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 7h-1V4a1 1 0 0 0-1-1H5c-1.206 0-3 .799-3 3v11c0 2.201 1.794 3 3 3h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-3 8h-2v-3h2v3zM5.012 7C4.55 6.988 4 6.805 4 6s.55-.988 1-1h13v2H5.012z" key="k0" />
]


const Wallet = ({ title, ...restProps }) => {
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
          ? [<title key="Wallet-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Wallet',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Wallet.displayName = 'Wallet'

Wallet.defaultProps = { height: 24, width: 24}

export default Wallet
