import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13 14.899A5.009 5.009 0 0 0 17 10c0-2.757-2.243-5-5-5s-5 2.243-5 5h2c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3h-1v3h2v-1.101zM11 18h2v2h-2z" key="k0" />
]


const QuestionMark = ({ title, ...restProps }) => {
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
          ? [<title key="QuestionMark-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-QuestionMark',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

QuestionMark.displayName = 'QuestionMark'

QuestionMark.defaultProps = { height: 24, width: 24}

export default QuestionMark
