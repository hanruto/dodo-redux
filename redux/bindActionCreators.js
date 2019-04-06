function bindActionCreator(creator, dispatch) {
  return function() {
    return dispatch(creator.apply(this, arguments))
  }
}

export default function bindActionCreators(creators, dispatch) {
  if (typeof creators === 'function') {
    return bindActionCreator(creators, dispatch)
  }

  if (creators && typeof creators === 'object') {
    const res = {}
    for (const key in creators) {
      res[key] = bindActionCreator(creators[key], dispatch)
    }
    return res
  }
}
