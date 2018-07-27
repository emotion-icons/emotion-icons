import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={17} cy={15} r={2} key="k0" />
,
<path d="M21.37 6.074l.001-.003-10-4-.742 1.857L15.807 6H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a.998.998 0 0 0-.63-.926zM20 18H4v-6h16v6zm0-8H4V8h16v2z" key="k1" />
,
<path d="M5 15h2v2H5zm3 0h2v2H8z" key="k2" />
]


const Radio = ({ title, ...restProps }) => {
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
          ? [<title key="Radio-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Radio',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Radio.displayName = 'Radio'

Radio.defaultProps = { height: 24, width: 24}

export default Radio
