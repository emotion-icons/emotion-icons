import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M258.9 330.7H154.3V480H0V32h109.5v104.5l305.1 85.6V480H258.9V330.7z" key="k0" />
]


const Houzz = ({ title, ...restProps }) => {
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
          ? [<title key="Houzz-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 414 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Houzz',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Houzz.displayName = 'Houzz'

Houzz.defaultProps = { height: undefined, width: undefined}

export default Houzz
