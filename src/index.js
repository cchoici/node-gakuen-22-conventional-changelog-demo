
function plugin (Vue, options = {}) {
}

plugin.version = '0.0.0'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
