import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M464 48s-19.8 1.4-53.1 27.2c-15.5 12-162.2 120.6-162.2 120.6L89 187.9l-41 36.5 102 51.2-8 10.1-81.6 4.1-6.7 33.6 60.6 47.2-26.7 53.6 53.7-26.5 47.3 60.6 33.6-6.7 4.1-81.6 10.1-7.9L287.6 464l36.5-40.9-7.9-159.7s108.6-146.7 120.6-162C462.7 67.8 464 48 464 48z" key="k0" />
]


const Jet = ({ title, ...restProps }) => {
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
          ? [<title key="Jet-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Jet',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Jet.displayName = 'Jet'

Jet.defaultProps = { height: undefined, width: undefined}

export default Jet
