import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.015.624L9.19 9.293H0l7.445 5.384-2.819 8.673L12 17.986l7.422 5.393-2.835-8.713L24 9.292h-9.162L12.015.622v.002z" key="k0" />
]

export const hex='#E21A2C'
const Macys = ({ title, ...restProps }) => {
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
          ? [<title key="Macys-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Macys',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Macys.displayName = 'Macys'

Macys.defaultProps = { height: 24, width: 24}

export default Macys
