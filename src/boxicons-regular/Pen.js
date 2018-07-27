import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.696 2.292A.994.994 0 0 0 16.99 2c-.288.015-.521.105-.708.294l-2.49 2.5L11.586 7H7a.998.998 0 0 0-.939.658l-4 11c-.133.365-.042.774.232 1.049l2 2a.997.997 0 0 0 1.049.232l11-4A.998.998 0 0 0 17 17v-4.586l2.207-2.207v-.001h.001l2.5-2.506a.997.997 0 0 0-.002-1.414l-4.01-3.994zm-2.403 9.001A.996.996 0 0 0 15 12v4.3l-9.249 3.363 4.671-4.671c.026.001.052.008.078.008A1.5 1.5 0 1 0 9 13.5c0 .026.007.052.008.078l-4.671 4.671L7.7 9H12c.266 0 .52-.105.707-.293L14.5 6.914 17.086 9.5l-1.793 1.793zm3.206-3.208l-2.586-2.586 1.08-1.085 2.592 2.582-1.086 1.089z" key="k0" />
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
