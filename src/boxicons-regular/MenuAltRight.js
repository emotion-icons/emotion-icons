import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 6h18v2H3zm7 5h11v2H10zm-3 5h14v2H7z" key="k0" />
]


const MenuAltRight = ({ title, ...restProps }) => {
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
          ? [<title key="MenuAltRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MenuAltRight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MenuAltRight.displayName = 'MenuAltRight'

MenuAltRight.defaultProps = { height: 24, width: 24}

export default MenuAltRight
