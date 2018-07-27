import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 12H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-5 5h-2v-2h2v2zm3 0h-2v-2h2v2zm0-13H6c-.417 0-.79.259-.937.648L3.132 10h18.093L19.97 4.758A1.001 1.001 0 0 0 19 4z" key="k0" />
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
