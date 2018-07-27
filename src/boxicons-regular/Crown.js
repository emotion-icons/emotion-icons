import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 21h16a1 1 0 0 0 1-1V4a1.002 1.002 0 0 0-1.781-.625L16 7.399l-3.219-4.024c-.381-.475-1.182-.475-1.563 0L8 7.399 4.781 3.375A1.002 1.002 0 0 0 3 4v16a1 1 0 0 0 1 1zm1-2v-2h14v2H5zm2.219-9.375c.381.475 1.182.475 1.563 0L12 5.601l3.219 4.024c.381.475 1.182.475 1.563 0L19 6.851V15H5V6.851l2.219 2.774z" key="k0" />
]


const Crown = ({ title, ...restProps }) => {
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
          ? [<title key="Crown-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Crown',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Crown.displayName = 'Crown'

Crown.defaultProps = { height: 24, width: 24}

export default Crown
