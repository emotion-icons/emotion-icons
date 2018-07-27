import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.354 18.708a2.647 2.647 0 0 1 0 5.292 2.648 2.648 0 0 1-2.646-2.646 2.648 2.648 0 0 1 2.646-2.646zM12 9.354c1.46 0 2.646 1.186 2.646 2.646S13.46 14.646 12 14.646 9.354 13.46 9.354 12 10.54 9.354 12 9.354zm9.354 0C22.814 9.354 24 10.54 24 12s-1.186 2.646-2.646 2.646S18.708 13.46 18.708 12s1.185-2.646 2.646-2.646zM12 0a2.647 2.647 0 0 1 0 5.292c-1.46 0-2.646-1.186-2.646-2.646S10.54 0 12 0zM2.646 0a2.647 2.647 0 0 1 0 5.292C1.186 5.292 0 4.106 0 2.646S1.186 0 2.646 0zm18.708 0a2.647 2.647 0 0 1 0 5.292 2.647 2.647 0 0 1 0-5.292z" key="k0" />
]

export const hex='#3E8DCC'
const Coderwall = ({ title, ...restProps }) => {
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
          ? [<title key="Coderwall-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Coderwall',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Coderwall.displayName = 'Coderwall'

Coderwall.defaultProps = { height: 24, width: 24}

export default Coderwall
