import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.587 6.999H7.001a.998.998 0 0 0-.939.658l-4 11c-.133.365-.042.774.232 1.049l.293.293 6.422-6.422c-.001-.026-.008-.052-.008-.078a1.5 1.5 0 1 1 1.5 1.5c-.026 0-.052-.007-.078-.008l-6.422 6.422.293.293a.997.997 0 0 0 1.049.232l11-4a.998.998 0 0 0 .658-.939v-4.586L19 10.414 13.586 5l-1.999 1.999zm6.11-4.708a.996.996 0 0 0-.706-.292c-.288.015-.521.105-.708.294l-1.285 1.291 5.415 5.415 1.296-1.3a.999.999 0 0 0-.002-1.414l-4.01-3.994z" key="k0" />
]


const Pen = ({ title, ...restProps }) => {
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
          ? [<title key="Pen-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Pen',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Pen.displayName = 'Pen'

Pen.defaultProps = { height: 24, width: 24}

export default Pen
