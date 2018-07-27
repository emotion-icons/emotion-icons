import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 20c2.783 0 4.906-.771 6.309-2.292C11.196 15.66 11.006 13.03 11 13V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.102c-.02.225-.08.479-.221.728-.338.596-1.052 1.035-2.123 1.302A1 1 0 0 0 2 17v2a1 1 0 0 0 1 1zm10.758-3.97A1 1 0 0 0 13 17v2a1 1 0 0 0 1 1c2.783 0 4.906-.771 6.309-2.292C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.102c-.02.225-.08.479-.221.728-.338.596-1.052 1.034-2.123 1.302z" key="k0" />
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
