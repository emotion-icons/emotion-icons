import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3h-4V2h-2v1H9V2H7v1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM4 5h3v1h2V5h6v1h2V5h3v3H4V5zm11.707 12.293l-1.414 1.414L12 16.414l-2.293 2.293-1.414-1.414L10.586 15l-2.293-2.293 1.414-1.414L12 13.586l2.293-2.293 1.414 1.414L13.414 15l2.293 2.293z" key="k0" />
]


const CalendarX = ({ title, ...restProps }) => {
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
          ? [<title key="CalendarX-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CalendarX',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CalendarX.displayName = 'CalendarX'

CalendarX.defaultProps = { height: 24, width: 24}

export default CalendarX
