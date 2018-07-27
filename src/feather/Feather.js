import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" key="k0" />
,
<line x1={16} x2={2} y1={8} y2={22} key="k1" />
,
<line x1={17} x2={9} y1={15} y2={15} key="k2" />
]


const Feather = ({ title, ...restProps }) => {
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
          ? [<title key="Feather-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Feather',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "none",
  "stroke": "currentColor",
  "strokeLinecap": "round",
  "strokeLinejoin": "round",
      ...restProps
    }
    )
  }

Feather.displayName = 'Feather'

Feather.defaultProps = { height: 24, width: 24}

export default Feather
