import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="16 16 12 12 8 16" key="k0" />
,
<line x1={12} x2={12} y1={12} y2={21} key="k1" />
,
<path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" key="k2" />
,
<polyline points="16 16 12 12 8 16" key="k3" />
]


const UploadCloud = ({ title, ...restProps }) => {
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
          ? [<title key="UploadCloud-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-UploadCloud',
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

UploadCloud.displayName = 'UploadCloud'

UploadCloud.defaultProps = { height: 24, width: 24}

export default UploadCloud
