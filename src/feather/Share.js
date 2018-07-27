import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" key="k0" />
,
<polyline points="16 6 12 2 8 6" key="k1" />
,
<line x1={12} x2={12} y1={2} y2={15} key="k2" />
]


const Share = ({ title, ...restProps }) => {
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
          ? [<title key="Share-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Share',
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

Share.displayName = 'Share'

Share.defaultProps = { height: 24, width: 24}

export default Share
