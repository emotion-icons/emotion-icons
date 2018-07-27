import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M288 136V0H88C74.7 0 64 10.7 64 24v232H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h140.9c3 0 5.8 1.7 7.2 4.4l19.9 39.8 56.8-113.7c2.9-5.9 11.4-5.9 14.3 0l34.7 69.5H352c8.8 0 16 7.2 16 16s-7.2 16-16 16h-89.9L240 275.8l-56.8 113.7c-2.9 5.9-11.4 5.9-14.3 0L134.1 320H64v168c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H312c-13.2 0-24-10.8-24-24zm153-31L343.1 7c-4.5-4.5-10.6-7-17-7H320v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" key="k0" />
]


const FileMedicalAlt = ({ title, ...restProps }) => {
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
          ? [<title key="FileMedicalAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 448 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FileMedicalAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FileMedicalAlt.displayName = 'FileMedicalAlt'

FileMedicalAlt.defaultProps = { height: undefined, width: undefined}

export default FileMedicalAlt
