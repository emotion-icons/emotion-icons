import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M170.7 256L448 448V64L170.7 256zM64 64h64v384H64z" key="k0" />
]


const SkipBackward = ({ title, ...restProps }) => {
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
          ? [<title key="SkipBackward-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SkipBackward',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SkipBackward.displayName = 'SkipBackward'

SkipBackward.defaultProps = { height: undefined, width: undefined}

export default SkipBackward
