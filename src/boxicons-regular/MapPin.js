import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.97 11.758A1.001 1.001 0 0 0 19 11h-6V8.837c1.44-.434 2.5-1.757 2.5-3.337C15.5 3.57 13.93 2 12 2S8.5 3.57 8.5 5.5c0 1.58 1.06 2.903 2.5 3.337V11H5c-.459 0-.858.313-.97.758l-2 8A.998.998 0 0 0 3 21h18a.998.998 0 0 0 .97-1.242l-2-8zM10.5 5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5S12.827 7 12 7s-1.5-.673-1.5-1.5zM4.281 19l1.5-6H11v2l1 2 1-2v-2h5.219l1.5 6H4.281z" key="k0" />
]


const MapPin = ({ title, ...restProps }) => {
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
          ? [<title key="MapPin-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MapPin',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MapPin.displayName = 'MapPin'

MapPin.defaultProps = { height: 24, width: 24}

export default MapPin
