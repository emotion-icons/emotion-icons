import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9c0-.016-.009-.028-.01-.043a.989.989 0 0 0-.072-.327c-.013-.031-.024-.061-.04-.09a.998.998 0 0 0-.237-.309l-6-5a1.002 1.002 0 0 0-.276-.158c-.03-.012-.063-.017-.094-.026a1.025 1.025 0 0 0-.219-.038C14.034 3.008 14.018 3 14 3H4a1 1 0 0 0-1 1v16zM15 6.136L17.237 8H15V6.136zM5 5h8v4a1 1 0 0 0 1 1h5v9H5V5z" key="k0" />
,
<path d="M7 10h2v7H7zm4 2h2v5h-2zm4 2h2v3h-2z" key="k1" />
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
