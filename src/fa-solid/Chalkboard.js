import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M96 64h448v352h64V40c0-22.06-17.94-40-40-40H72C49.94 0 32 17.94 32 40v376h64V64zm528 384H480v-64H288v64H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" key="k0" />
]


const Chalkboard = ({ title, ...restProps }) => {
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
          ? [<title key="Chalkboard-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 640 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Chalkboard',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Chalkboard.displayName = 'Chalkboard'

Chalkboard.defaultProps = { height: undefined, width: undefined}

export default Chalkboard
