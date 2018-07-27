import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M424 96h-40v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H160v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H88c-22 0-40 18-40 40v272c0 22 18 40 40 40h336c22 0 40-18 40-40V136c0-22-18-40-40-40zm8 300c0 11-9 20-20 20H100c-11 0-20-9-20-20V216c0-4.4 3.6-8 8-8h336c4.4 0 8 3.6 8 8v180zM160 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72zm224 0c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72z" key="k0" />
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
      viewBox: '0 0 512 512',
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

Calendar.defaultProps = { height: undefined, width: undefined}

export default Calendar
