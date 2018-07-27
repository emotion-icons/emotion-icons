import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M192 104H96V56c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24v48zm224-48c0-13.255-10.745-24-24-24h-48c-13.255 0-24 10.745-24 24v48h96V56zM0 456c0 13.255 10.745 24 24 24h120c13.255 0 24-10.745 24-24v-16H0v16zm88-328c-13.255 0-24 10.745-24 24C64 256 0 272 0 416h168V312c0-13.255 10.745-24 24-24V128H88zm256 328c0 13.255 10.745 24 24 24h120c13.255 0 24-10.745 24-24v-16H344v16zM216 128v160h80V128h-80zm128 288h168c0-144-64-160-64-264 0-13.255-10.745-24-24-24H320v160c13.255 0 24 10.745 24 24v104z" key="k0" />
]


const Binoculars = ({ title, ...restProps }) => {
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
          ? [<title key="Binoculars-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Binoculars',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Binoculars.displayName = 'Binoculars'

Binoculars.defaultProps = { height: undefined, width: undefined}

export default Binoculars
