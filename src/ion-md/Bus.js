import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M80 352c0 19.198 13.864 24.531 26.667 36.271v38.396c0 11.729 9.599 21.334 21.333 21.334h21.333c11.734 0 21.334-9.604 21.334-21.334v-21.333h170.666v21.333c0 11.729 9.604 21.334 21.334 21.334H384c11.729 0 21.333-9.604 21.333-21.334v-38.396C418.136 376.531 432 370.136 432 352V148.334C432 73.667 349.864 64 256 64S80 73.667 80 148.334V352zm80 15.989c-18.136 0-32-13.864-32-32 0-18.135 13.864-32 32-32s32 13.865 32 32c0 18.136-13.864 32-32 32zm192 0c-18.136 0-32-13.864-32-32 0-18.135 13.864-32 32-32s32 13.865 32 32c0 18.136-13.864 32-32 32zm32-122.656H128V138.667h256v106.666z" key="k0" />
]


const Bus = ({ title, ...restProps }) => {
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
          ? [<title key="Bus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bus.displayName = 'Bus'

Bus.defaultProps = { height: undefined, width: undefined}

export default Bus
