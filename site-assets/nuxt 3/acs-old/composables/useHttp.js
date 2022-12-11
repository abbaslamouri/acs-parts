const useHttp = () => {
	const config = useRuntimeConfig()
	// const { errorMsg, message } = useAppState()
	// const { token } = useAuth()
	const jwt = useState('jwt')

	const errorMsg = useState('errorMsg')
	const message = useState('message')

	const getErrorStr = (errors) => {
		console.log('MYERROR', errors)
		let errorStr = ''
		for (const prop in errors) {
			errorStr = `${errorStr}<li>${errors[prop].message}</li>`
		}
		return `<ul>${errorStr}</ul>`
	}

	const fetchAll = async (collection, params = {}) => {
		errorMsg.value = ''
		message.value = ''
		try {
			const response = await $fetch(`/api/v1/${collection}`, {
				method: 'GET',
				params,
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

	const fetchDoc = async (resource, id) => {
		errorMsg.value = null
		message.value = null
		try {
			const response = await fetch(`${config.apiUrl}/${resource}/${id}`, {
				method: 'GET',
				headers: new Headers({
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token.value}`,
				}),
			})
			// console.log(response)
			if (response.ok) return await response.json()
			if (!response.headers.get('content-type')?.includes('application/json')) throw 'Something went terribly wrong'
			throw getErrorStr((await response.json()).errors)
		} catch (err) {
			console.log('MYERROR', err)
			errorMsg.value = err
			return false
		}
	}

	const fetchBySlug = async (collection, slug) => {
		errorMsg.value = ''
		message.value = ''
		try {
			const response = await $fetch(`/api/v1/${collection}/slug`, {
				method: 'GET',
				params: { slug },
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

	const saveDoc = async (collection, body) => {
		errorMsg.value = ''
		message.value = ''
		let response
		let method
		console.log('CCCC', collection)
		try {
			if (body._id) method = 'PATCH'
			else method = 'POST'
			response = await $fetch(`/api/v1/${collection}`, {
				method,
				body,
				headers: {
					Authorization: `Bearer ${jwt.value}`,
				},
			})
			return response
		} catch (err) {
			console.log('MYERROR', err.data)
			if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
			return false
		}
	}

	const deleteDoc = async (collection, id) => {
		errorMsg.value = ''
		message.value = ''
		try {
			const response = await $fetch(`/api/v1/${collection}`, {
				method: 'DELETE',
				params: { id },
				headers: {
					Authorization: `Bearer ${jwt.value}`,
				},
			})
			console.log(response)
			return response
		} catch (err) {
			console.log('MYERROR', err)
			if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
			return false
		}
	}

	const deleteProducts = async (collection, body) => {
		errorMsg.value = ''
		message.value = ''
		try {
			const response = await $fetch(`/api/v1/${collection}`, {
				method: 'DELETE',
				body,
				headers: {
					Authorization: `Bearer ${jwt.value}`,
				},
			})
			console.log(response)
			return response
		} catch (err) {
			console.log('MYERROR', err)
			if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
			return false
		}
	}

	// const deleteDoc = async (resource, id) => {
	//   errorMsg.value = ''
	//   message.value = ''
	//   let response
	//   // const token =
	//   //   useCookie('auth') && useCookie('auth').value && useCookie('auth').value.token
	//   //     ? useCookie('auth').value.token
	//   //     : null
	//   try {
	//     response = await fetch(`${config.apiUrl}/${resource}/${id}`, {
	//       method: 'DELETE',
	//       headers: new Headers({
	//         'Content-Type': 'application/json',
	//         Authorization: `Bearer ${token && token.value ? token.value : ''}`,
	//       }),
	//     })

	//     // console.log(response)
	//     if (response.ok) return true
	//     if (!response.headers.get('content-type')?.includes('application/json')) throw 'Something went terribly wrong'
	//     throw getErrorStr((await response.json()).errors)
	//   } catch (err) {
	//     console.log('MYERROR', err)
	//     errorMsg.value = err
	//     console.log(errorMsg.value)
	//     return false
	//   }
	// }

	const deleteDocs = async (resource, payload) => {
		errorMsg.value = null
		message.value = null
		let response = null
		// const token =
		//   useCookie('auth') && useCookie('auth').value && useCookie('auth').value.token
		//     ? useCookie('auth').value.token
		//     : null
		try {
			response = await fetch(`${config.apiUrl}/${resource}/delete-many`, {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: new Headers({
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token.value}`,
				}),
			})

			// console.log(response)
			if (response.ok) return await response.json()
			if (!response.headers.get('content-type')?.includes('application/json')) throw 'Something went terribly wrong'
			throw getErrorStr((await response.json()).errors)
		} catch (err) {
			console.log('MYERROR', err)
			errorMsg.value = err
			return false
		}
	}

	const saveMedia = async (body) => {
		errorMsg.value = ''
		message.value = ''
		try {
			const response = await $fetch(`/api/v1/media`, {
				method: 'POST',
				body,
				headers: {
					Authorization: `Bearer ${jwt.value}`,
				},
			})
			// console.log(response)
			return response
		} catch (err) {
			console.log('MYERROR', err.data)
			if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
			return false
		}

		// console.log('here')
		// errorMsg.value = null
		// message.value = null
		// let response = null
		// // const token =
		// //   useCookie('auth') && useCookie('auth').value && useCookie('auth').value.token
		// //     ? useCookie('auth').value.token
		// //     : null
		// try {
		//   response = await fetch(`${config.apiUrl}/media`, {
		//     method: 'POST',
		//     body: payload,
		//     headers: new Headers({
		//       // 'Content-Type': 'application/json',
		//       Authorization: `Bearer ${token.value}`,
		//     }),
		//   })
		//   console.log(response)
		//   if (response.ok) return await response.json()
		//   if (!response.headers.get('content-type')?.includes('application/json')) throw 'Something went terribly wrong'
		//   throw getErrorStr((await response.json()).errors)
		// } catch (err) {
		//   console.log('MYERROR', err)
		//   errorMsg.value = err
		//   return false
		// }
	}

	// const seedProducts = async (payload) => {
	//   console.log('here')
	//   errorMsg.value = null
	//   message.value = null
	//   let response = null
	//   // const token =
	//   //   useCookie('auth') && useCookie('auth').value && useCookie('auth').value.token
	//   //     ? useCookie('auth').value.token
	//   //     : null
	//   try {
	//     response = await fetch(`${config.apiUrl}/products/seeder`, {
	//       method: 'POST',
	//       body: payload,
	//       headers: new Headers({
	//         // 'Content-Type': 'application/json',
	//         Authorization: `Bearer ${token.value}`,
	//       }),
	//     })
	//     console.log(response)
	//     if (response.ok) return await response.json()
	//     if (!response.headers.get('content-type')?.includes('application/json')) throw 'Something went terribly wrong'
	//     throw getErrorStr((await response.json()).errors)
	//   } catch (err) {
	//     console.log('MYERROR', err)
	//     errorMsg.value = err
	//     return false
	//   }
	// }

	const seedCountries = async (payload) => {
		console.log('here')
		errorMsg.value = null
		message.value = null
		let response = null
		// const token =
		//   useCookie('auth') && useCookie('auth').value && useCookie('auth').value.token
		//     ? useCookie('auth').value.token
		//     : null
		try {
			response = await fetch(`${config.apiUrl}/countries/seeder`, {
				method: 'POST',
				body: payload,
				headers: new Headers({
					// 'Content-Type': 'application/json',
					Authorization: `Bearer ${token.value}`,
				}),
			})
			console.log(response)
			if (response.ok) return await response.json()
			if (!response.headers.get('content-type')?.includes('application/json')) throw 'Something went terribly wrong'
			throw getErrorStr((await response.json()).errors)
		} catch (err) {
			console.log('MYERROR', err)
			errorMsg.value = err
			return false
		}
	}

	const seedStates = async (payload) => {
		console.log('here')
		errorMsg.value = null
		message.value = null
		let response = null
		// const token =
		//   useCookie('auth') && useCookie('auth').value && useCookie('auth').value.token
		//     ? useCookie('auth').value.token
		//     : null
		try {
			response = await fetch(`${config.apiUrl}/states/seeder`, {
				method: 'POST',
				body: payload,
				headers: new Headers({
					// 'Content-Type': 'application/json',
					Authorization: `Bearer ${token.value}`,
				}),
			})
			console.log(response)
			if (response.ok) return await response.json()
			if (!response.headers.get('content-type')?.includes('application/json')) throw 'Something went terribly wrong'
			throw getErrorStr((await response.json()).errors)
		} catch (err) {
			console.log('MYERROR', err)
			errorMsg.value = err
			return false
		}
	}

	const saveOrder = async (payload) => {
		errorMsg.value = null
		message.value = null
		let response = null
		try {
			response = await fetch(`${config.apiUrl}/orders`, {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: new Headers({
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token.value}`,
				}),
			})
			// }
			// console.log(response)
			if (response.ok) {
				const jsonRes = await response.json()
				return jsonRes.doc ? jsonRes.doc : {}
			}
			if (!response.headers.get('content-type')?.includes('application/json')) throw 'Something went terribly wrong'
			throw getErrorStr((await response.json()).errors)
		} catch (err) {
			console.log('MYERROR', err)
			errorMsg.value = err
			return false
		}
	}

	const importProducts = async (body) => {
		errorMsg.value = ''
		message.value = ''
		try {
			const response = await $fetch(`/api/v1/products/import`, {
				method: 'POST',
				body,
				headers: {
					Authorization: `Bearer ${jwt.value}`,
				},
			})
			console.log(response)
			return response
		} catch (err) {
			console.log('MYERROR', err)
			if (err.data && err.data.statusMessage) errorMsg.value = err.data.statusMessage
			return false
		}
	}

	// const productsSearchAll = async (params = {}) => {
	// 	errorMsg.value = null
	// 	message.value = null
	// 	try {
	// 		const esc = encodeURIComponent
	// 		const query = Object.keys(params)
	// 			.map((k) => esc(k) + '=' + esc(params[k]))
	// 			.join('&')
	// 		const response = await fetch(`${config.apiUrl}/products/searchAll?${query}`, {
	// 			method: 'GET',
	// 			headers: new Headers({
	// 				'Content-Type': 'application/json',
	// 				Authorization: `Bearer ${token.value}`,
	// 			}),
	// 		})
	// 		// console.log(response)
	// 		if (response.ok) return await response.json()
	// 		if (!response.headers.get('content-type')?.includes('application/json')) throw 'Something went terribly wrong'
	// 		throw getErrorStr((await response.json()).errors)
	// 	} catch (err) {
	// 		console.log('MYERROR', err)
	// 		errorMsg.value = err
	// 		return { docs: [], count: 0, totalCount: 0 }
	// 	}
	// }

	return {
		fetchAll,
		fetchDoc,
		saveDoc,
		deleteDoc,
		deleteDocs,
		saveMedia,
		seedCountries,
		seedStates,
		saveOrder,
		importProducts,
		deleteProducts,
		fetchBySlug,
	}
}

export default useHttp
