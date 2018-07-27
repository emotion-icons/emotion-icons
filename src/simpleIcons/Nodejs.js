import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.435.153l-9.37 5.43c-.35.203-.564.578-.563.983V17.43c0 .404.215.78.564.982l9.37 5.435c.35.203.78.203 1.13 0l9.366-5.433a1.14 1.14 0 0 0 .565-.982V6.566c0-.404-.216-.78-.566-.984L12.567.152a1.124 1.124 0 0 0-1.13 0" key="k0" />
]

export const hex='#339933'
const Nodejs = ({ title, ...restProps }) => {
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
          ? [<title key="Nodejs-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Nodejs',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Nodejs.displayName = 'Nodejs'

Nodejs.defaultProps = { height: 24, width: 24}

export default Nodejs
