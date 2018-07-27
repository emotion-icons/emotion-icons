import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3c-1.826 0-6.855.183-9 2.011C9.855 3.183 4.826 3 3 3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1c5.467 0 8.269 2.684 8.297 2.71l.007-.007c.09.088.19.166.311.217a1.005 1.005 0 0 0 1.089-.209C12.731 20.684 15.533 18 21 18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 13.027c-3.234.174-5.567 1.167-7 2.014V7c0-1.042 3.516-1.846 7-1.98v11.007z" key="k0" />
]


const BookOpen = ({ title, ...restProps }) => {
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
          ? [<title key="BookOpen-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BookOpen',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BookOpen.displayName = 'BookOpen'

BookOpen.defaultProps = { height: 24, width: 24}

export default BookOpen
