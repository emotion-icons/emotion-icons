import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 22c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" key="k0" />
,
<path d="M11 10h2v4h-2zM9 2h6v2H9zm11.707 3.293l-1.414 1.414-2-2 1.414-1.414z" key="k1" />
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
      viewBox: '0 0 24 24',
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

Stopwatch.defaultProps = { height: 24, width: 24}

export default Stopwatch
