import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.207 4.794l.23-.43V0H15.07l-.436.44-2.058 3.925-.646.436H4.58v5.993h4.04l.36.436-4.175 7.98-.24.43V24H8.93l.436-.44 2.07-3.925.644-.436h7.35v-5.993h-4.05l-.36-.438 4.186-7.977z" key="k0" />
]

export const hex='#05CC47'
const DeviantArt = ({ title, ...restProps }) => {
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
          ? [<title key="DeviantArt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DeviantArt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

DeviantArt.displayName = 'DeviantArt'

DeviantArt.defaultProps = { height: 24, width: 24}

export default DeviantArt
