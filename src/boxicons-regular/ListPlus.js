import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 5h18v2H3zm0 4h18v2H3zm0 4h9v2H3zm0 4h9v2H3zm16-1v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937z" key="k0" />
]


const ListPlus = ({ title, ...restProps }) => {
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
          ? [<title key="ListPlus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ListPlus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ListPlus.displayName = 'ListPlus'

ListPlus.defaultProps = { height: 24, width: 24}

export default ListPlus
