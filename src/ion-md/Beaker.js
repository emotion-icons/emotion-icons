import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M448.1 34.9c0-1.2-.4-2.9-2.9-2.9H128.5c-54.3 0-64.4 27.4-64.4 39.8C94.4 76 96 76.5 96 108.5v307c0 35.3 28.9 64.5 64.3 64.5H368c35.3 0 64-29.2 64-64.5V73.3c2.2-17.5 12-31.8 13.1-33.5 1.2-1.9 3-3.8 3-4.9zM354.2 432H176.3c-15.9 0-29.7-11.9-32.3-27.1V80h240v319.7c0 18-12.4 32.3-29.8 32.3z" key="k0" />
,
<path d="M182 160v226c0 4.4 3.6 8 8 8h148c4.4 0 8-3.6 8-8V160H182z" key="k1" />
]


const Beaker = ({ title, ...restProps }) => {
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
          ? [<title key="Beaker-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Beaker',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Beaker.displayName = 'Beaker'

Beaker.defaultProps = { height: undefined, width: undefined}

export default Beaker
