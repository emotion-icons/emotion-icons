import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4h-7a1 1 0 0 0-1 1l.003 7.919c-.009.111-.199 2.741 1.688 4.789C16.094 19.229 18.217 20 21 20a1 1 0 0 0 1-1v-2c0-.459-.313-.859-.758-.971-1.075-.268-1.791-.706-2.128-1.303-.14-.248-.2-.503-.22-.727H21a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM3.691 17.708C5.094 19.229 7.217 20 10 20a1 1 0 0 0 1-1v-1.966a1 1 0 0 0-.75-.968c-1.074-.278-1.791-.726-2.13-1.33A1.851 1.851 0 0 1 7.897 14H10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1l.003 7.919c-.009.111-.199 2.741 1.688 4.789z" key="k0" />
]


const QuoteLeft = ({ title, ...restProps }) => {
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
          ? [<title key="QuoteLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-QuoteLeft',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

QuoteLeft.displayName = 'QuoteLeft'

QuoteLeft.defaultProps = { height: 24, width: 24}

export default QuoteLeft
