import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" key="k0" />
,
<path d="M363 277H149v-42h214v42z" key="k1" />
]


const RemoveCircleOutline = ({ title, ...restProps }) => {
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
          ? [<title key="RemoveCircleOutline-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-RemoveCircleOutline',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

RemoveCircleOutline.displayName = 'RemoveCircleOutline'

RemoveCircleOutline.defaultProps = { height: undefined, width: undefined}

export default RemoveCircleOutline
