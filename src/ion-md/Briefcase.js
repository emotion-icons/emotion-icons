import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M352 144v-39.6C352 82 334 64 311.6 64H200.4C178 64 160 82 160 104.4V144H48v263.6C48 430 66 448 88.4 448h335.2c22.4 0 40.4-18 40.4-40.4V144H352zm-40 0H200v-40h112v40z" key="k0" />
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
      viewBox: '0 0 512 512',
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

Briefcase.defaultProps = { height: undefined, width: undefined}

export default Briefcase
