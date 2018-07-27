import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M403.001 217.001C388.997 148.002 328.998 96 256 96c-57.998 0-107.999 32.998-132.997 81C63.002 183.002 16 233.998 16 296c0 65.996 54.004 120 120 120h260c55 0 100-45 100-100.001 0-52.997-40.997-95.999-92.999-98.998zM396 376H136c-44.004 0-80-35.996-80-80 0-44 35.996-80 80-80h14.004c12.998-46 55-80 105.996-80 60.996 0 110 49 110 110v10h30c32.998 0 60 27.003 60 60 0 32.998-27.002 60-60 60z" key="k0" />
]


const CloudOutline = ({ title, ...restProps }) => {
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
          ? [<title key="CloudOutline-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CloudOutline',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CloudOutline.displayName = 'CloudOutline'

CloudOutline.defaultProps = { height: undefined, width: undefined}

export default CloudOutline
