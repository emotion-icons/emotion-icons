import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M0 32v119.2h64V96h107.2C284.6 96 352 176.2 352 255.9 352 332 293.4 416 171.2 416H0v64h171.2C331.9 480 416 367.3 416 255.9c0-58.7-22.1-113.4-62.3-154.3C308.9 56 245.7 32 171.2 32H0z" key="k0" />
]


const Dyalog = ({ title, ...restProps }) => {
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
          ? [<title key="Dyalog-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 416 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Dyalog',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Dyalog.displayName = 'Dyalog'

Dyalog.defaultProps = { height: undefined, width: undefined}

export default Dyalog
