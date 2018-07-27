import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" key="k0" />
]


const AssistantPhoto = ({ title, ...restProps }) => {
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
          ? [<title key="AssistantPhoto-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AssistantPhoto',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AssistantPhoto.displayName = 'AssistantPhoto'

AssistantPhoto.defaultProps = { height: 24, width: 24}

export default AssistantPhoto
