import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" key="k0" />
]


const NavigateNext = ({ title, ...restProps }) => {
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
          ? [<title key="NavigateNext-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-NavigateNext',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

NavigateNext.displayName = 'NavigateNext'

NavigateNext.defaultProps = { height: 24, width: 24}

export default NavigateNext
