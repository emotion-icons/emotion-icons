import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M153.1 315.8L65.7 512H2l96-209.8c-45.1-22.9-75.2-64.4-75.2-141.1C22.7 53.7 90.8 0 171.7 0H254v512h-55.1V315.8h-45.8zm45.8-269.3h-29.4c-44.4 0-87.4 29.4-87.4 114.6 0 82.3 39.4 108.8 87.4 108.8h29.4V46.5z" key="k0" />
]


const Yandex = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Yandex-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 256 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Yandex',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Yandex.displayName = 'Yandex'

Yandex.defaultProps = { height: undefined, width: undefined}

export default Yandex
