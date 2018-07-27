import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={8} x2={21} y1={6} y2={6} key="k0" />
,
<line x1={8} x2={21} y1={12} y2={12} key="k1" />
,
<line x1={8} x2={21} y1={18} y2={18} key="k2" />
,
<line x1={3} x2={3} y1={6} y2={6} key="k3" />
,
<line x1={3} x2={3} y1={12} y2={12} key="k4" />
,
<line x1={3} x2={3} y1={18} y2={18} key="k5" />
]


const List = ({ title, ...restProps }) => {
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
          ? [<title key="List-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-List',
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

List.displayName = 'List'

List.defaultProps = { height: 24, width: 24}

export default List
