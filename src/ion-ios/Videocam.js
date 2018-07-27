import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M450.6 153.6c-3.3 0-6.5.9-9.3 2.7l-86.5 54.6c-2.5 1.6-4 4.3-4 7.2v76c0 2.9 1.5 5.6 4 7.2l86.5 54.6c2.8 1.7 6 2.7 9.3 2.7h20.8c4.8 0 8.6-3.8 8.6-8.5v-188c0-4.7-3.9-8.5-8.6-8.5h-20.8zM273.5 384h-190C55.2 384 32 360.8 32 332.6V179.4c0-28.3 23.2-51.4 51.4-51.4h190c28.3 0 51.4 23.2 51.4 51.4v153.1c.1 28.3-23 51.5-51.3 51.5z" key="k0" />
]


const Videocam = ({ title, ...restProps }) => {
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
          ? [<title key="Videocam-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Videocam',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Videocam.displayName = 'Videocam'

Videocam.defaultProps = { height: undefined, width: undefined}

export default Videocam
