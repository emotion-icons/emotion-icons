import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13.508 24s-.84-.152-1.517-.152c-.609 0-1.523.152-1.523.152l.191-10.195C9.244 11.359 5.086 3.91 2.491 0c1.305.297 1.854.279 3.165 0l.02.034c1.652 2.926 4.179 7.005 6.315 10.54C14.1 7.101 17.42 1.678 18.32 0c1.02.268 2.049.258 3.189 0-1.201 1.617-5.566 9.173-8.205 13.805L13.5 24h.008z" key="k0" />
]

export const hex='#440099'
const Yahoo = ({ title, ...restProps }) => {
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
          ? [<title key="Yahoo-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Yahoo',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Yahoo.displayName = 'Yahoo'

Yahoo.defaultProps = { height: 24, width: 24}

export default Yahoo
