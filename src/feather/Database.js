import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<ellipse cx={12} cy={5} rx={9} ry={3} key="k0" />
,
<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" key="k1" />
,
<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" key="k2" />
]


const Database = ({ title, ...restProps }) => {
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
          ? [<title key="Database-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Database',
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

Database.displayName = 'Database'

Database.defaultProps = { height: 24, width: 24}

export default Database
