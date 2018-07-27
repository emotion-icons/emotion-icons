import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-17.5 17.5-14.1-14.1c-4.7-4.7-12.3-4.7-17 0L224.5 133c-4.7 4.7-4.7 12.3 0 17l14.1 14.1-18 18c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l18-18 14.1 14.1c4.7 4.7 12.3 4.7 17 0l28.3-28.3c4.7-4.7 4.7-12.3 0-17L329.2 164l17.5-17.5 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c-.1-6.6-5.5-12-12.1-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" key="k0" />
]


const MarsStroke = ({ title, ...restProps }) => {
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
          ? [<title key="MarsStroke-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 384 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MarsStroke',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MarsStroke.displayName = 'MarsStroke'

MarsStroke.defaultProps = { height: undefined, width: undefined}

export default MarsStroke
