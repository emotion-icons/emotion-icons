import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.79 13.387A1 1 0 0 0 19 13c-3.867 0-8-2.102-8-8a1 1 0 0 0-1.256-.967C6.416 4.916 4 8.285 4 12.043c0 4.411 3.589 8 8 8 3.818 0 7.096-2.383 7.969-5.795.076-.3.01-.617-.179-.861zM12 18.043c-3.309 0-6-2.691-6-6 0-2.386 1.24-4.557 3.078-5.595.528 4.781 3.705 7.953 8.489 8.476-1.019 1.861-3.181 3.119-5.567 3.119z" key="k0" />
]


const Moon = ({ title, ...restProps }) => {
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
          ? [<title key="Moon-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Moon',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Moon.displayName = 'Moon'

Moon.defaultProps = { height: 24, width: 24}

export default Moon
