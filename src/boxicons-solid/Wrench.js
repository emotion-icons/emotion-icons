import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6.453 21.083a.997.997 0 0 0 1.414 0l3.795-3.795a7.463 7.463 0 0 0 2.217.333 7.45 7.45 0 0 0 5.302-2.195 7.484 7.484 0 0 0 1.632-8.158.999.999 0 0 0-1.632-.327l-3.183 3.182-2.121-2.122 3.182-3.182a1 1 0 0 0-.328-1.632 7.469 7.469 0 0 0-2.856-.563c-2.003 0-3.886.78-5.301 2.196a7.478 7.478 0 0 0-1.862 7.519l-3.795 3.794a1 1 0 0 0 0 1.414l3.536 3.536z" key="k0" />
]


const Wrench = ({ title, ...restProps }) => {
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
          ? [<title key="Wrench-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Wrench',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Wrench.displayName = 'Wrench'

Wrench.defaultProps = { height: 24, width: 24}

export default Wrench
