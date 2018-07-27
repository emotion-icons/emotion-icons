import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11 6v4.268L7.304 8.134l-1 1.732L10 12l-3.695 2.134 1 1.732L11 13.732V18h2v-4.268l3.695 2.134 1-1.732L14 12l3.696-2.134-1-1.732L13 10.268V6z" key="k0" />
]


const Asterisk = ({ title, ...restProps }) => {
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
          ? [<title key="Asterisk-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Asterisk',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Asterisk.displayName = 'Asterisk'

Asterisk.defaultProps = { height: 24, width: 24}

export default Asterisk
