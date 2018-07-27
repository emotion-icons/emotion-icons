import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M313.553 392.331L209.587 504.334c-9.485 10.214-25.676 10.229-35.174 0L70.438 392.331C56.232 377.031 67.062 352 88.025 352H152V80H68.024a11.996 11.996 0 0 1-8.485-3.515l-56-56C-4.021 12.926 1.333 0 12.024 0H208c13.255 0 24 10.745 24 24v328h63.966c20.878 0 31.851 24.969 17.587 40.331z" key="k0" />
]


const LevelDownAlt = ({ title, ...restProps }) => {
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
          ? [<title key="LevelDownAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 320 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LevelDownAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LevelDownAlt.displayName = 'LevelDownAlt'

LevelDownAlt.defaultProps = { height: undefined, width: undefined}

export default LevelDownAlt
