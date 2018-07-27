import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zm-2-5H3V7h8v2z" key="k0" />
]


const DiffRemoved = ({ title, ...restProps }) => {
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
          ? [<title key="DiffRemoved-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 14 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DiffRemoved',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

DiffRemoved.displayName = 'DiffRemoved'

DiffRemoved.defaultProps = { height: 16, width: 14}

export default DiffRemoved
