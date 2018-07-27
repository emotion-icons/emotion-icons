import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 6h-8.586l2.293-2.293-1.414-1.414L10 5.586 6.707 2.293 5.293 3.707 7.586 6H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-4 3h3v2h-3V9zm0 6v-2h3v2h-3zM6 18c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2h7c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2H6z" key="k0" />
]


const Tv = ({ title, ...restProps }) => {
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
          ? [<title key="Tv-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Tv',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Tv.displayName = 'Tv'

Tv.defaultProps = { height: 24, width: 24}

export default Tv
