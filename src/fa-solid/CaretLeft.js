import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z" key="k0" />
]


const CaretLeft = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="CaretLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 192 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CaretLeft',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CaretLeft.displayName = 'CaretLeft'

CaretLeft.defaultProps = { height: undefined, width: undefined}

export default CaretLeft
