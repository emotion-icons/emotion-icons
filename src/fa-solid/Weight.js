import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M448 64h-26c16.4 28.3 26 61 26 96 0 105.9-86.1 192-192 192S64 265.9 64 160c0-35 9.6-67.7 26-96H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM256 320c88.4 0 160-71.6 160-160S344.4 0 256 0 96 71.6 96 160s71.6 160 160 160zm-.3-151.9l33.6-78.4c3.5-8.2 12.9-11.9 21-8.4s11.9 12.9 8.4 21L285 180.9c6.7 7.1 10.9 16.6 10.9 27.1 0 22.1-17.9 40-40 40s-40-17.9-40-40c.1-22 17.9-39.8 39.8-39.9z" key="k0" />
]


const Weight = ({ title, ...restProps }) => {
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
          ? [<title key="Weight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Weight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Weight.displayName = 'Weight'

Weight.defaultProps = { height: undefined, width: undefined}

export default Weight
