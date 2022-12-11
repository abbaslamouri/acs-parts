<template>
  <div>
    Admin
    <button @click="migrate">Migrate</button>
  </div>
</template>

<script setup lang="ts">
// import fs from 'fs'
// import path from 'path'
// import { parse } from 'csv-parse'

const count = ref(0)

const migrate = async () => {
  const { data: db, pending, error } = await useFetch('/api/v1/products/createDb')
  console.log(db.value)
  if (!db.value) return

  const { data: csvData } = await useAsyncData('products', () => queryContent('/').find())
  if (csvData.value && csvData.value.length > 0) {
    console.log(csvData.value[0].body)

    for (const prop in csvData.value[0].body) {
      const {
        data: product,
        pending,
        error,
      } = await useFetch('/api/v1/products/migrate', { method: 'POST', body: csvData.value[0].body[prop] })
      console.log(product.value)
    }
  }

  //   // const { data: products, pending, error } = await useFetch('/api/v1/products/', {method:"POST", body:})
  //   // console.log(products.value)
  // }

  // fs.createReadStream(`../../data/WooCommerce-Products-mini.csv`)
  //     .pipe(parse({ delimiter: ',', columns: true }))
  //     .on('data', function (row) {
  //       console.log(row)
  //       // data.push(row)
  //     })
}
</script>

<style scoped></style>
