import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z" key="k0" />
]


const TicketAlt = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="TicketAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 576 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TicketAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TicketAlt.displayName = 'TicketAlt'

TicketAlt.defaultProps = { height: undefined, width: undefined}

export default TicketAlt
