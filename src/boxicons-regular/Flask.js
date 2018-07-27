import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16 9.824V4h1V2H7v2h1v5.824L4.061 20.658A1 1 0 0 0 5 22h14a.999.999 0 0 0 .939-1.342L16 9.824zM14 4v6c0 .116.021.232.061.342L14.663 12H9.337l.603-1.658c.039-.11.06-.226.06-.342V4h4zM6.428 20l2.182-6h6.781l2.182 6H6.428z" key="k0" />
]


const Flask = ({ title, ...restProps }) => {
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
          ? [<title key="Flask-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Flask',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Flask.displayName = 'Flask'

Flask.defaultProps = { height: 24, width: 24}

export default Flask
