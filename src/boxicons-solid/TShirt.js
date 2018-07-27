import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.515 5.143l-5-3a1.005 1.005 0 0 0-1.461.535C15.021 2.773 14.224 5 12 5S8.979 2.773 8.948 2.684a.995.995 0 0 0-.601-.622 1.003 1.003 0 0 0-.862.081l-5 3A1 1 0 0 0 2 6v5a1.001 1.001 0 0 0 1.448.895L6 10.618V21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10.618l2.553 1.276A1 1 0 0 0 22 11V6a1 1 0 0 0-.485-.857z" key="k0" />
]


const TShirt = ({ title, ...restProps }) => {
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
          ? [<title key="TShirt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TShirt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TShirt.displayName = 'TShirt'

TShirt.defaultProps = { height: 24, width: 24}

export default TShirt
