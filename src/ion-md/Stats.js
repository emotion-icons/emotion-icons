import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M176 64h64v384h-64zM80 336h64v112H80zm192-64h64v176h-64zm96-96h64v272h-64z" key="k0" />
]


const Stats = ({ title, ...restProps }) => {
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
          ? [<title key="Stats-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Stats',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Stats.displayName = 'Stats'

Stats.defaultProps = { height: undefined, width: undefined}

export default Stats
