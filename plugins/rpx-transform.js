export default function rpxTransform() {
  return {
    name: 'rpx-transform',
    transform(code, id) {
      if (/\.vue$/.test(id) || /\.css$/.test(id) || /\.scss$/.test(id)) {
        code = code.replace(/(\d+)rpx/g, (match, num) => {
          return `${num * 0.5}px`
        })
      }
      return code
    }
  }
}
