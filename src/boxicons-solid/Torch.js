import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18 8H6a1 1 0 0 0-1 1v1c0 2.554 1.248 3.929 2 4.526V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6.607c.633-.715 2-2.48 2-4.393V9a1 1 0 0 0-1-1zm-5 10h-2v-4h2v4zM11 2h2v4h-2zM5.707 2.293l3 3-1.414 1.415-3-3zM18.293 2.293l1.414 1.414-3 3-1.415-1.414z" key="k0" />
]


const Torch = ({ title, ...restProps }) => {
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
          ? [<title key="Torch-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Torch',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Torch.displayName = 'Torch'

Torch.defaultProps = { height: 24, width: 24}

export default Torch
