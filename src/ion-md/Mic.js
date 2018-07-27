import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 320c37.712 0 68.571-30.924 68.571-68.714V100.714C324.571 62.924 293.712 32 256 32s-68.571 30.924-68.571 68.714v150.572c0 37.79 30.859 68.714 68.571 68.714zm121.139-75.452c0 68.714-58.282 116.815-121.139 116.815s-121.139-48.102-121.139-116.815H96c0 77.873 61.719 143.153 137.144 153.465V480h45.713v-81.987C354.281 386.561 416 322.421 416 244.548h-38.861z" key="k0" />
]


const Mic = ({ title, ...restProps }) => {
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
          ? [<title key="Mic-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Mic',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Mic.displayName = 'Mic'

Mic.defaultProps = { height: undefined, width: undefined}

export default Mic
