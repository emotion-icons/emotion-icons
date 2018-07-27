import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm90.5 224h-181c-8.5 0-16-6-16-16s7.2-16 16-16h181c8.8 0 16 7.2 16 16s-7.2 16-16 16z" key="k0" />
]


const RemoveCircle = ({ title, ...restProps }) => {
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
          ? [<title key="RemoveCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-RemoveCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

RemoveCircle.displayName = 'RemoveCircle'

RemoveCircle.defaultProps = { height: undefined, width: undefined}

export default RemoveCircle
