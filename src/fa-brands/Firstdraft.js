import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M384 192h-64v128H192v128H0v-25.6h166.4v-128h128v-128H384V192zm-25.6 38.4v128h-128v128H64V512h192V384h128V230.4h-25.6zm25.6 192h-89.6V512H320v-64h64v-25.6zM0 0v384h128V256h128V128h128V0H0z" key="k0" />
]


const Firstdraft = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Firstdraft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 384 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Firstdraft',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Firstdraft.displayName = 'Firstdraft'

Firstdraft.defaultProps = { height: undefined, width: undefined}

export default Firstdraft
