import React from 'react'


const ERROR_NO_NAME = {
  code: 'empty',
  message: 'no name provided'
}

const assert = (a: any) => {
  !a && console.error(ERROR_NO_NAME)
}

const localStorage = () => {
  const clearAll = () => {
    window.localStorage.clear()
  }

  const deleteItem = (name: string) => {
    assert(name)
    try {
      window.localStorage.removeItem(name)
    } catch (error) {
      console.error({ error })
    }
  }

  const getItem = (name: string) => {
    assert(name)
    const item = window.localStorage.getItem(name)
    return item
  }

  return {
    getItem: getItem,
    deleteItem: deleteItem,
    clearAll: clearAll
  }
}
export default localStorage
