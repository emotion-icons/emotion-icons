import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M415.9 143.7c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3L413 95.6c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l25.5 25.5zm-331.1 0c3.1 3.1 8.2 3.1 11.3 0l25.5-25.5c3.1-3.1 3.1-8.2 0-11.3l-11.3-11.3c-3.1-3.1-8.2-3.1-11.3 0L73.5 121c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.4z" key="k0" />
,
<path d="M280 81.5V64c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16v17.5C137.3 93.3 64 174.1 64 272c0 106 86 192 192 192s192-86 192-192c0-97.9-73.3-178.7-168-190.5zm-10 219.3V320c0 7.7-6.3 14-14 14s-14-6.3-14-14v-19.2c-10.7-5.2-18-16.1-18-28.8s7.3-23.6 18-28.8V144c0-7.7 6.3-14 14-14s14 6.3 14 14v99.2c10.7 5.2 18 16.1 18 28.8s-7.3 23.6-18 28.8z" key="k1" />
]


const Stopwatch = ({ title, ...restProps }) => {
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
          ? [<title key="Stopwatch-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Stopwatch',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Stopwatch.displayName = 'Stopwatch'

Stopwatch.defaultProps = { height: undefined, width: undefined}

export default Stopwatch
