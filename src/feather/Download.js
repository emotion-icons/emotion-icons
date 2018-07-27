import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" key="k0" />
,
<polyline points="7 10 12 15 17 10" key="k1" />
,
<line x1={12} x2={12} y1={15} y2={3} key="k2" />
]


const Download = ({ title, ...restProps }) => {
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
          ? [<title key="Download-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Download',
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

Download.displayName = 'Download'

Download.defaultProps = { height: 24, width: 24}

export default Download
