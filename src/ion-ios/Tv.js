import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M451.7 78H60.3C34.8 78 14 98.8 14 124.3v215.5c0 25.5 20.8 46.3 46.3 46.3h391.5c25.5 0 46.3-20.8 46.3-46.3V124.3C498 98.8 477.2 78 451.7 78zM470 339.7c0 10.1-8.2 18.3-18.3 18.3H60.3c-10.1 0-18.3-8.2-18.3-18.3V124.3c0-10.1 8.2-18.3 18.3-18.3h391.5c10.1 0 18.3 8.2 18.3 18.3v215.4z" key="k0" />
,
<path d="M436 128H76c-6.6 0-12 5.4-12 12v184c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12V140c0-6.6-5.4-12-12-12zm-66 278H142c-7.7 0-14 6.3-14 14s6.3 14 14 14h228c7.7 0 14-6.3 14-14s-6.3-14-14-14z" key="k1" />
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
      viewBox: '0 0 512 512',
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

Tv.defaultProps = { height: undefined, width: undefined}

export default Tv
