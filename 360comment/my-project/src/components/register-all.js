import comment from './comment/index.vue'
import commentItem from './comment/commentItem.vue'
const components = {
  comment,commentItem
}

export default function registerAllComponents (instance) {
  Object.keys(components).forEach(key => {
    instance.component(key, components[key])
  })
}
