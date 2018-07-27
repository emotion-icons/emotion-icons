import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.593 2.087l-8.03 3.576L12 9.882l8.438-4.219-8.03-3.576a1.006 1.006 0 0 0-.815 0zM21.981 17V7.127L13 11.618v10.146l8.398-3.855a.999.999 0 0 0 .583-.909zm-19.962-.009a1 1 0 0 0 .582.908L11 21.764V11.618L2.019 7.127v9.864z" key="k0" />
]


const Cube = ({ title, ...restProps }) => {
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
          ? [<title key="Cube-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Cube',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Cube.displayName = 'Cube'

Cube.defaultProps = { height: 24, width: 24}

export default Cube
