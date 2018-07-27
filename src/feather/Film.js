import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={20} height={20} x={2} y={2} rx={2.18} ry={2.18} key="k0" />
,
<line x1={7} x2={7} y1={2} y2={22} key="k1" />
,
<line x1={17} x2={17} y1={2} y2={22} key="k2" />
,
<line x1={2} x2={22} y1={12} y2={12} key="k3" />
,
<line x1={2} x2={7} y1={7} y2={7} key="k4" />
,
<line x1={2} x2={7} y1={17} y2={17} key="k5" />
,
<line x1={17} x2={22} y1={17} y2={17} key="k6" />
,
<line x1={17} x2={22} y1={7} y2={7} key="k7" />
]


const Film = ({ title, ...restProps }) => {
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
          ? [<title key="Film-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Film',
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

Film.displayName = 'Film'

Film.defaultProps = { height: 24, width: 24}

export default Film
