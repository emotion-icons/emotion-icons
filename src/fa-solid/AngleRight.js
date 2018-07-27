import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" key="k0" />
]


const AngleRight = ({ title, ...restProps }) => {
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
          ? [<title key="AngleRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 256 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AngleRight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AngleRight.displayName = 'AngleRight'

AngleRight.defaultProps = { height: undefined, width: undefined}

export default AngleRight
