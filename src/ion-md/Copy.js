import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M296 48H176.5C154.4 48 136 65.4 136 87.5V96h-7.5C106.4 96 88 113.4 88 135.5v288c0 22.1 18.4 40.5 40.5 40.5h208c22.1 0 39.5-18.4 39.5-40.5V416h8.5c22.1 0 39.5-18.4 39.5-40.5V176L296 48zm0 44.6l83.4 83.4H296V92.6zm48 330.9c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5h7.5v255.5c0 22.1 10.4 32.5 32.5 32.5H344v7.5zm48-48c0 4.7-3.4 8.5-7.5 8.5h-208c-4.4 0-8.5-4.1-8.5-8.5v-288c0-4.1 3.8-7.5 8.5-7.5H264v128h128v167.5z" key="k0" />
]


const Copy = ({ title, ...restProps }) => {
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
          ? [<title key="Copy-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Copy',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Copy.displayName = 'Copy'

Copy.defaultProps = { height: undefined, width: undefined}

export default Copy
