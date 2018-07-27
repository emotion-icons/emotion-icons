import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M459.9 435.5L76.1 52.5 51.9 76.6 160 184.3V272h64v192l72-144 139.9 139.5zM352 208h-64l64-160H160v40.3l168 167.6z" key="k0" />
]


const FlashOff = ({ title, ...restProps }) => {
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
          ? [<title key="FlashOff-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FlashOff',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FlashOff.displayName = 'FlashOff'

FlashOff.defaultProps = { height: undefined, width: undefined}

export default FlashOff
