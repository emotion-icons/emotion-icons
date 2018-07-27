import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm93.6 291.2H172.801c-34.318 0-62.4-28.082-62.4-62.399 0-34.319 28.082-62.4 62.4-62.4h3.117c9.364-36.4 41.601-62.399 80.083-62.399 45.764 0 83.199 37.435 83.199 83.198h10.4c29.118 0 52 22.882 52 52.001 0 29.117-22.882 51.999-52 51.999z" key="k0" />
]


const CloudCircle = ({ title, ...restProps }) => {
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
          ? [<title key="CloudCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CloudCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CloudCircle.displayName = 'CloudCircle'

CloudCircle.defaultProps = { height: undefined, width: undefined}

export default CloudCircle
