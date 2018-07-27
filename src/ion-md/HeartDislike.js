import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M51.9 76.6l25 25c-18.1 20.3-29 47.3-29 77.6 0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2c20.6-18.9 39.9-36.6 57.5-53.3l92.2 92 24-24-383.8-383-24.2 24.1zM464 179.1C464 114.2 414.1 64 349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64c-8.4 0-16.5.9-24.3 2.5l253.7 253.1C437.3 270.9 464 228 464 179.1z" key="k0" />
]


const HeartDislike = ({ title, ...restProps }) => {
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
          ? [<title key="HeartDislike-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-HeartDislike',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

HeartDislike.displayName = 'HeartDislike'

HeartDislike.defaultProps = { height: undefined, width: undefined}

export default HeartDislike
