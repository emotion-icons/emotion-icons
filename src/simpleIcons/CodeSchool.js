import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.003 21.832c-5.438 0-9.847-4.41-9.847-9.844 0-5.438 4.41-9.844 9.847-9.844 5.435 0 9.842 4.406 9.842 9.844a9.836 9.836 0 0 1-9.842 9.844zm0-21.832C5.375 0 0 5.376 0 12s5.377 12 12.003 12C18.625 24 24 18.624 24 12S18.637-.012 12.003 0zm-1.3 15.294L7.2 12l3.503-3.307V5.61L3.943 12l6.76 6.38v-3.086zm2.61-9.685v3.07L16.81 12l-3.502 3.294v3.086L20.07 12l-6.763-6.39" key="k0" />
]

export const hex='#4CADC0'
const CodeSchool = ({ title, ...restProps }) => {
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
          ? [<title key="CodeSchool-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CodeSchool',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CodeSchool.displayName = 'CodeSchool'

CodeSchool.defaultProps = { height: 24, width: 24}

export default CodeSchool
