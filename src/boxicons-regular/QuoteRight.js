import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 20c2.783 0 4.906-.771 6.309-2.292C11.196 15.66 11.006 13.03 11 13V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1.779c-.24.505-.741 1-1.779 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1zm1-3.103C6.181 16.423 7 14.41 7 13a1 1 0 0 0-1-1H4V6h5l.003 7.076c.001.019.116 1.902-1.181 3.293-.849.91-2.132 1.444-3.822 1.589v-1.061zM14 20c2.783 0 4.906-.771 6.309-2.292C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1.784c-.24.526-.742 1.034-1.784 1.034a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1zm1-3.069c2.181-.478 3-2.509 3-3.931a1 1 0 0 0-1-1h-2V6h5l.003 7.076c.001.019.116 1.902-1.181 3.293-.85.91-2.132 1.443-3.822 1.589v-1.027z" key="k0" />
]


const QuoteRight = ({ title, ...restProps }) => {
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
          ? [<title key="QuoteRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-QuoteRight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

QuoteRight.displayName = 'QuoteRight'

QuoteRight.defaultProps = { height: 24, width: 24}

export default QuoteRight
