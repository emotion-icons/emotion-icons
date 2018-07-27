import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path style={{"fill":"#010101"}} d="M117.3 42.7c-17.6 0-32 14.4-32 32v362.7c0 17.6 14.4 32 32 32H320V42.7H117.3zm267.4 0H368v426.7h16.7c23.1 0 42-18.9 42-42V84.7c0-23.1-18.9-42-42-42z" key="k0" />
]


const Journal = ({ title, ...restProps }) => {
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
          ? [<title key="Journal-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Journal',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Journal.displayName = 'Journal'

Journal.defaultProps = { height: undefined, width: undefined}

export default Journal
