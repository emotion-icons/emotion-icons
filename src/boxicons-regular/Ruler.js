import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 17h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm1-8h2v3h2V9h2v4h2V9h2v3h2V9h2v6H5V9z" key="k0" />
]


const Ruler = ({ title, ...restProps }) => {
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
          ? [<title key="Ruler-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Ruler',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Ruler.displayName = 'Ruler'

Ruler.defaultProps = { height: 24, width: 24}

export default Ruler
