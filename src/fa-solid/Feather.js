import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M512 0C504.81.01 98.51 22.01 71.47 287.42c-2.62 22.6-4.22 45.28-5.37 67.98l160.65-160.65c6.25-6.25 16.38-6.25 22.62 0s6.25 16.38 0 22.62l-240 240a31.9 31.9 0 0 0-9.38 22.67C.02 497.68 14.33 512 32 512c8.19 0 16.38-3.12 22.62-9.38l55.05-55.05c38.4-.5 76.76-2.63 114.91-7.05 11.58-1.18 22.54-3.29 33.21-5.84L256 384h101.86c12.61-10.63 24.12-22.45 34.76-35.07L384 288h50.19C502.8 163.6 512 .1 512 0z" key="k0" />
]


const Feather = ({ title, ...restProps }) => {
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
          ? [<title key="Feather-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Feather',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Feather.displayName = 'Feather'

Feather.defaultProps = { height: undefined, width: undefined}

export default Feather
