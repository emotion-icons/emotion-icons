import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M552 288c13.255 0 24 10.745 24 24v136h-96v-64H96v64H0V88c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24v200h456zM192 96c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm384 128c0-53.019-42.981-96-96-96H312c-13.255 0-24 10.745-24 24v104h288v-32z" key="k0" />
]


const Bed = ({ title, ...restProps }) => {
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
          ? [<title key="Bed-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 576 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bed',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bed.displayName = 'Bed'

Bed.defaultProps = { height: undefined, width: undefined}

export default Bed
