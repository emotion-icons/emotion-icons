import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C5.505 2 2 6.637 2 11c0 2.128 1.009 3.979 3 5.507V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.493c1.991-1.528 3-3.379 3-5.507 0-4.363-3.505-9-10-9zm5.428 13.18A1 1 0 0 0 17 16v3h-2v-3h-2v3h-2v-3H9v3H7v-3a1 1 0 0 0-.428-.82C4.865 13.989 4 12.583 4 11c0-3.479 2.748-7 8-7s8 3.521 8 7c0 1.583-.865 2.989-2.572 4.18z" key="k0" />
,
<path d="M8 8c-1.122 0-2 1.098-2 2.5S6.878 13 8 13s2-1.098 2-2.5S9.122 8 8 8zm8 0c-1.121 0-2 1.098-2 2.5s.879 2.5 2 2.5 2-1.098 2-2.5S17.121 8 16 8z" key="k1" />
]


const Skull = ({ title, ...restProps }) => {
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
          ? [<title key="Skull-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Skull',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Skull.displayName = 'Skull'

Skull.defaultProps = { height: 24, width: 24}

export default Skull
