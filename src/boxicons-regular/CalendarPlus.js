import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13 11h-2v3H8v2h3v3h2v-3h3v-2h-3z" key="k0" />
,
<path d="M21 3h-4V2h-2v1H9V2H7v1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM7 5v1h2V5h6v1h2V5h3v3H4V5h3zM4 20V10h16v10H4z" key="k1" />
]


const CalendarPlus = ({ title, ...restProps }) => {
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
          ? [<title key="CalendarPlus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CalendarPlus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CalendarPlus.displayName = 'CalendarPlus'

CalendarPlus.defaultProps = { height: 24, width: 24}

export default CalendarPlus
