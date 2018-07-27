import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3H2.99A.991.991 0 0 0 2 4v16c0 .553.438 1 .99 1H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM5 12V7h7v6H5v-1zm14 5H5v-2h14v2zm0-4h-5v-2h5v2zm0-4h-5V7h5v2z" key="k0" />
,
<path d="M7 9h3v2H7z" key="k1" />
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
