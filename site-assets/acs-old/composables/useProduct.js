const useProduct = () => {
  const config = useRuntimeConfig()
  const jwt = useState('jwt')
  const errorMsg = useState('errorMsg')
  const message = useState('message')

  const fetchBySlug = async (collection, slug) => {
    errorMsg.value = ''
    message.value = ''
    try {
      const response = await $fetch(`/api/v1/${collection}`, {
        method: 'GET',
        params: { slug },
        headers: {
          Authorization: `Bearer ${jwt.value}`,
        },
      })
      // console.log(response)
      return response
    } catch (err) {
      console.log('MYERROR', err)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return { docs: [], count: 0, totalCount: 0 }
    }
  }

  const fetchOemPartNumbersByOemId = async (oemId) => {
    errorMsg.value = ''
    message.value = ''
    try {
      const response = await $fetch(`/api/v1/oempartnumbers/${oemId}`, {
        method: 'GET',
        // params: { slug },
        headers: {
          Authorization: `Bearer ${jwt.value}`,
        },
      })
      // console.log(response)
      return response
    } catch (err) {
      console.log('MYERROR', err)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return { docs: [], count: 0, totalCount: 0 }
    }
  }

  const fetchAttributesByName = async (collection, attributeName) => {
    errorMsg.value = ''
    message.value = ''
    try {
      const response = await $fetch(`/api/v1/${collection}/${attributeName}`, {
        method: 'GET',
        // params: { slug },
        headers: {
          Authorization: `Bearer ${jwt.value}`,
        },
      })
      // console.log(response)
      return response
    } catch (err) {
      console.log('MYERROR', err)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return { docs: [], count: 0, totalCount: 0 }
    }
  }

  const createAlgoliaIndex = async () => {
    console.log('AL')
    errorMsg.value = ''
    message.value = ''
    try {
      const response = await $fetch(`/api/v1/products/algolia`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt.value}`,
        },
      })
      return response
    } catch (err) {
      console.log('MYERROR', err)
      if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
      return { docs: [], count: 0, totalCount: 0 }
    }
  }

  return {
    fetchBySlug,
    fetchOemPartNumbersByOemId,
    fetchAttributesByName,
    createAlgoliaIndex,
  }
}

export default useProduct
