import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M474.1 398.2L229.8 167.8s8.8-57.7 26.2-71.8c17.5-14.2 48-32 48-32V32c-32 0-58.8 8.3-96.9 27.3-38 18.9-66.8 47.8-74.4 55.4-7.6 7.6-18.1 19.5-24.7 28.9s-5.3 20.1-5.3 20.1l-19.7 17-4-4c-2.3-2.3-6.2-2.3-8.5 0l-36.8 36.8c-2.3 2.3-2.3 6.2 0 8.5l59.4 59.4c2.3 2.3 6.2 2.3 8.5 0l36.8-36.8c2.3-2.3 2.3-6.2 0-8.5l-10.3-10.3 14.6-14.3c6.8-3.7 25.4-8.9 39.1-5.1l214.9 267.3c8.1 8.2 20.3 8.2 28.5 0l46.8-47.1c10.3-8 10.3-22.3 2.1-28.4z" key="k0" />
]


const Hammer = ({ title, ...restProps }) => {
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
          ? [<title key="Hammer-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hammer',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hammer.displayName = 'Hammer'

Hammer.defaultProps = { height: undefined, width: undefined}

export default Hammer
