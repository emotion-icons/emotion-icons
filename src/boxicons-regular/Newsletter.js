import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.755 8.359l.008-.007L21 7.454V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4.586l-.707.707.006.006A.986.986 0 0 0 2 9v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a.996.996 0 0 0-.245-.641zM19 4v5.44l-7 6.222L5 9.44V4h14zm1 16H4v-8.773l7.336 6.521a.996.996 0 0 0 1.328 0L20 11.227V20z" key="k0" />
,
<path d="M12 6h5v2h-5zM7 6h3v2H7zm2 4h6v2H9z" key="k1" />
]


const Newsletter = ({ title, ...restProps }) => {
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
          ? [<title key="Newsletter-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Newsletter',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Newsletter.displayName = 'Newsletter'

Newsletter.defaultProps = { height: 24, width: 24}

export default Newsletter
