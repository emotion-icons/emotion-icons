import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M1 7h2v2h1V3H3v3H1V3H0v6h1V7zm9 2V7H9v2h1zm0-3V4H9v2h1zM7 6V4h2V3H6v6h1V7h2V6H7zm-7 7h10v-2H0v2z" key="k0" />
]


const HorizontalRule = ({ title, ...restProps }) => {
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
          ? [<title key="HorizontalRule-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 10 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-HorizontalRule',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

HorizontalRule.displayName = 'HorizontalRule'

HorizontalRule.defaultProps = { height: 16, width: 10}

export default HorizontalRule
