import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M576 304v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48zm-48-80a79.557 79.557 0 0 1 30.777 6.165L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L17.223 230.165A79.557 79.557 0 0 1 48 224h480zm-48 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm-96 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z" key="k0" />
]


const Hdd = ({ title, ...restProps }) => {
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
          ? [<title key="Hdd-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 576 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hdd',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hdd.displayName = 'Hdd'

Hdd.defaultProps = { height: undefined, width: undefined}

export default Hdd
