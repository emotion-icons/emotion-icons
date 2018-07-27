import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.78 12.653a5.22 5.22 0 1 0 0 10.44 5.22 5.22 0 0 0 0-10.44zm-13.56 0a5.22 5.22 0 1 0 .001 10.439 5.22 5.22 0 0 0-.001-10.439zm12-6.525a5.22 5.22 0 1 1-10.44 0 5.22 5.22 0 0 1 10.44 0z" key="k0" />
]

export const hex='#273347'
const Asana = ({ title, ...restProps }) => {
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
          ? [<title key="Asana-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Asana',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Asana.displayName = 'Asana'

Asana.defaultProps = { height: 24, width: 24}

export default Asana
