import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" key="k0" />
,
<polyline points="14 2 14 8 20 8" key="k1" />
,
<line x1={16} x2={8} y1={13} y2={13} key="k2" />
,
<line x1={16} x2={8} y1={17} y2={17} key="k3" />
,
<polyline points="10 9 9 9 8 9" key="k4" />
]


const FileText = ({ title, ...restProps }) => {
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
          ? [<title key="FileText-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FileText',
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

FileText.displayName = 'FileText'

FileText.defaultProps = { height: 24, width: 24}

export default FileText
