import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 8H2v13a1 1 0 0 0 1 1h13v-2H4V8z" key="k0" />
,
<path d="M21 2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-7.231 11.641a.998.998 0 0 1-.724.358L13 14a.993.993 0 0 1-.707-.293l-2.5-2.5 1.414-1.414 1.726 1.726 4.299-5.159 1.537 1.281-5 6z" key="k1" />
]


const SelectMultiple = ({ title, ...restProps }) => {
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
          ? [<title key="SelectMultiple-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SelectMultiple',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SelectMultiple.displayName = 'SelectMultiple'

SelectMultiple.defaultProps = { height: 24, width: 24}

export default SelectMultiple
