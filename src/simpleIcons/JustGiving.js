import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.716 9.925H15.33l-4.898 4.919h6.727c-.885 1.975-2.865 3.061-5.16 3.061-3.104 0-5.639-2.67-5.639-5.771C6.36 9.02 8.896 6.42 12 6.42c1.134 0 2.189.295 3.061.871l4.542-4.561A11.92 11.92 0 0 0 12 0C5.37 0 0 5.367 0 12c0 6.623 5.37 12 12 12s12-5.115 12-11.738c0-.896-.103-1.35-.284-2.337z" key="k0" />
]

export const hex='#AD29B6'
const JustGiving = ({ title, ...restProps }) => {
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
          ? [<title key="JustGiving-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-JustGiving',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

JustGiving.displayName = 'JustGiving'

JustGiving.defaultProps = { height: 24, width: 24}

export default JustGiving
