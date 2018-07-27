import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.769 8.359l-5-6A1.005 1.005 0 0 0 16 2H8c-.297 0-.578.132-.769.359l-5 6c-.296.357-.309.87-.031 1.241l9 12c.013.018.034.024.048.04a.985.985 0 0 0 .255.213A.98.98 0 0 0 12 22a.964.964 0 0 0 .497-.148.985.985 0 0 0 .255-.213c.014-.017.035-.022.048-.04l9-12a1 1 0 0 0-.031-1.24zM18.865 8H15.72l-1.334-4h1.145l3.334 4zM8.22 10l1.609 6.439L5 10h3.22zm2.061 0h3.438L12 16.877 10.281 10zm5.499 0H19l-4.829 6.439L15.78 10zm-3.501-6l1.333 4h-3.225l1.333-4h.559zm-3.81 0h1.145L8.279 8H5.135l3.334-4z" key="k0" />
]


const Diamond = ({ title, ...restProps }) => {
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
          ? [<title key="Diamond-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Diamond',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Diamond.displayName = 'Diamond'

Diamond.defaultProps = { height: 24, width: 24}

export default Diamond
