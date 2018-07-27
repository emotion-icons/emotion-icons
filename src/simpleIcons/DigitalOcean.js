import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M.836 19.365H.832V16.38h2.985v2.985H7.38V14.73h4.635v4.62c4.927-.006 8.73-4.883 6.852-10.066a6.956 6.956 0 0 0-4.15-4.146C9.527 3.255 4.647 7.068 4.647 12H0C0 4.144 7.59-1.976 15.824.595a11.602 11.602 0 0 1 7.58 7.58C25.974 16.41 19.858 24 12 24v-4.635H7.377v3.56h-3.56v-3.56H.833h.002z" key="k0" />
]

export const hex='#0080FF'
const DigitalOcean = ({ title, ...restProps }) => {
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
          ? [<title key="DigitalOcean-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
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

DigitalOcean.defaultProps = { height: 24, width: 24}

export default DigitalOcean
