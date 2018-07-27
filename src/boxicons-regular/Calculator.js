import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7 11h2v2H7zm0 4h2v2H7zm4 0h2v2h-2zm0-4h2v2h-2zm4 0h2v6h-2z" key="k0" />
,
<path d="M4 21h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1zm1-2V9h14v10H5zM19 5v2H5V5h14z" key="k1" />
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
