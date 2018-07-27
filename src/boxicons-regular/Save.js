import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 21h16a1 1 0 0 0 1-1V8a.997.997 0 0 0-.293-.707l-4-4A.996.996 0 0 0 16 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1zM5 5h2v3h8V5h.586L19 8.414V19H5V5z" key="k0" />
,
<path d="M12 10c-1.93 0-3.5 1.57-3.5 3.5S10.07 17 12 17s3.5-1.57 3.5-3.5S13.93 10 12 10zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 12 12 12s1.5.673 1.5 1.5S12.827 15 12 15z" key="k1" />
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
