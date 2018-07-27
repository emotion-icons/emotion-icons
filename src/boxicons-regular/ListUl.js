import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8 5h12v2H8z" key="k0" />
,
<path d="M8 5h12v2H8zm0 6h12v2H8zm0 6h12v2H8zM4 5h2v2H4z" key="k1" />
,
<path d="M4 5h2v2H4zm0 6h2v2H4zm0 6h2v2H4z" key="k2" />
]


const ListUl = ({ title, ...restProps }) => {
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
          ? [<title key="ListUl-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ListUl',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ListUl.displayName = 'ListUl'

ListUl.defaultProps = { height: 24, width: 24}

export default ListUl
