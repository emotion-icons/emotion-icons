import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 18V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zm-2-1H7V7h10v10z" key="k0" />
,
<path d="M9 9h6v6H9z" key="k1" />
]


const CheckboxSquare = ({ title, ...restProps }) => {
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
          ? [<title key="CheckboxSquare-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CheckboxSquare',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CheckboxSquare.displayName = 'CheckboxSquare'

CheckboxSquare.defaultProps = { height: 24, width: 24}

export default CheckboxSquare
