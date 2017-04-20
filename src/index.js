/** @jsx h */
import { h } from 'preact'
import getClassName from './get-classname'

export default function glam (comp) {
  return function glamComponentFactory (...styles) {
    const GlamComponent = props => {
      const { className, glam, ...toForward } = props
      const fullClassName = getClassName(GlamComponent.styles, props)
      return <GlamComponent.comp {...toForward} className={fullClassName} />
    }

    GlamComponent.comp = comp.comp ? comp.comp : comp
    GlamComponent.styles = comp.styles ? comp.styles.concat(styles) : styles
    return GlamComponent
  }
}
