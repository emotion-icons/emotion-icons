import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 17h3.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm13 4c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" key="k0" />
,
<path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5z" key="k1" />
]


const VolumeFull = ({ title, ...restProps }) => {
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
          ? [<title key="VolumeFull-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VolumeFull',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

VolumeFull.displayName = 'VolumeFull'

VolumeFull.defaultProps = { height: 24, width: 24}

export default VolumeFull
