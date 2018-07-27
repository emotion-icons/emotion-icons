import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" key="k0" />
]


const Checkmark = ({ title, ...restProps }) => {
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
          ? [<title key="Checkmark-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Checkmark',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Checkmark.displayName = 'Checkmark'

Checkmark.defaultProps = { height: undefined, width: undefined}

export default Checkmark
