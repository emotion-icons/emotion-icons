import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" key="k0" />
]


const NavigateBefore = ({ title, ...restProps }) => {
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
          ? [<title key="NavigateBefore-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-NavigateBefore',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

NavigateBefore.displayName = 'NavigateBefore'

NavigateBefore.defaultProps = { height: 24, width: 24}

export default NavigateBefore
