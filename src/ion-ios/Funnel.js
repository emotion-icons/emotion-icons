import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M48 87.2c0 5.8 2 11.4 5.6 15.7l152.2 179.8c3.6 4.3 5.6 9.9 5.6 15.7v107c0 10 5.9 18.8 14.6 22l55 19.8c9.6 3.5 19.6-4.3 19.6-15.3V298.3c0-5.8 2-11.4 5.6-15.7l152.2-179.8c3.6-4.3 5.6-9.9 5.6-15.7 0-12.8-9.6-23.2-21.4-23.2H69.4C57.6 64 48 74.4 48 87.2z" key="k0" />
]


const Funnel = ({ title, ...restProps }) => {
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
          ? [<title key="Funnel-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Funnel',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Funnel.displayName = 'Funnel'

Funnel.defaultProps = { height: undefined, width: undefined}

export default Funnel
