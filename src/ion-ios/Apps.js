import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M434.8 137.6L285.4 69.5c-16.2-7.4-42.7-7.4-58.9 0L77.2 137.6c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1zM225.2 375.2l-99.8-45.5c-4.2-1.9-9.1-1.9-13.3 0l-34.9 15.9c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-34.9-15.9c-4.2-1.9-9.1-1.9-13.3 0l-99.8 45.5c-16.9 7.7-44.7 7.7-61.6 0z" key="k0" />
,
<path d="M434.8 241.6l-31.7-14.4c-4.2-1.9-9-1.9-13.2 0l-108 48.9c-15.3 5.2-36.6 5.2-51.9 0l-108-48.9c-4.2-1.9-9-1.9-13.2 0l-31.7 14.4c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.9 7.7 44.7 7.7 61.6 0l148-67.5c17.7-8 17.7-21.1.1-29.1z" key="k1" />
]


const Apps = ({ title, ...restProps }) => {
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
          ? [<title key="Apps-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Apps',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Apps.displayName = 'Apps'

Apps.defaultProps = { height: undefined, width: undefined}

export default Apps
