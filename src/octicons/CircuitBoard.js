import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M3 5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm8 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0 6c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm2-10H5v2.17c.36.19.64.47.83.83h2.34c.42-.78 1.33-1.28 2.34-1.05.75.19 1.36.8 1.53 1.55.31 1.38-.72 2.59-2.05 2.59-.8 0-1.48-.44-1.83-1.09H5.83c-.42.8-1.33 1.28-2.34 1.03-.73-.17-1.34-.78-1.52-1.52C1.72 4.49 2.2 3.59 3 3.17V1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1l5-5h2.17c.42-.78 1.33-1.28 2.34-1.05.75.19 1.36.8 1.53 1.55.31 1.38-.72 2.59-2.05 2.59-.8 0-1.48-.44-1.83-1.09H6.99L4 15h9c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z" key="k0" />
]


const CircuitBoard = ({ title, ...restProps }) => {
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
          ? [<title key="CircuitBoard-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 14 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CircuitBoard',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CircuitBoard.displayName = 'CircuitBoard'

CircuitBoard.defaultProps = { height: 16, width: 14}

export default CircuitBoard
