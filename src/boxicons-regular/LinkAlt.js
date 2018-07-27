import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7 17h4v-2H7c-1.654 0-3-1.346-3-3s1.346-3 3-3h4V7H7c-2.757 0-5 2.243-5 5s2.243 5 5 5zM17 7h-4v2h4c1.654 0 3 1.346 3 3s-1.346 3-3 3h-4v2h4c2.757 0 5-2.243 5-5s-2.243-5-5-5z" key="k0" />
,
<path d="M6 11h12v2H6z" key="k1" />
]


const LinkAlt = ({ title, ...restProps }) => {
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
          ? [<title key="LinkAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LinkAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LinkAlt.displayName = 'LinkAlt'

LinkAlt.defaultProps = { height: 24, width: 24}

export default LinkAlt
