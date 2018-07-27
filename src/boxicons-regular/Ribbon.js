import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C8.636 2 6 4.636 6 7.986c-.002.119-.007 2.935 2.771 5.697l1.858 1.983-4.358 4.649 1.459 1.367L12 17.129l4.271 4.555 1.459-1.367-4.359-4.649 1.861-1.985C18.021 10.685 18.002 8.089 18 8c0-3.364-2.636-6-6-6zm1.771 10.316L12 14.205l-1.795-1.914C8.037 10.134 8.001 8.09 8 8c0-2.243 1.757-4 4-4s4 1.757 4 4.008c0 .078-.036 1.953-2.229 4.308z" key="k0" />
]


const Ribbon = ({ title, ...restProps }) => {
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
          ? [<title key="Ribbon-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Ribbon',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Ribbon.displayName = 'Ribbon'

Ribbon.defaultProps = { height: 24, width: 24}

export default Ribbon
