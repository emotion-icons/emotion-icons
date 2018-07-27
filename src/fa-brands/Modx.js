import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M356 241.8l36.7 23.7V480l-133-83.8L356 241.8zM440 75H226.3l-23 37.8 153.5 96.5L440 75zm-89 142.8L55.2 32v214.5l46 29L351 217.8zM97 294.2L8 437h213.7l125-200.5L97 294.2z" key="k0" />
]


const Modx = ({ title, ...restProps }) => {
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
          ? [<title key="Modx-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 448 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Modx',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Modx.displayName = 'Modx'

Modx.defaultProps = { height: undefined, width: undefined}

export default Modx
