import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M409 39c-4.5-4.5-10.6-7-16.9-7H119.9c-6.4 0-12.4 2.5-16.9 7-4.5 4.5-7 10.6-7 16.9V456c0 6.4 2.5 12.4 7 16.9 4.5 4.5 10.6 7 16.9 7H392c6.4 0 12.4-2.5 16.9-7 4.5-4.5 7-10.6 7-16.9V55.9c.1-6.3-2.4-12.4-6.9-16.9zm-153.4 9.7c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7c0-3.8 3.2-7 7-7zM256 470c-7.7 0-14-6.5-14-14.1 0-7.5 6.2-14 14-14 7.7 0 14.1 6.4 14.1 14-.1 7.6-6.4 14.1-14.1 14.1zm144-38H112V80h288v352z" key="k0" />
]


const TabletPortrait = ({ title, ...restProps }) => {
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
          ? [<title key="TabletPortrait-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TabletPortrait',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TabletPortrait.displayName = 'TabletPortrait'

TabletPortrait.defaultProps = { height: undefined, width: undefined}

export default TabletPortrait
