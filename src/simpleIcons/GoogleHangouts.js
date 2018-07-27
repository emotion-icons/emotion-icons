import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 0C6.2 0 1.5 4.7 1.5 10.5c0 5.5 5 10 10.5 10V24c6.35-3.1 10.5-8.2 10.5-13.5C22.5 4.7 17.8 0 12 0zm-.5 12c0 1.4-.9 2.5-2 2.5V12H7V7.5h4.5V12zm6 0c0 1.4-.9 2.5-2 2.5V12H13V7.5h4.5V12z" key="k0" />
]

export const hex='#0C9D58'
const GoogleHangouts = ({ title, ...restProps }) => {
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
          ? [<title key="GoogleHangouts-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GoogleHangouts',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GoogleHangouts.displayName = 'GoogleHangouts'

GoogleHangouts.defaultProps = { height: 24, width: 24}

export default GoogleHangouts
