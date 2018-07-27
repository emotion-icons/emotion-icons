import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M466 242h-76.7c-3.3-31.9-17.8-61.3-41.3-83.5-25-23.5-57.7-36.5-92-36.5s-67 13-91.9 36.5c-23.5 22.2-38 51.6-41.3 83.5H46c-7.7 0-14 6.3-14 14s6.3 14 14 14h76.7c3.3 31.9 17.8 61.3 41.3 83.5 25 23.5 57.7 36.5 92 36.5s67-13 91.9-36.5c23.5-22.2 38-51.6 41.3-83.5H466c7.7 0 14-6.3 14-14s-6.3-14-14-14zm-135 89c-20 20-46.6 31-75 31-28.3 0-54.9-11-75-31-20-20-31-46.6-31-75s11-54.9 31-75c20-20 46.6-31 75-31 28.3 0 54.9 11 75 31 20 20 31 46.6 31 75s-11 54.9-31 75z" key="k0" />
]


const GitCommit = ({ title, ...restProps }) => {
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
          ? [<title key="GitCommit-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GitCommit',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GitCommit.displayName = 'GitCommit'

GitCommit.defaultProps = { height: undefined, width: undefined}

export default GitCommit
