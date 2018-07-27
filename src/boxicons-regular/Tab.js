import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14zM6 4h12v14H6V4z" key="k0" />
]


const Tab = ({ title, ...restProps }) => {
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
          ? [<title key="Tab-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Tab',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Tab.displayName = 'Tab'

Tab.defaultProps = { height: 24, width: 24}

export default Tab
