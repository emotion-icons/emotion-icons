import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M289 448h-66v-65h66v65zm-1-98h-64c0-101 96-95.1 96-159 0-35.2-28.8-63.4-64-63.4S192 158 192 192h-64c0-71 57.3-128 128-128s128 56.4 128 127c0 79.9-96 89-96 159z" key="k0" />
]


const Help = ({ title, ...restProps }) => {
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
          ? [<title key="Help-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Help',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Help.displayName = 'Help'

Help.defaultProps = { height: undefined, width: undefined}

export default Help
