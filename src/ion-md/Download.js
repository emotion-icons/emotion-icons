import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M416 199.5h-91.4V64H187.4v135.5H96l160 158.1 160-158.1zM96 402.8V448h320v-45.2H96z" key="k0" />
]


const Download = ({ title, ...restProps }) => {
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
          ? [<title key="Download-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Download',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Download.displayName = 'Download'

Download.defaultProps = { height: undefined, width: undefined}

export default Download
