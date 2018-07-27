import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M24 18.185v2.274h-4.89v-2.274H24zm-24-.106h11.505v2.274H0v-2.279.005zm12.89 0h4.89v2.274h-4.89v-2.279.005zm6.221-3.607H24v2.274h-4.89l.001-2.274zM0 14.367h11.505v2.274H0v-2.274zm12.89 0h4.89v2.274h-4.89v-2.274zm6.221-3.346H24v2.273h-4.89l.001-2.273zM0 10.916h11.505v2.271H0v-2.271zm12.89 0h4.89v2.271h-4.89v-2.271zm6.22-3.609H24v2.279h-4.89V7.307zM0 7.206h11.505V9.48H0V7.201v.005zm12.89 0h4.89V9.48h-4.89V7.201v.005zm6.221-3.556H24v2.276h-4.89v-2.28l.001.004zM0 3.541h11.505v2.274H0V3.541zm12.89 0h4.89v2.274h-4.89V3.541z" key="k0" />
]

export const hex='#E7282D'
const ServerFault = ({ title, ...restProps }) => {
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
          ? [<title key="ServerFault-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ServerFault',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ServerFault.displayName = 'ServerFault'

ServerFault.defaultProps = { height: 24, width: 24}

export default ServerFault
