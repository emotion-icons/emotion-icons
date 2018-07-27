import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M32 464h448L256 48 32 464zm248-64h-48v-48h48v48zm0-80h-48v-96h48v96z" key="k0" />
]


const Warning = ({ title, ...restProps }) => {
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
          ? [<title key="Warning-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Warning',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Warning.displayName = 'Warning'

Warning.defaultProps = { height: undefined, width: undefined}

export default Warning
