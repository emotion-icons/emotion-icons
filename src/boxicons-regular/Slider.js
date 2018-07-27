import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13 5h9v2h-9zM9 17h13v2H9zm10-6h3v2h-3zM9 9h2V3H9v2H2v2h7zm6 6h2V9h-2v2H2v2h13zM5 17H2v2h3v2h2v-6H5z" key="k0" />
]


const Slider = ({ title, ...restProps }) => {
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
          ? [<title key="Slider-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Slider',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Slider.displayName = 'Slider'

Slider.defaultProps = { height: 24, width: 24}

export default Slider
