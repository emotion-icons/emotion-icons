import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M48 181.4V424c0 22.1 17.9 40 40 40h242.6c22.1 0 40-17.9 40-40V181.4c0-22.1-17.9-40-40-40H88c-22.1 0-40 17.9-40 40z" key="k0" />
,
<path d="M141.4 88v28.4c0 2.2 1.8 4 4 4h198.2c26.4 0 48 21.6 48 48v198.2c0 2.2 1.8 4 4 4H424c22.1 0 40-17.9 40-40V88c0-22.1-17.9-40-40-40H181.4c-22.1 0-40 17.9-40 40z" key="k1" />
]


const Browsers = ({ title, ...restProps }) => {
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
          ? [<title key="Browsers-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Browsers',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Browsers.displayName = 'Browsers'

Browsers.defaultProps = { height: undefined, width: undefined}

export default Browsers
