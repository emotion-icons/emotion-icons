import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16.2 9c-1.351.9-1.8 2.7-1.65 3.9-2.25-2.25 3.45-8.55-3-12.9C15.15 5.4 6 9.75 6 17.4c0 3 1.95 5.701 6 6.6 4.05-.898 6-3.6 6-6.6 0-4.5-2.7-6-1.8-8.4zM12 20.852c-1.8 0-3.45-1.5-3.45-3.451 0-1.801 1.5-3.45 3.45-3.45 1.8 0 3.45 1.5 3.45 3.45-.15 1.951-1.65 3.451-3.45 3.451z" key="k0" />
]

export const hex='#FA6423'
const SparkPost = ({ title, ...restProps }) => {
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
          ? [<title key="SparkPost-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SparkPost',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SparkPost.displayName = 'SparkPost'

SparkPost.defaultProps = { height: 24, width: 24}

export default SparkPost
