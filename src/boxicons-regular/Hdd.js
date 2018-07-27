import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17 15h2v2h-2zm-3 0h2v2h-2z" key="k0" />
,
<path d="M21.97 12.758l-2-8A1.001 1.001 0 0 0 19 4H6c-.417 0-.79.259-.937.648l-3 8 .007.003A.991.991 0 0 0 2 13v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6c0-.084-.028-.159-.048-.238l.018-.004zM6.693 6h11.525l1.501 6H4.443l2.25-6zM20 18H4v-4h16v4z" key="k1" />
]


const Hdd = ({ title, ...restProps }) => {
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
          ? [<title key="Hdd-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hdd',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hdd.displayName = 'Hdd'

Hdd.defaultProps = { height: 24, width: 24}

export default Hdd
