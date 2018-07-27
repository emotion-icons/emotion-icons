import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M6 9H3V7h3V4l5 4-5 4V9zm8-7v12c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v12h12V2z" key="k0" />
]


const DiffRenamed = ({ title, ...restProps }) => {
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
          ? [<title key="DiffRenamed-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 14 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DiffRenamed',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

DiffRenamed.displayName = 'DiffRenamed'

DiffRenamed.defaultProps = { height: 16, width: 14}

export default DiffRenamed
