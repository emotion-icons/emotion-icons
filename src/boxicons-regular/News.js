import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3H2.99a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H3.99V5H20v14z" key="k0" />
,
<path d="M7 13h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm1-4h3v2H8V9zm-2 6h12v2H6zm9-8h3v2h-3zm0 4h3v2h-3z" key="k1" />
]


const News = ({ title, ...restProps }) => {
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
          ? [<title key="News-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-News',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

News.displayName = 'News'

News.defaultProps = { height: 24, width: 24}

export default News
