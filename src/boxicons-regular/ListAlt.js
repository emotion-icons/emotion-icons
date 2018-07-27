import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 11h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h3v3H4V6zM3 20h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1zm1-5h3v3H4v-3zm7-11h11v2H11zm0 4h9v2h-9zm0 5h11v2H11zm0 4h9v2h-9z" key="k0" />
]


const ListAlt = ({ title, ...restProps }) => {
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
          ? [<title key="ListAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ListAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ListAlt.displayName = 'ListAlt'

ListAlt.defaultProps = { height: 24, width: 24}

export default ListAlt
