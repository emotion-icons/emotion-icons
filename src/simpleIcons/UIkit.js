import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.697 3.292l-4.109 2.489 4.738 2.696v7.077l-6.365 3.538-6.258-3.538v-5.485L1.596 7.956V18l10.219 6 10.589-6V6.002l-4.707-2.71zm-1.904-.989L11.813 0 7.665 2.568l4.032 2.218 4.096-2.483z" key="k0" />
]

export const hex='#2396F3'
const UIkit = ({ title, ...restProps }) => {
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
          ? [<title key="UIkit-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-UIkit',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

UIkit.displayName = 'UIkit'

UIkit.defaultProps = { height: 24, width: 24}

export default UIkit
