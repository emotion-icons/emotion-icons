import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M273.5 152.1H48l54.1-103.9h240.7z" key="k0" />
,
<circle cx={256.2} cy={377.2} r={86.6} key="k1" />
,
<path d="M348.9 299.1l115.1-147-69.3-103.9L256.4 256c32.3 0 62.7 12.7 85.5 35.5 2.5 2.5 4.8 5 7 7.6zm-143.1-32.5L152.3 186H48.4l90.1 161.5c5.2-21.2 16.1-40.6 32-56.4 10.4-10.3 22.3-18.6 35.3-24.5z" key="k2" />
]


const Medal = ({ title, ...restProps }) => {
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
          ? [<title key="Medal-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Medal',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Medal.displayName = 'Medal'

Medal.defaultProps = { height: undefined, width: undefined}

export default Medal
