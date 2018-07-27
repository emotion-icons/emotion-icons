import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.004 9.916a.999.999 0 0 0 .511.958l6.821 3.79 3.79 6.821a.999.999 0 0 0 1.817-.152l6-17a1.001 1.001 0 0 0-1.276-1.276l-17 6a.998.998 0 0 0-.663.859zm16.357-4.277l-4.565 12.935-2.007-3.61L15 9l-5.963 3.211-3.61-2.007 12.934-4.565z" key="k0" />
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
