import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7.707 11.293l-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414L12 15.586z" key="k0" />
,
<path d="M16.293 6.293L12 10.586 7.707 6.293 6.293 7.707 12 13.414l5.707-5.707z" key="k1" />
]


const ChevronsDown = ({ title, ...restProps }) => {
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
          ? [<title key="ChevronsDown-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ChevronsDown',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ChevronsDown.displayName = 'ChevronsDown'

ChevronsDown.defaultProps = { height: 24, width: 24}

export default ChevronsDown
