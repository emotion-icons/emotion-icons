import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.707 16.293L8.414 12l4.293-4.293-1.414-1.414L5.586 12l5.707 5.707z" key="k0" />
,
<path d="M16.293 6.293L10.586 12l5.707 5.707 1.414-1.414L13.414 12l4.293-4.293z" key="k1" />
]


const ChevronsLeft = ({ title, ...restProps }) => {
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
          ? [<title key="ChevronsLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ChevronsLeft',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ChevronsLeft.displayName = 'ChevronsLeft'

ChevronsLeft.defaultProps = { height: 24, width: 24}

export default ChevronsLeft
