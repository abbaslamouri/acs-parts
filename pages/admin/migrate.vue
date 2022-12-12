<template>
  <div>
    Admin
    <button @click="migrate">Migrate</button>
    <div class="products">
      <div v-for="product in uploadedProducts">
        <!-- <div v-if="uploadedProducts.length > n - 1"> -->
        {{ product.name }}
        <div class="image">
          <img :src="`https://acs-space.nyc3.digitaloceanspaces.com/uploads/${product.image}.jpg`" alt="" />
        </div>
        <!-- </div> -->
        <!-- <div v-else>Loading...</div> -->
      </div>
    </div>

    <div class="progress-bar-wrapper">
      <div
        class="progress-bar"
        :style="{ width: !totalCount ? 0 : (uploadedProducts.length / totalCount) * 100 + '%' }"
      >
        <div v-if="uploadedProducts.length">
          {{ Math.floor((uploadedProducts.length / totalCount) * 100) + '%' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import fs from 'fs'
// import path from 'path'
// import { parse } from 'csv-parse'
const uploadedProducts: any = ref([])
const count = ref(0)
const spreadsheet = ref([])

const totalCount = computed(() => spreadsheet.value.length)

const migrate = async () => {
  const { data: db, pending, error } = await useFetch('/api/v1/products/createDb')
  console.log(db.value)
  if (!db.value) return

  const { data: csvData } = await useAsyncData('products', () => queryContent('/').find())
  if (csvData.value && csvData.value.length > 0) {
    console.log(csvData.value[0].body)
    spreadsheet.value = csvData.value[0].body

    for (const prop in csvData.value[0].body) {
      const { data, pending, error } = await useFetch('/api/v1/products/migrate', {
        method: 'POST',
        body: csvData.value[0].body[prop],
      })
      if (error.value) {
        console.log('ERROR', error.value && error.value.data ? error.value.data : '')
        if (error) break
      }
      uploadedProducts.value.push(data.value)
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

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.image {
  width: 2rem;
}

.progress-barwrapper {
  border: 1px solid red;
}

.progress-bar {
  background-color: green;
  /* width: 50%; */
  /* width: v-bind(`${totalCount}'); */
}
</style>
