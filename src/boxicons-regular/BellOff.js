import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 18a1 1 0 0 0 .889-1.495L20 13.838V10c0-3.94-2.942-7.34-6.906-7.915l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087a7.977 7.977 0 0 0-4.783 2.57L3.707 2.293 2.293 3.707l18 18 1.414-1.414L19.414 18H20zM11.08 4.077l.921-.074.868.068C15.794 4.497 18 7.046 18 10v4c0 .107.018.214.052.316l.56 1.684h-1.198L7.492 6.078C8.4 5.027 9.653 4.283 11.08 4.077zM6 14v-3.879l-1.81-1.81A7.87 7.87 0 0 0 4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h4.5c0 1.93 1.57 3.5 3.5 3.5a3.508 3.508 0 0 0 3.229-2.15L11.879 16H5.388l.561-1.684A1.03 1.03 0 0 0 6 14zm7.5 4c0 .841-.659 1.5-1.5 1.5s-1.5-.659-1.5-1.5h3z" key="k0" />
]


const BellOff = ({ title, ...restProps }) => {
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
          ? [<title key="BellOff-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BellOff',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BellOff.displayName = 'BellOff'

BellOff.defaultProps = { height: 24, width: 24}

export default BellOff
