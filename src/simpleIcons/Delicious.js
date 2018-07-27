import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 12H0v12h12V12zM24 0H12v12h12V0z" key="k0" />
]

export const hex='#3399FF'
const Delicious = ({ title, ...restProps }) => {
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
          ? [<title key="Delicious-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Delicious',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Delicious.displayName = 'Delicious'

Delicious.defaultProps = { height: 24, width: 24}

export default Delicious
