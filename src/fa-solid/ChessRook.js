import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M81.241 215.027C80.957 258.92 77.411 348.076 48 448h287.982c-29.4-99.604-32.936-188.912-33.221-232.975l45.418-42.312a11.998 11.998 0 0 0 3.82-8.78V44c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v44h-48V44c0-6.627-5.373-12-12-12h-72c-6.627 0-12 5.373-12 12v44H96V44c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v119.932c0 3.33 1.384 6.51 3.82 8.78l45.421 42.315zM160 256c0-17.673 14.327-32 32-32 17.673 0 32 14.327 32 32v64.004h-64V256zm224 220v24c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12z" key="k0" />
]


const ChessRook = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="ChessRook-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 384 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ChessRook',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ChessRook.displayName = 'ChessRook'

ChessRook.defaultProps = { height: undefined, width: undefined}

export default ChessRook
