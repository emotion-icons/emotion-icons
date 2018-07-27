import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V468c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V316.4c64.1-14.5 112-71.9 112-140.4zm-144 80c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" key="k0" />
]


const Neuter = ({ title, ...restProps }) => {
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
          ? [<title key="Neuter-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 288 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Neuter',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Neuter.displayName = 'Neuter'

Neuter.defaultProps = { height: undefined, width: undefined}

export default Neuter
