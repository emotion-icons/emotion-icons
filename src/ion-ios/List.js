import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={92} cy={256} r={28} key="k0" />
,
<circle cx={92} cy={132} r={28} key="k1" />
,
<circle cx={92} cy={380} r={28} key="k2" />
,
<path d="M432 240H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 124H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16zM191.5 148H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H191.5c-8.8 0-16 7.2-16 16s7.2 16 16 16z" key="k3" />
]


const List = ({ title, ...restProps }) => {
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
          ? [<title key="List-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-List',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

List.displayName = 'List'

List.defaultProps = { height: undefined, width: undefined}

export default List
