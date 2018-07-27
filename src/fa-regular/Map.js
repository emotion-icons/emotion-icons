import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M508.505 36.17L381.517 92.576 207.179 34.463a47.992 47.992 0 0 0-34.674 1.674l-144 64A48 48 0 0 0 0 144v287.967c0 34.938 35.991 57.864 67.495 43.863l126.988-56.406 174.339 58.113a47.992 47.992 0 0 0 34.674-1.674l144-64A48 48 0 0 0 576 368V80.033c0-34.938-35.991-57.864-67.495-43.863zM360 424l-144-48V88l144 48v288zm-312 8V144l120-53.333v288L48 432zm480-64l-120 53.333v-288L528 80v288z" key="k0" />
]


const Map = ({ title, ...restProps }) => {
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
          ? [<title key="Map-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 576 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Map',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Map.displayName = 'Map'

Map.defaultProps = { height: undefined, width: undefined}

export default Map
