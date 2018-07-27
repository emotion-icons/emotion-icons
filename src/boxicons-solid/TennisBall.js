import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15 12c0-3.02 1.499-5.689 3.787-7.323C17.002 3.021 14.621 2 12 2S6.998 3.021 5.213 4.677C7.501 6.311 9 8.98 9 12s-1.499 5.689-3.787 7.323C6.998 20.979 9.379 22 12 22s5.002-1.021 6.787-2.677C16.499 17.689 15 15.02 15 12z" key="k0" />
,
<path d="M17 12a6.995 6.995 0 0 0 3.116 5.819 9.927 9.927 0 0 0 0-11.638A6.997 6.997 0 0 0 17 12zM3.884 17.819C5.761 16.563 7 14.424 7 12S5.761 7.438 3.884 6.181a9.927 9.927 0 0 0 0 11.638z" key="k1" />
]


const TennisBall = ({ title, ...restProps }) => {
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
          ? [<title key="TennisBall-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TennisBall',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TennisBall.displayName = 'TennisBall'

TennisBall.defaultProps = { height: 24, width: 24}

export default TennisBall
