import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M416 256c0-51.001-24.004-96.001-60.996-125L336 16H176l-19.004 115C120.004 159.999 96 204.999 96 256c0 50.996 24.004 95.996 60.996 125L176 496h160l19.004-115C391.996 351.996 416 306.996 416 256zm-280 0c0-66.001 54.004-120 120-120s120 53.999 120 120c0 65.996-54.004 120-120 120s-120-54.004-120-120z" key="k0" />
]


const Watch = ({ title, ...restProps }) => {
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
          ? [<title key="Watch-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Watch',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Watch.displayName = 'Watch'

Watch.defaultProps = { height: undefined, width: undefined}

export default Watch
