import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M88 216c81.7 10.2 273.7 102.3 304 232H0c99.5-8.1 184.5-137 88-232zm32-152c32.3 35.6 47.7 83.9 46.4 133.6C249.3 231.3 373.7 321.3 400 448h96C455.3 231.9 222.8 79.5 120 64z" key="k0" />
]


const Servicestack = ({ title, ...restProps }) => {
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
          ? [<title key="Servicestack-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 496 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Servicestack',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Servicestack.displayName = 'Servicestack'

Servicestack.defaultProps = { height: undefined, width: undefined}

export default Servicestack
