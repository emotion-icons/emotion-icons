import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 0C8.19.021 5.729 2.58 5.729 6.445c0 3.201 2.088 5.94 3.277 10.1.684 2.385 1.052 5.303 1.242 7.455h3.504c.192-2.152.558-5.07 1.241-7.455 1.189-4.16 3.277-6.898 3.277-10.1C18.271 2.58 15.81.021 12 0zm.02 9.852a2.87 2.87 0 1 1 0-5.734 2.87 2.87 0 0 1 0 5.734z" key="k0" />
]

export const hex='#53B50A'
const Trulia = ({ title, ...restProps }) => {
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
          ? [<title key="Trulia-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Trulia',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Trulia.displayName = 'Trulia'

Trulia.defaultProps = { height: 24, width: 24}

export default Trulia
