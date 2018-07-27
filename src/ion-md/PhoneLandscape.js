import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M480 358.856V153.143C480 130.512 461.674 112 439.272 112H72.728C50.326 112 32 130.512 32 153.143v205.713C32 381.488 50.326 400 72.728 400h366.545C461.674 400 480 381.488 480 358.856zM112 364V148h288v216H112z" key="k0" />
]


const PhoneLandscape = ({ title, ...restProps }) => {
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
          ? [<title key="PhoneLandscape-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PhoneLandscape',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PhoneLandscape.displayName = 'PhoneLandscape'

PhoneLandscape.defaultProps = { height: undefined, width: undefined}

export default PhoneLandscape
