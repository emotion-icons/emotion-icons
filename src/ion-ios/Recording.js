import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M386.2 146h-.1c-60.6 0-109.8 49.2-109.8 110.1 0 30.5 12.3 58 32.3 77.9H203.5c19.9-19.9 32.3-47.5 32.3-77.9 0-60.8-49.2-110.1-109.8-110.1h-.2C65.2 146 16 195.2 16 256s49.2 110 109.8 110h260.4c60.6 0 109.8-49.2 109.8-110s-49.2-110-109.8-110zM464 256c0 43.1-34.9 78.2-77.9 78.2s-77.9-35.1-77.9-78.2 34.9-78.2 77.9-78.2S464 212.9 464 256zm-338.1 78.2C83 334.2 48 299.1 48 256s34.9-78.2 77.9-78.2 77.9 35.1 77.9 78.2-34.9 78.2-77.9 78.2z" key="k0" />
]


const Recording = ({ title, ...restProps }) => {
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
          ? [<title key="Recording-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Recording',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Recording.displayName = 'Recording'

Recording.defaultProps = { height: undefined, width: undefined}

export default Recording
