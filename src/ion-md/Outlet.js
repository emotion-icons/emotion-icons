import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M369.5 32H142.4C81.5 32 32 82.6 32 144.6v222.8c0 62 49.5 112.6 110.4 112.6h227.2c60.9 0 110.5-50.6 110.5-112.6V144.6C480 82.6 430.5 32 369.5 32zM175 251v.7c0 10.9-9.1 20.4-19.9 20.4h-23.3c-10.8 0-19.9-9.5-19.9-20.4V148.1c1-10.8 9.2-20.2 19.9-20.2h23.3c10.9 0 19.9 9.8 19.9 20.8V251zm122 147.4c0 11.4-8.9 17.6-20.1 17.6h-41.8c-11.2 0-20.1-8.1-20.1-19.6v-29.3c0-23.3 18.1-42.3 41-42.3s41 19 41 42.3v31.3zM400 251v.7c0 10.9-9.1 20.4-19.9 20.4h-24.3c-10.8 0-19.9-9.5-19.9-20.4V148.1c1-10.8 9.2-20.2 19.9-20.2h24.3c10.8 0 19.9 9.8 19.9 20.8V251z" key="k0" />
]


const Outlet = ({ title, ...restProps }) => {
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
          ? [<title key="Outlet-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Outlet',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Outlet.displayName = 'Outlet'

Outlet.defaultProps = { height: undefined, width: undefined}

export default Outlet
