import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 5.586l-5.707 5.707 1.414 1.414L12 8.414l4.293 4.293 1.414-1.414z" key="k0" />
,
<path d="M6.293 16.293l1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z" key="k1" />
]


const ChevronsUp = ({ title, ...restProps }) => {
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
          ? [<title key="ChevronsUp-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ChevronsUp',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ChevronsUp.displayName = 'ChevronsUp'

ChevronsUp.defaultProps = { height: 24, width: 24}

export default ChevronsUp
