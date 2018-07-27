import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M422.5 202.9c30.7 0 33.5 53.1-.3 53.1h-10.8v44.3h-26.6v-97.4h37.7zM472 352.6C429.9 444.5 350.4 504 248 504 111 504 0 393 0 256S111 8 248 8c97.4 0 172.8 53.7 218.2 138.4l-186 108.8L472 352.6zm-38.5 12.5l-60.3-30.7c-27.1 44.3-70.4 71.4-122.4 71.4-82.5 0-149.2-66.7-149.2-148.9 0-82.5 66.7-149.2 149.2-149.2 48.4 0 88.9 23.5 116.9 63.4l59.5-34.6c-40.7-62.6-104.7-100-179.2-100-121.2 0-219.5 98.3-219.5 219.5S126.8 475.5 248 475.5c78.6 0 146.5-42.1 185.5-110.4z" key="k0" />
]


const Codiepie = ({ title, ...restProps }) => {
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
          ? [<title key="Codiepie-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 472 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Codiepie',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Codiepie.displayName = 'Codiepie'

Codiepie.defaultProps = { height: undefined, width: undefined}

export default Codiepie
