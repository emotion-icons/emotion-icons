import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.993 9.816L12 2.473 7.88 4.997V2.473H4.124v4.819L.004 9.816l1.961 3.202 2.16-1.315v9.826h15.749v-9.826l2.159 1.315 1.96-3.202" key="k0" />
]

export const hex='#00B246'
const Nextdoor = ({ title, ...restProps }) => {
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
          ? [<title key="Nextdoor-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Nextdoor',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Nextdoor.displayName = 'Nextdoor'

Nextdoor.defaultProps = { height: 24, width: 24}

export default Nextdoor
