import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.554 3.668a5.5 5.5 0 0 0-1.338 5.581l-7.501 7.5a.997.997 0 0 0-.282.566l-.354 2.475a1 1 0 0 0 1.131 1.131l2.475-.354c.375-.053.687-.315.808-.673l.479-1.438h.693a.995.995 0 0 0 .948-.684l.479-1.438h.693a.997.997 0 0 0 .948-.684l.479-1.438h.692a.995.995 0 0 0 .707-.293l1.138-1.137a5.502 5.502 0 0 0 5.581-1.338 5.507 5.507 0 0 0 0-7.778 5.506 5.506 0 0 0-7.776.002zm4.95 4.95a1.502 1.502 0 0 1-2.122 0 1.502 1.502 0 0 1 0-2.122 1.502 1.502 0 0 1 2.122 0 1.502 1.502 0 0 1 0 2.122z" key="k0" />
]


const Key = ({ title, ...restProps }) => {
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
          ? [<title key="Key-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Key',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Key.displayName = 'Key'

Key.defaultProps = { height: 24, width: 24}

export default Key
