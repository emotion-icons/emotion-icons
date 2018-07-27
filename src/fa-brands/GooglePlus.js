import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm-70.7 372c-68.8 0-124-55.5-124-124s55.2-124 124-124c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1s34.2 78.1 77.2 78.1c32.6 0 64.9-19.1 70.1-53.3h-70.1v-42.6h116.9c1.3 6.8 1.9 13.6 1.9 20.7 0 70.8-47.5 121.2-118.8 121.2zm230.2-106.2v35.5H372v-35.5h-35.5v-35.5H372v-35.5h35.5v35.5h35.2v35.5h-35.2z" key="k0" />
]


const GooglePlus = ({ title, ...restProps }) => {
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
          ? [<title key="GooglePlus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 496 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GooglePlus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GooglePlus.displayName = 'GooglePlus'

GooglePlus.defaultProps = { height: undefined, width: undefined}

export default GooglePlus
