import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3h-4V2h-2v1H9V2H7v1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5v1h2V5h6v1h2V5h3v3H4V5h3zm4.707 12.707a.997.997 0 0 1-1.414 0l-2.5-2.5 1.414-1.414L11 15.586l4.293-4.293 1.414 1.414-5 5z" key="k0" />
]


const CalendarCheck = ({ title, ...restProps }) => {
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
          ? [<title key="CalendarCheck-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CalendarCheck',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CalendarCheck.displayName = 'CalendarCheck'

CalendarCheck.defaultProps = { height: 24, width: 24}

export default CalendarCheck
