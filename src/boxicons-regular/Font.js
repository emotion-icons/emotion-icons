import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13.427 4.624A1.002 1.002 0 0 0 12.5 4h-1a1 1 0 0 0-.926.624L4 20h2.028l2.2-5h7.55l2.203 5H20L13.427 4.624zM9.108 13L12 6.426 14.896 13H9.108z" key="k0" />
]


const Font = ({ title, ...restProps }) => {
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
          ? [<title key="Font-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Font',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Font.displayName = 'Font'

Font.defaultProps = { height: 24, width: 24}

export default Font
