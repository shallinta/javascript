const env = require('./env');

module.exports = {
  extends: ['.'],
  env,
  rules: {
    // 关闭缩进检查
    indent: 'off',
    'import/extensions': 'off',
    // 忽略 node_modules 中的引用，因为
    // 1.服务器端检查不会安装依赖包
    // 2. 在 webpack 可以设置 alias ，这也会影响地址的判断
    // 所以干脆关闭该项检查，反正在本地已经检查过了，问题不大
    'import/no-unresolved': 'off',
    'import/resolver': 'off'
  }
};
