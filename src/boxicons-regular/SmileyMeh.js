import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<ellipse cx={8.5} cy={10} rx={1.5} ry={2} key="k0" />
,
<ellipse cx={15.5} cy={10} rx={1.5} ry={2} key="k1" />
,
<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" key="k2" />
,
<path d="M8 15h8v2H8z" key="k3" />
]


const SmileyMeh = ({ title, ...restProps }) => {
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
          ? [<title key="SmileyMeh-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SmileyMeh',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SmileyMeh.displayName = 'SmileyMeh'

SmileyMeh.defaultProps = { height: 24, width: 24}

export default SmileyMeh
