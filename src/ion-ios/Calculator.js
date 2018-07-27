import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M372 48H140c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h232c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-12 272v80c0 13.3-10.7 24-24 24s-24-10.7-24-24v-80c0-13.3 10.7-24 24-24s24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-80 160c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-80 160c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm0-80c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm-48-80v-48c0-8.8 7.2-16 16-16h176c8.8 0 16 7.2 16 16v48c0 8.8-7.2 16-16 16H168c-8.8 0-16-7.2-16-16z" key="k0" />
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
      viewBox: '0 0 512 512',
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

Calculator.defaultProps = { height: undefined, width: undefined}

export default Calculator
