import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 4h1V2H4v2h1c0 3 1.58 4.966 4 7.391v1.172C6.58 14.987 5 17 5 20H4v2h16v-2h-1c0-3-1.58-5.013-4-7.438V11.39C17.42 8.966 19 7 19 4zm-5.707 9.695C15.761 16.164 17 17 17 20H7c0-3 1.239-3.836 3.707-6.305.188-.187.293-.453.293-.718v-2a.968.968 0 0 0-.293-.695C8.239 7.813 7 7 7 4h10c0 3-1.239 3.813-3.707 6.281a.972.972 0 0 0-.293.696v2c0 .265.105.531.293.718z" key="k0" />
]


const Hourglass = ({ title, ...restProps }) => {
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
          ? [<title key="Hourglass-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hourglass',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hourglass.displayName = 'Hourglass'

Hourglass.defaultProps = { height: 24, width: 24}

export default Hourglass
