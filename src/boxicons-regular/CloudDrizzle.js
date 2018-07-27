import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8 13h2v3H8zm0 4h2v3H8zm3-2h2v3h-2zm0 4h2v3h-2zm3-6h2v3h-2zm0 4h2v3h-2z" key="k0" />
,
<path d="M18.944 10.112C18.507 6.67 15.56 4 12 4 9.245 4 6.85 5.611 5.757 8.15 3.609 8.792 2 10.819 2 13c0 2.757 2.243 5 5 5v-2c-1.654 0-3-1.346-3-3 0-1.403 1.199-2.756 2.673-3.015l.582-.103.191-.559C8.149 7.273 9.895 6 12 6c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-1v2h1c2.206 0 4-1.794 4-4a4.008 4.008 0 0 0-3.056-3.888z" key="k1" />
]


const CloudDrizzle = ({ title, ...restProps }) => {
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
          ? [<title key="CloudDrizzle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CloudDrizzle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CloudDrizzle.displayName = 'CloudDrizzle'

CloudDrizzle.defaultProps = { height: 24, width: 24}

export default CloudDrizzle
