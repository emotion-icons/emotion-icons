import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M372 175.2c0-19.5-1-81.7-19.3-115.6-4.5-8.2-9.5-11.6-28.7-11.6H188c-19.3 0-24.2 3.4-28.7 11.6-18.3 33.9-19.3 96.5-19.3 116 0 91 36 93.1 36 167.8 0 36.7-16 66.7-16 92.7 0 25.1 6 27.8 29 27.8h134c23 0 29-2.9 29-27.9 0-26-16-55.7-16-92.4 0-74.7 36-77.4 36-168.4zM188 76h136c2.4 0 4.3.1 5.7.2 5.4 11.6 9.4 29.3 11.8 50.8h-171c2.4-21.6 6.5-39.3 11.8-50.8 1.4-.1 3.3-.2 5.7-.2z" key="k0" />
]


const Pint = ({ title, ...restProps }) => {
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
          ? [<title key="Pint-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Pint',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Pint.displayName = 'Pint'

Pint.defaultProps = { height: undefined, width: undefined}

export default Pint
