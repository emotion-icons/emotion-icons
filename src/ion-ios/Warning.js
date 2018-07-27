import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z" key="k0" />
]


const Warning = ({ title, ...restProps }) => {
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
          ? [<title key="Warning-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Warning',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Warning.displayName = 'Warning'

Warning.defaultProps = { height: undefined, width: undefined}

export default Warning
