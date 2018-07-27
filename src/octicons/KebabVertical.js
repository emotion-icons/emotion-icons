import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M0 2.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm0 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zM1.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" key="k0" />
]


const KebabVertical = ({ title, ...restProps }) => {
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
          ? [<title key="KebabVertical-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 3 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-KebabVertical',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

KebabVertical.displayName = 'KebabVertical'

KebabVertical.defaultProps = { height: 16, width: 3}

export default KebabVertical
