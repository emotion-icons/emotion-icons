import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4V7c0-2.168-3.663-4-8-4S4 4.832 4 7zm14 9.994c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387zm0-5c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387zm0-5C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5s5.931 1.507 6 1.994z" key="k0" />
]


const Data = ({ title, ...restProps }) => {
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
          ? [<title key="Data-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Data',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Data.displayName = 'Data'

Data.defaultProps = { height: 24, width: 24}

export default Data
