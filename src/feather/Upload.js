import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" key="k0" />
,
<polyline points="17 8 12 3 7 8" key="k1" />
,
<line x1={12} x2={12} y1={3} y2={15} key="k2" />
]


const Upload = ({ title, ...restProps }) => {
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
          ? [<title key="Upload-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Upload',
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

Upload.displayName = 'Upload'

Upload.defaultProps = { height: 24, width: 24}

export default Upload
