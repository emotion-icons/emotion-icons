import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4.433 22.396l4-6.929H24l-4 6.929H4.433zm3.566-6.929l-3.998 6.929L0 15.467 7.785 1.98l3.999 6.931-3.785 6.556zm15.784-.375h-7.999L7.999 1.605h8.002l7.785 13.486h-.003z" key="k0" />
]

export const hex='#4386FC'
const GoogleDrive = ({ title, ...restProps }) => {
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
          ? [<title key="GoogleDrive-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GoogleDrive',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GoogleDrive.displayName = 'GoogleDrive'

GoogleDrive.defaultProps = { height: 24, width: 24}

export default GoogleDrive
