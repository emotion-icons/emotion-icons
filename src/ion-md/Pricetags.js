import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M442 107v141L229.2 451.7c8 8 20.8 12.3 28.8 12.3s22.8-3.7 31.4-12.3L480 272V144l-38-37z" key="k0" />
,
<path d="M384 48H224L44.3 235.6c-8 8-12 17.8-12.3 28.4-.3 11.3 3.7 23.3 12.3 31.9l123.8 123.6c8 8 20.8 12.5 28.8 12.5s22.7-3.9 31.3-12.5L416 240V80l-32-32zm-30.7 102.7c-21.7 6.1-41.3-10-41.3-30.7 0-17.7 14.3-32 32-32 20.7 0 36.8 19.6 30.7 41.3-2.9 10.3-11.1 18.5-21.4 21.4z" key="k1" />
]


const Pricetags = ({ title, ...restProps }) => {
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
          ? [<title key="Pricetags-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Pricetags',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Pricetags.displayName = 'Pricetags'

Pricetags.defaultProps = { height: undefined, width: undefined}

export default Pricetags
