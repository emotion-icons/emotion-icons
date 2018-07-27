import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 8c0-4.736-3.269-5.996-4.998-6l-.013 2c.308.006 3.011.173 3.011 4 0 1.993.831 3.246 1.877 4-1.046.754-1.877 2.007-1.877 4 0 3.827-2.703 3.994-3.011 4L14 21l.002 1C15.731 21.996 19 20.736 19 16c0-2.823 2.504-2.994 3-3l.006-2C21.504 10.994 19 10.823 19 8zM5 16c0 4.736 3.269 5.996 4.998 6l.013-2C9.703 19.994 7 19.827 7 16c0-1.993-.831-3.246-1.877-4C6.169 11.246 7 9.993 7 8c0-3.827 2.703-3.994 3.011-4L10 3l-.002-1C8.269 2.004 5 3.264 5 8c0 2.823-2.504 2.994-3 3l-.006 2c.502.006 3.006.177 3.006 3z" key="k0" />
]


const CodeCurly = ({ title, ...restProps }) => {
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
          ? [<title key="CodeCurly-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CodeCurly',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CodeCurly.displayName = 'CodeCurly'

CodeCurly.defaultProps = { height: 24, width: 24}

export default CodeCurly
