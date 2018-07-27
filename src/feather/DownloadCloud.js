import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="8 17 12 21 16 17" key="k0" />
,
<line x1={12} x2={12} y1={12} y2={21} key="k1" />
,
<path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" key="k2" />
]


const DownloadCloud = ({ title, ...restProps }) => {
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
          ? [<title key="DownloadCloud-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DownloadCloud',
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

DownloadCloud.displayName = 'DownloadCloud'

DownloadCloud.defaultProps = { height: 24, width: 24}

export default DownloadCloud
