import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M10.296 7.71L14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z" key="k0" />
,
<path d="M6.704 17.71L12.461 12 6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29z" key="k1" />
]


const ChevronsRight = ({ title, ...restProps }) => {
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
          ? [<title key="ChevronsRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ChevronsRight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ChevronsRight.displayName = 'ChevronsRight'

ChevronsRight.defaultProps = { height: 24, width: 24}

export default ChevronsRight
