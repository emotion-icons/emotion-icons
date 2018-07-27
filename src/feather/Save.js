import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" key="k0" />
,
<polyline points="17 21 17 13 7 13 7 21" key="k1" />
,
<polyline points="7 3 7 8 15 8" key="k2" />
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
        "fill": "none",
  "stroke": "currentColor",
  "strokeLinecap": "round",
  "strokeLinejoin": "round",
      ...restProps
    }
    )
  }

Save.displayName = 'Save'

Save.defaultProps = { height: 24, width: 24}

export default Save
