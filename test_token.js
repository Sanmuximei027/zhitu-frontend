// test_token.js
const { isTokenExpired } = require('./utils/tokenManager')

// 测试用例
const testCases = [
  {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzAwMDAwMDB9.abcdef', // 过期时间: 2021-08-27
    expected: true
  },
  {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjI2MzAwMDAwMDB9.abcdef', // 过期时间: 2053-04-27
    expected: false
  },
  {
    token: null,
    expected: true
  }
]

// 执行测试
testCases.forEach(({ token, expected }, index) => {
  const result = isTokenExpired(token)
  console.log(`测试用例 ${index + 1}: ${result === expected ? '通过' : '失败'}`)
})