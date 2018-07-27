import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 2v20h2v-7h13a1 1 0 0 0 .832-1.554L17.202 9.5l2.63-3.945A1 1 0 0 0 19 4H6V2H4zm13.132 4l-1.964 2.945a1 1 0 0 0 0 1.109L17.132 13H6V6h11.132z" key="k0" />
]


const FlagAlt = ({ title, ...restProps }) => {
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
          ? [<title key="FlagAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FlagAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FlagAlt.displayName = 'FlagAlt'

FlagAlt.defaultProps = { height: 24, width: 24}

export default FlagAlt
