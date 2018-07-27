import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" key="k0" />
,
<circle cx={5} cy={19} r={1} key="k1" />
]


const Rss = ({ title, ...restProps }) => {
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
          ? [<title key="Rss-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Rss',
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

Rss.displayName = 'Rss'

Rss.defaultProps = { height: 24, width: 24}

export default Rss
