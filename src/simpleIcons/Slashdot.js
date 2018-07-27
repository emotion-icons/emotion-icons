import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.777 0L7.037 24H1.868L14.605 0h5.172zm2.354 19.801c0 2.268-1.841 4.105-4.109 4.105a4.106 4.106 0 1 1 0-8.212 4.109 4.109 0 0 1 4.109 4.107z" key="k0" />
]

export const hex='#026664'
const Slashdot = ({ title, ...restProps }) => {
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
          ? [<title key="Slashdot-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Slashdot',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Slashdot.displayName = 'Slashdot'

Slashdot.defaultProps = { height: 24, width: 24}

export default Slashdot
