import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12S18.628 0 12 0zM7.08 4.182h2.781c.233 0 .42.21.42.47v14.696c0 .26-.187.47-.42.47h-2.78c-.233 0-.42-.21-.42-.47V4.652c0-.26.187-.47.42-.47zm4.664 0a.624.624 0 0 1 .326.091c.355.209 7.451 4.42 8.057 4.78a.604.604 0 0 1 0 1.039c-.436.264-7.558 4.495-8.074 4.789a.577.577 0 0 1-.873-.512v-1.812c0-1.712 2.962-2.201 3.398-2.465a.604.604 0 0 0 0-1.04c-.605-.36-3.398-.746-3.398-2.452V4.79c0-.334.251-.605.564-.61z" key="k0" />
]

export const hex='#1DA456'
const PicartoTV = ({ title, ...restProps }) => {
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
          ? [<title key="PicartoTV-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PicartoTV',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PicartoTV.displayName = 'PicartoTV'

PicartoTV.defaultProps = { height: 24, width: 24}

export default PicartoTV
