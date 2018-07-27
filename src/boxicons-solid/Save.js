import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 21h16a1 1 0 0 0 1-1V8a.997.997 0 0 0-.293-.707l-4-4A.996.996 0 0 0 16 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1zm11-7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM7 5h7v3H7V5z" key="k0" />
]


const Save = ({ title, ...restProps }) => {
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
          ? [<title key="Save-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Save',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Save.displayName = 'Save'

Save.defaultProps = { height: 24, width: 24}

export default Save
