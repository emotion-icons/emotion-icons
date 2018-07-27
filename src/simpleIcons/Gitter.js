import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.501 4.001H10.5V24H8.501V4.001zm6.999 0V24h-2V4.001h2zM3.5 0h2.001v15H3.5V0zm15 4.001h2V15h-2V4.001z" key="k0" />
]

export const hex='#ED1965'
const Gitter = ({ title, ...restProps }) => {
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
          ? [<title key="Gitter-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Gitter',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Gitter.displayName = 'Gitter'

Gitter.defaultProps = { height: 24, width: 24}

export default Gitter
