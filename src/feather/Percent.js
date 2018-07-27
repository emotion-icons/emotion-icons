import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={19} x2={5} y1={5} y2={19} key="k0" />
,
<circle cx={6.5} cy={6.5} r={2.5} key="k1" />
,
<circle cx={17.5} cy={17.5} r={2.5} key="k2" />
]


const Percent = ({ title, ...restProps }) => {
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
          ? [<title key="Percent-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Percent',
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

Percent.displayName = 'Percent'

Percent.defaultProps = { height: 24, width: 24}

export default Percent
