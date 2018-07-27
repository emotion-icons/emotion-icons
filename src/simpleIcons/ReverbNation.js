import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M24 9.324l-9.143-.03L11.971.57 9.143 9.294 0 9.324h.031l7.367 5.355-2.855 8.749h.029l7.459-5.386 7.396 5.386-2.855-8.73L24 9.315" key="k0" />
]

export const hex='#E43526'
const ReverbNation = ({ title, ...restProps }) => {
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
          ? [<title key="ReverbNation-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ReverbNation',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ReverbNation.displayName = 'ReverbNation'

ReverbNation.defaultProps = { height: 24, width: 24}

export default ReverbNation
