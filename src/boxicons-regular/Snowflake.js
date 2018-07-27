import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.707 8.707l-1.414-1.414L15.586 11H13V8.414l3.707-3.707-1.414-1.414L13 5.586V2h-2v3.586L8.707 3.293 7.293 4.707 11 8.414V11H8.414L4.707 7.293 3.293 8.707 5.586 11H2v2h3.586l-2.293 2.293 1.414 1.414L8.414 13H11v2.586l-3.707 3.707 1.414 1.414L11 18.414V22h2v-3.586l2.293 2.293 1.414-1.414L13 15.586V13h2.586l3.707 3.707 1.414-1.414L18.414 13H22v-2h-3.586z" key="k0" />
]


const Snowflake = ({ title, ...restProps }) => {
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
          ? [<title key="Snowflake-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Snowflake',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Snowflake.displayName = 'Snowflake'

Snowflake.defaultProps = { height: 24, width: 24}

export default Snowflake
