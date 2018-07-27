import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M317.5 210.3c1.7-1.8 1.8-4.7 0-6.5l-19.8-21c-.8-.9-2-1.4-3.2-1.4-1.2 0-2.4.5-3.2 1.4l-66.5 69.1 26.4 27.1 66.3-68.7zm-193.7 42.8c-.9-.9-2-1.4-3.2-1.4-1.2 0-2.3.5-3.2 1.4l-20.1 20.7c-1.8 1.8-1.8 4.8 0 6.6l63.2 65c4 4.2 9 6.6 13.2 6.6 6 0 11.1-4.5 13.1-6.4l.1-.1 13.4-13.8-76.5-78.6z" key="k0" />
,
<path d="M414.7 182.4l-19.8-21c-.8-.9-2-1.4-3.2-1.4-1.2 0-2.4.5-3.2 1.4L250.7 304.1l-50.1-51.6c-.9-.9-2-1.4-3.2-1.4-1.2 0-2.3.5-3.2 1.4l-20.1 20.7c-1.8 1.8-1.8 4.8 0 6.6l63.2 65c4 4.2 9 6.6 13.2 6.6 6 0 11.1-4.5 13.1-6.4l.1-.1 151-156.1c1.7-1.7 1.7-4.6 0-6.4z" key="k1" />
]


const DoneAll = ({ title, ...restProps }) => {
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
          ? [<title key="DoneAll-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DoneAll',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

DoneAll.displayName = 'DoneAll'

DoneAll.defaultProps = { height: undefined, width: undefined}

export default DoneAll
