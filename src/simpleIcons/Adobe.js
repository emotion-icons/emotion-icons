import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15.1 2H24v20L15.1 2zM8.9 2H0v20L8.9 2zM12 9.4L17.6 22h-3.8l-1.6-4H8.1L12 9.4z" key="k0" />
]

export const hex='#FF0000'
const Adobe = ({ title, ...restProps }) => {
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
          ? [<title key="Adobe-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Adobe',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Adobe.displayName = 'Adobe'

Adobe.defaultProps = { height: 24, width: 24}

export default Adobe
