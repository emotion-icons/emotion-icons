import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M480 369.2V251.1c0-8.1-6.8-14.8-15.1-14.8s-15.1 6.6-15.1 14.8v81.7L300.5 181c-2.8-2.8-6.6-4.3-10.7-4.3-4 0-7.8 1.5-10.7 4.3l-85.9 84.1L57.5 132.3c-2.9-2.8-6.6-4.3-10.7-4.3-4 0-7.8 1.5-10.7 4.3-2.8 2.7-4.2 6.2-4.2 10.2 0 5.4 2.3 8.8 4.2 10.7l146.3 143.2c2.9 2.8 6.6 4.3 10.7 4.3 4 0 7.8-1.5 10.7-4.3l85.9-84.1 138 142.2H344c-8.3 0-15.1 6.6-15.1 14.8 0 8.1 6.8 14.8 15.1 14.8h120.8c8.4-.1 15.2-6.7 15.2-14.9z" key="k0" />
]


const TrendingDown = ({ title, ...restProps }) => {
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
          ? [<title key="TrendingDown-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TrendingDown',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TrendingDown.displayName = 'TrendingDown'

TrendingDown.defaultProps = { height: undefined, width: undefined}

export default TrendingDown
