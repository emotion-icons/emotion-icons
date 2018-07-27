import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 2v4H5V5h14zM9 15v2H7v-2h2zm-2-2v-2h2v2H7zm6 2v2h-2v-2h2zm-2-2v-2h2v2h-2zm4 4v-6h2v6h-2z" key="k0" />
]


const Calculator = ({ title, ...restProps }) => {
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
          ? [<title key="Calculator-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Calculator',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Calculator.displayName = 'Calculator'

Calculator.defaultProps = { height: 24, width: 24}

export default Calculator
