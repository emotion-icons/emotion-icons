import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M4.702 116.686l79.984-80.002c6.248-6.247 16.383-6.245 22.627 0l79.981 80.002c10.07 10.07 2.899 27.314-11.314 27.314H128v320c0 8.837-7.163 16-16 16H80c-8.837 0-16-7.163-16-16V144H16.016c-14.241 0-21.363-17.264-11.314-27.314zM240 96h256c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16H240c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16zm-16 112v-32c0-8.837 7.163-16 16-16h192c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H240c-8.837 0-16-7.163-16-16zm0 256v-32c0-8.837 7.163-16 16-16h64c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16h-64c-8.837 0-16-7.163-16-16zm0-128v-32c0-8.837 7.163-16 16-16h128c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H240c-8.837 0-16-7.163-16-16z" key="k0" />
]


const SortAmountUp = ({ title, ...restProps }) => {
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
          ? [<title key="SortAmountUp-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SortAmountUp',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SortAmountUp.displayName = 'SortAmountUp'

SortAmountUp.defaultProps = { height: undefined, width: undefined}

export default SortAmountUp
