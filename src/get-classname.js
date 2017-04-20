import { css, styleSheet } from 'glamor'

function extractGlamorStyles (className = '') {
  return className.toString().split(' ').reduce((groups, name) => {
    if (name.indexOf('css-') === 0) {
      const id = name.slice('css-'.length)
      const { style } = styleSheet.registered[id]
      groups.glamorStyles.push(style)
    } else {
      groups.glamorlessClassName = `${groups.glamorlessClassName} ${name}`.trim()
    }
    return groups
  }, { glamorlessClassName: '', glamorStyles: [] })
}

export default getGlamorClassName

function getGlamorClassName (styles, props) {
  const mappedArgs = styles.slice()
  for (let i = mappedArgs.length; i--;) {
    if (typeof mappedArgs[i] === 'function') {
      mappedArgs[i] = mappedArgs[i](props)
    }
  }
  const {
    glamorStyles: parentGlamorStyles,
    glamorlessClassName
  } = extractGlamorStyles(props.className)
  const glamorClassName = css(...mappedArgs, ...parentGlamorStyles).toString()
  return `${glamorlessClassName} ${glamorClassName}`.trim()
}
