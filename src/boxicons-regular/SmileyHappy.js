import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<ellipse cx={8.5} cy={10} rx={1.5} ry={2} key="k0" />
,
<ellipse cx={15.5} cy={10} rx={1.5} ry={2} key="k1" />
,
<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" key="k2" />
,
<path d="M12 16a3.97 3.97 0 0 1-3.201-1.601L7.2 15.601A5.954 5.954 0 0 0 12 18a5.957 5.957 0 0 0 4.8-2.399L15.2 14.4A3.97 3.97 0 0 1 12 16z" key="k3" />
]


const SmileyHappy = ({ title, ...restProps }) => {
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
          ? [<title key="SmileyHappy-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SmileyHappy',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SmileyHappy.displayName = 'SmileyHappy'

SmileyHappy.defaultProps = { height: 24, width: 24}

export default SmileyHappy
