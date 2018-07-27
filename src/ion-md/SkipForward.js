import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M64 64v384l277.3-192L64 64zm320 0h64v384h-64z" key="k0" />
]


const SkipForward = ({ title, ...restProps }) => {
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
          ? [<title key="SkipForward-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SkipForward',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SkipForward.displayName = 'SkipForward'

SkipForward.defaultProps = { height: undefined, width: undefined}

export default SkipForward
