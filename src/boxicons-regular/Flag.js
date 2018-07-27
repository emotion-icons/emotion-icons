import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 2v18H3v2h6v-2H7v-5h11a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7V2H5zm12 5v6H7V7h10z" key="k0" />
]


const Flag = ({ title, ...restProps }) => {
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
          ? [<title key="Flag-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Flag',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Flag.displayName = 'Flag'

Flag.defaultProps = { height: 24, width: 24}

export default Flag
