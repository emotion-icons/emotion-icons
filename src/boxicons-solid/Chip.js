import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 5a1 1 0 0 0-1-1h-2V2h-2v2h-2V2h-2v2H9V2H7v2H5a1 1 0 0 0-1 1v2H2v2h2v2H2v2h2v2H2v2h2v2a1 1 0 0 0 1 1h2v2h2v-2h2v2h2v-2h2v2h2v-2h2a1 1 0 0 0 1-1v-2h2v-2h-2v-2h2v-2h-2V9h2V7h-2V5zM9 9h6v6H9V9z" key="k0" />
]


const Chip = ({ title, ...restProps }) => {
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
          ? [<title key="Chip-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Chip',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Chip.displayName = 'Chip'

Chip.defaultProps = { height: 24, width: 24}

export default Chip
