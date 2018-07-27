import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M396.795 396.8H320V448h128V320h-51.205zm.005-281.595V192H448V64H320v51.205zm-281.595-.005H192V64H64v128h51.205zm-.005 281.595V320H64v128h128v-51.205z" key="k0" />
]


const Expand = ({ title, ...restProps }) => {
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
          ? [<title key="Expand-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Expand',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Expand.displayName = 'Expand'

Expand.defaultProps = { height: undefined, width: undefined}

export default Expand
