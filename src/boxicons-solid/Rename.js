import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 7v11h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2v1z" key="k0" />
,
<path d="M3 18h12c0 .094-.048 2-3 2v2c2.003 0 3.257-.673 4.01-1.517.049.055.089.111.143.165C17.047 21.546 18.342 22 20 22v-2c-2.803 0-2.991-1.676-3-1.998V6.024C17.013 5.686 17.22 4 20 4V2c-1.986 0-3.238.67-3.993 1.511C15.255 2.67 14 2 12 2v2c2.8 0 2.99 1.678 3 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1zm3-8h9v4H6v-4z" key="k1" />
]


const Rename = ({ title, ...restProps }) => {
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
          ? [<title key="Rename-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Rename',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Rename.displayName = 'Rename'

Rename.defaultProps = { height: 24, width: 24}

export default Rename
