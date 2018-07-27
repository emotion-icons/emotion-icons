import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<g fillOpacity={.9} key="k0">
  <path d="M255.8 48C141 48 48 141.2 48 256s93 208 207.8 208c115 0 208.2-93.2 208.2-208S370.8 48 255.8 48zm.2 374.4c-91.9 0-166.4-74.5-166.4-166.4S164.1 89.6 256 89.6 422.4 164.1 422.4 256 347.9 422.4 256 422.4z" />
  <path d="M266.4 152h-31.2v124.8l109.2 65.5 15.6-25.6-93.6-55.5V152z" />
</g>
]


const Time = ({ title, ...restProps }) => {
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
          ? [<title key="Time-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Time',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Time.displayName = 'Time'

Time.defaultProps = { height: undefined, width: undefined}

export default Time
