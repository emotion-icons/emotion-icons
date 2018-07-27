import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M10 7c-.73 0-1.38.41-1.73 1.02V8C7.22 7.98 6 7.64 5.14 6.98c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 .99C.89.99 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.67c.67.7 1.44 1.27 2.3 1.69.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" key="k0" />
]


const GitMerge = ({ title, ...restProps }) => {
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
          ? [<title key="GitMerge-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 12 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GitMerge',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GitMerge.displayName = 'GitMerge'

GitMerge.defaultProps = { height: 16, width: 12}

export default GitMerge
