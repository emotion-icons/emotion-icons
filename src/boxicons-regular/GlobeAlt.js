import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11 18.791V20H9v2h6v-2h-2v-1.845a9.934 9.934 0 0 0 3.071-2.084c3.898-3.898 3.898-10.243 0-14.143l-1.414 1.414c3.119 3.12 3.119 8.195 0 11.314-3.119 3.118-8.195 3.12-11.314 0L1.929 16.07A9.971 9.971 0 0 0 9 18.994a9.98 9.98 0 0 0 2-.203z" key="k0" />
,
<path d="M9 15c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zM9 5c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z" key="k1" />
]


const GlobeAlt = ({ title, ...restProps }) => {
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
          ? [<title key="GlobeAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GlobeAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GlobeAlt.displayName = 'GlobeAlt'

GlobeAlt.defaultProps = { height: 24, width: 24}

export default GlobeAlt
