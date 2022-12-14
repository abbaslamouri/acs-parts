<script setup lang="ts">
const user = reactive({
  name: 'Abbas Lamouri',
  email: 'abbaslamouri@yrlus.com',
})

const signinUser = async () => {
  const { data: user, pending, error } = await useFetch('/api/v1/produ')
  // console.log(db.value)
}
</script>

<template>
  <div>
    <FormsBaseInput label="Name" />
    <FormsBaseInput label="Email" />
    <FormsBaseInput label="Password" />
    <FormsBaseInput label="Confirm Password" />
  </div>
</template>

<style scoped></style>
