import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M80 448h352c17.7 0 32-14.3 32-32V224H48v192c0 17.7 14.3 32 32 32zm352-320h-8v-8c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v8h-28V96c0-17.6-14.4-32-32-32H196c-17.6 0-32 14.4-32 32v32h-28v-8c0-4.4-3.6-8-8-8H96c-4.4 0-8 3.6-8 8v8h-8c-17.7 0-32 14.3-32 32v40h416v-40c0-17.7-14.3-32-32-32zm-112 0H192v-28c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v28z" key="k0" />
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
