import React from 'react'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid' 

const createInnerElements = body =>
  body.map(item => React.createElement(item.type, {...item.props}))

function calcRatio(value, ratio = 1) {
  if (typeof ratio !== 'number') return value
  if (typeof value === 'number') return value * ratio
  const unitlessValue = parseFloat(value)
  return unitlessValue * ratio + value.replace(`${unitlessValue}`, '')
}

const calcDimension = (key, {size, ratio, ...HW}) => {
  const targetV = HW[key]
  const value = size
    ? ratio
      ? calcRatio(size, ratio)
      : size
    : targetV
      ? ratio
        ? calcRatio(targetV, ratio)
        : targetV
      : null
  return value ? {[key]: value} : {}
}

const createIcon = config => {
  const Inner = createInnerElements(config.body)
  const StyledIcon = styled('svg', {
    shouldForwardProp: name =>
      !['width', 'size', 'height', 'css', 'color'].includes(name) && isPropValid(name),
  })(
    ({
      size,
      ratio,
      height = config['height'],
      width = config['width'],
      css,
      color = config['color'],
    }) => ({
      ...config.css,
      ...calcDimension('height', {size, ratio, height, width}),
      ...calcDimension('width', {size, ratio, height, width}),
      ...(color ? {color} : {}),
      ...css,
    }),
  )

  const Icon = ({title, ...restProps}) => {
    const passProps = {
      viewBox: config.viewBox,
      'aria-hidden': title ? null : 'true',
      'aria-labelledby': title && config.labelledby,
      focusable: 'false',
      role: title ? undefined : 'img',
      ...config.attrs,
      ...restProps,
    }
    return (
      <StyledIcon {...passProps}>
        {title && <title key={config.titleKey}>{title}</title>}
        {Inner}
      </StyledIcon>
    )
  }

  Icon.displayName = config.displayName

  Icon.defaultProps = config.defaultProps
  return Icon
}

export default createIcon
