import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4.8 9.6v9.6h9.6V24H0V9.6h4.8zM24 0v24h-7.2v-4.8h2.4V4.8H4.8v2.4H0V0h24z" key="k0" />
]

export const hex='#009BEE'
const LinuxFoundation = ({ title, ...restProps }) => {
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
          ? [<title key="LinuxFoundation-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LinuxFoundation',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LinuxFoundation.displayName = 'LinuxFoundation'

LinuxFoundation.defaultProps = { height: 24, width: 24}

export default LinuxFoundation
