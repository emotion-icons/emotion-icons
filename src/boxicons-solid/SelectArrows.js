import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7 11h10a1.001 1.001 0 0 0 .814-1.581l-5-7c-.375-.526-1.252-.526-1.627 0l-5 7A1 1 0 0 0 7 11zm-.813 3.581l5 7a.997.997 0 0 0 1.626 0l5-7A1 1 0 0 0 17 13H7c-.375 0-.718.209-.89.542a1 1 0 0 0 .077 1.039z" key="k0" />
]


const SelectArrows = ({ title, ...restProps }) => {
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
          ? [<title key="SelectArrows-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SelectArrows',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SelectArrows.displayName = 'SelectArrows'

SelectArrows.defaultProps = { height: 24, width: 24}

export default SelectArrows
