import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3h-4V2h-2v1H9V2H7v1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5v1h2V5h6v1h2V5h3v3H4V5h3zm2 11v2H7v-2h2zm-2-2v-2h2v2H7zm6 2v2h-2v-2h2zm-2-2v-2h2v2h-2zm4 4v-2h2v2h-2zm2-4h-2v-2h2v2z" key="k0" />
]


const Calendar = ({ title, ...restProps }) => {
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
          ? [<title key="Calendar-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Calendar',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Calendar.displayName = 'Calendar'

Calendar.defaultProps = { height: 24, width: 24}

export default Calendar
