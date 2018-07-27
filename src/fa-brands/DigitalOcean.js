import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M256 504v-96.1c101.8 0 180.8-100.9 141.7-208-14.3-39.6-46.1-71.4-85.8-85.7-107.1-38.8-208.1 39.9-208.1 141.7H8C8 93.7 164.9-32.8 335 20.3c74.2 23.3 133.6 82.4 156.6 156.6C544.8 347.2 418.6 504 256 504zm.3-191.4h-95.6v95.6h95.6v-95.6zm-95.6 95.6H87v73.6h73.7v-73.6zM87 346.6H25.4v61.6H87v-61.6z" key="k0" />
]


const DigitalOcean = ({ title, ...restProps }) => {
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
          ? [<title key="DigitalOcean-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DigitalOcean',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

DigitalOcean.displayName = 'DigitalOcean'

DigitalOcean.defaultProps = { height: undefined, width: undefined}

export default DigitalOcean
