import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M443.9 128v256L218 512 0 384V169.7l87.6 45.1v117l133.5 75.5 135.8-75.5v-151l-101.1-57.6 87.6-53.1L443.9 128zM308.6 49.1L223.8 0l-88.6 54.8 86 47.3 87.4-53z" key="k0" />
]


const Uikit = ({ title, ...restProps }) => {
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
          ? [<title key="Uikit-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 448 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Uikit',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Uikit.displayName = 'Uikit'

Uikit.defaultProps = { height: undefined, width: undefined}

export default Uikit
