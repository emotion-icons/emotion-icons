import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 0C5.375 0 0 5.373 0 12s5.375 12 12 12 12-5.373 12-12S18.625 0 12 0zm1.497 10.665c.186.153.424.245.685.245a1.092 1.092 0 1 0-1.092-1.092c0 .26.09.499.243.685l-1.335 1.335-1.333-1.338c.153-.186.245-.424.245-.685a1.092 1.092 0 1 0-.407.852l1.335 1.335-1.335 1.334a1.09 1.09 0 0 0-.685-.24 1.096 1.096 0 0 0 0 2.19c.603 0 1.092-.48 1.092-1.08 0-.254-.09-.494-.243-.674l1.335-1.35 1.334 1.335c-.15.195-.24.435-.24.69 0 .6.496 1.094 1.096 1.094.6 0 1.095-.48 1.095-1.08a1.076 1.076 0 0 0-1.755-.84L12.165 12l1.335-1.335z" key="k0" />
]

export const hex='#231F20'
const StyleShare = ({ title, ...restProps }) => {
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
          ? [<title key="StyleShare-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-StyleShare',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
  "fillRule": "evenodd",
  "strokeLinejoin": "round",
  "strokeMiterlimit": "1.414",
      ...restProps
    }
    )
  }

StyleShare.displayName = 'StyleShare'

StyleShare.defaultProps = { height: 24, width: 24}

export default StyleShare
