import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.929 6.629A1.002 1.002 0 0 0 19 6h-4V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h1.051c-.025.165-.051.329-.051.5C4 20.43 5.57 22 7.5 22s3.5-1.57 3.5-3.5c0-.171-.026-.335-.051-.5h2.102c-.025.165-.051.329-.051.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.171-.026-.335-.051-.5H21a1 1 0 0 0 1-1v-5c0-.127-.024-.253-.071-.371l-2-5zM15 8h3.323l1.2 3H15V8zM7.5 20c-.827 0-1.5-.673-1.5-1.5S6.673 17 7.5 17s1.5.673 1.5 1.5S8.327 20 7.5 20zm9 0c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z" key="k0" />
]


const Truck = ({ title, ...restProps }) => {
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
          ? [<title key="Truck-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Truck',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Truck.displayName = 'Truck'

Truck.defaultProps = { height: 24, width: 24}

export default Truck
