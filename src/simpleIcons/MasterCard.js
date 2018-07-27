import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.343 18.031c.058.049.12.098.181.146a7.391 7.391 0 0 1-4.107 1.238 7.416 7.416 0 1 1 4.104-13.593c-.06.051-.12.098-.165.15A7.963 7.963 0 0 0 8.595 12a7.996 7.996 0 0 0 2.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238.06.051.12.098.165.15A7.963 7.963 0 0 1 15.405 12a8.002 8.002 0 0 1-2.748 6.031c-.058.049-.12.098-.181.146a7.386 7.386 0 0 0 4.107 1.238A7.414 7.414 0 0 0 24 12a7.417 7.417 0 0 0-7.416-7.416zM12 6.174A7.388 7.388 0 0 0 9.169 12 7.386 7.386 0 0 0 12 17.827 7.39 7.39 0 0 0 14.831 12 7.388 7.388 0 0 0 12 6.174z" key="k0" />
]

export const hex='#EB001B'
const MasterCard = ({ title, ...restProps }) => {
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
          ? [<title key="MasterCard-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MasterCard',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MasterCard.displayName = 'MasterCard'

MasterCard.defaultProps = { height: 24, width: 24}

export default MasterCard
