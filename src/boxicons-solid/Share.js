import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11 7.054V4a1 1 0 0 0-1.707-.707l-7 7a.999.999 0 0 0 0 1.414l7 7A.999.999 0 0 0 11 18v-3.096c.284-.02.565-.029.843-.029 5.426 0 8.239 3.572 8.362 3.73a.996.996 0 0 0 1.113.343A1 1 0 0 0 22 18c0-9.124-8.086-10.681-11-10.946z" key="k0" />
]


const Share = ({ title, ...restProps }) => {
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
          ? [<title key="Share-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Share',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Share.displayName = 'Share'

Share.defaultProps = { height: 24, width: 24}

export default Share
