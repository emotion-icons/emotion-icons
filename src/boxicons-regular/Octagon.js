import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.009 10.142l1 7c.036.252.167.48.365.64l5 4c.178.141.397.218.625.218h6a1 1 0 0 0 .625-.219l5-4c.198-.159.329-.388.365-.64l1-7a1.004 1.004 0 0 0-.133-.656l-3-5a.999.999 0 0 0-.541-.434l-6-2a1.008 1.008 0 0 0-.633 0l-6 2c-.226.076-.417.23-.54.434l-3 5a1.002 1.002 0 0 0-.133.657zm4.657-4.31l5.333-1.777 5.333 1.777 2.627 4.378-.894 6.257L14.648 20H9.35l-4.417-3.533-.894-6.257 2.627-4.378z" key="k0" />
]


const Octagon = ({ title, ...restProps }) => {
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
          ? [<title key="Octagon-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Octagon',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Octagon.displayName = 'Octagon'

Octagon.defaultProps = { height: 24, width: 24}

export default Octagon
