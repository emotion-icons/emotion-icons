import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.144 20.572H3.43A3.427 3.427 0 0 0 6.856 24h10.286a3.428 3.428 0 0 0 3.428-3.428V6.492a.123.123 0 0 0-.124-.125h-3.18a.125.125 0 0 0-.123.126v14.08zm0-20.572a3.429 3.429 0 0 1 3.427 3.43H6.858v14.078a.126.126 0 0 1-.125.125H3.554a.125.125 0 0 1-.125-.125V3.428A3.429 3.429 0 0 1 6.856 0h10.287" key="k0" />
]

export const hex='#0CAA41'
const Glassdoor = ({ title, ...restProps }) => {
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
          ? [<title key="Glassdoor-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Glassdoor',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Glassdoor.displayName = 'Glassdoor'

Glassdoor.defaultProps = { height: 24, width: 24}

export default Glassdoor
