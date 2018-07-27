import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M9 20h6v2H9zm3-18C8.141 2 5 5.141 5 9c0 2.285 1.067 3.528 2.101 4.73.358.418.729.851 1.084 1.349.202.291.59 1.737.831 3.096l.146.825h5.675l.147-.824c.243-1.36.633-2.81.834-3.101.353-.503.727-.94 1.088-1.363C17.936 12.506 19 11.259 19 9c0-3.859-3.141-7-7-7zm2.836 6.836A2.84 2.84 0 0 0 12 6V4a4.84 4.84 0 0 1 4.836 4.836h-2z" key="k0" />
]


const Bulb = ({ title, ...restProps }) => {
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
          ? [<title key="Bulb-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bulb',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bulb.displayName = 'Bulb'

Bulb.defaultProps = { height: 24, width: 24}

export default Bulb
