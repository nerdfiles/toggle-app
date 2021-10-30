/**
 * @fileoverview
 * @description
 * some service layer abstraction
 */

const api = () => {
  const apiData = () => {
    return new Promise((resolve, reject) => {
      resolve({})
    })
  }
  return {
    apiData
  }
}

export default api

// EOF
