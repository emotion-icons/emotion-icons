import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.976 6.976 0 0 0 11 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0 1 11 6zm5.64 9.14A6.89 6.89 0 0 0 17.92 12H15.9a5 5 0 0 1-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.976 6.976 0 0 0 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z" key="k0" />
]


const FindReplace = ({ title, ...restProps }) => {
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
          ? [<title key="FindReplace-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FindReplace',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FindReplace.displayName = 'FindReplace'

FindReplace.defaultProps = { height: 24, width: 24}

export default FindReplace
