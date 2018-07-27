import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-6.293 9.707a.997.997 0 0 1-1.414 0l-2-2 1.414-1.414L11 12.586l3.793-3.793 1.414 1.414-4.5 4.5z" key="k0" />
]


const CheckboxChecked = ({ title, ...restProps }) => {
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
          ? [<title key="CheckboxChecked-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CheckboxChecked',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CheckboxChecked.displayName = 'CheckboxChecked'

CheckboxChecked.defaultProps = { height: 24, width: 24}

export default CheckboxChecked
