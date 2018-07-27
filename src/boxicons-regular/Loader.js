import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 11h4v2H4zm12 0h4v2h-4zm-5 5h2v4h-2zm0-12h2v4h-2zM5.635 7.05L7.05 5.636l2.828 2.828L8.464 9.88zm12.729 9.9l-1.414 1.414-2.829-2.828 1.414-1.415zM7.05 18.364L5.637 16.95l2.829-2.829 1.414 1.415zm8.485-8.485l-1.414-1.414 2.828-2.829 1.415 1.414z" key="k0" />
]


const Loader = ({ title, ...restProps }) => {
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
          ? [<title key="Loader-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Loader',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Loader.displayName = 'Loader'

Loader.defaultProps = { height: 24, width: 24}

export default Loader
