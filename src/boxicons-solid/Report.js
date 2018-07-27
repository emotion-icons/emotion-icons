import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.707 8.293l-6-5A.996.996 0 0 0 14 3H4a1 1 0 0 0-1 1v16c0 .553.415 1 .968 1h16a1 1 0 0 0 1-1L21 9a.996.996 0 0 0-.293-.707zM9 18H7v-7h2v7zm4 0h-2v-5h2v5zm4 0h-2v-3h2v3zm-3-8a1 1 0 0 1-1-1V5l6 5h-5z" key="k0" />
]


const Report = ({ title, ...restProps }) => {
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
          ? [<title key="Report-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Report',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Report.displayName = 'Report'

Report.defaultProps = { height: 24, width: 24}

export default Report
