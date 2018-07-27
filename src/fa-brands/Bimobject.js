import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M416 32H32C14.4 32 0 46.4 0 64v384c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32zm-64 257.4c0 49.4-11.4 82.6-103.8 82.6h-16.9c-44.1 0-62.4-14.9-70.4-38.8h-.9V368H96V136h64v74.7h1.1c4.6-30.5 39.7-38.8 69.7-38.8h17.3c92.4 0 103.8 33.1 103.8 82.5v35zm-64-28.9v22.9c0 21.7-3.4 33.8-38.4 33.8h-45.3c-28.9 0-44.1-6.5-44.1-35.7v-19c0-29.3 15.2-35.7 44.1-35.7h45.3c35-.2 38.4 12 38.4 33.7z" key="k0" />
]


const Bimobject = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Bimobject-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 448 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bimobject',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bimobject.displayName = 'Bimobject'

Bimobject.defaultProps = { height: undefined, width: undefined}

export default Bimobject
