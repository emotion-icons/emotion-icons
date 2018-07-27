import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 6h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H3a1 1 0 0 0-1 1v3h20V7a1 1 0 0 0-1-1zM10 4h5v2h-5V4zm4 10h-4v-2H2v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7h-8v2z" key="k0" />
]


const Briefcase = ({ title, ...restProps }) => {
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
          ? [<title key="Briefcase-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Briefcase',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Briefcase.displayName = 'Briefcase'

Briefcase.defaultProps = { height: 24, width: 24}

export default Briefcase
