import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2 10v2c4.962 0 9 4.038 9 9.001h2C13 14.935 8.065 10 2 10z" key="k0" />
,
<path d="M7 21.001h2C9 17.141 5.86 14 2 14v2c2.757 0 5 2.243 5 5.001z" key="k1" />
,
<circle cx={3.5} cy={19.5} r={1.5} key="k2" />
,
<path d="M21 4H3a1 1 0 0 0-1 1v3h2V6h16v13h-5v2h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" key="k3" />
]


const Cast = ({ title, ...restProps }) => {
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
          ? [<title key="Cast-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Cast',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Cast.displayName = 'Cast'

Cast.defaultProps = { height: 24, width: 24}

export default Cast
