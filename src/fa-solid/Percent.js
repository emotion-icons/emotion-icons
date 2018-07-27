import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0 0 50.1 0 112s50.1 112 112 112zm0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2z" key="k0" />
]


const Percent = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Percent-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 448 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Percent',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Percent.displayName = 'Percent'

Percent.defaultProps = { height: undefined, width: undefined}

export default Percent
