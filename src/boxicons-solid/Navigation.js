import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.707 3.293a1 1 0 0 0-1.04-.236l-17 6a.999.999 0 1 0-.152 1.817L7 14l6.991-3.991L10 17l3.126 4.485a.999.999 0 0 0 1.817-.152l6-17a1.001 1.001 0 0 0-.236-1.04z" key="k0" />
]


const Navigation = ({ title, ...restProps }) => {
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
          ? [<title key="Navigation-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Navigation',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Navigation.displayName = 'Navigation'

Navigation.defaultProps = { height: 24, width: 24}

export default Navigation
