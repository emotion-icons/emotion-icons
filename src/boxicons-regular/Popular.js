import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13 18V6h3l-4-4-4 4h3v12z" key="k0" />
,
<path d="M7 8h2v10H7zm8 4h2v6h-2zm4 2h2v4h-2zM3 15h2v3H3zm0 5h18v2H3z" key="k1" />
]


const Popular = ({ title, ...restProps }) => {
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
          ? [<title key="Popular-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Popular',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Popular.displayName = 'Popular'

Popular.defaultProps = { height: 24, width: 24}

export default Popular
