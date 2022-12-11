<script setup>
import debounce from 'lodash.debounce'

const emit = defineEmits(['setMedia'])
const config = useRuntimeConfig()
const route = useRoute()
const { fetchAll, saveMedia } = useHttp()
const errorMsg = useState('errorMsg')
const message = useState('message')
const selectedMedia = ref([])
const toggleSlideout = ref(false)
const media = ref([])
const count = ref(0)
const totalCount = ref(0)
const page = ref(1)
const perPage = ref(15)
const keyword = ref('')
const showDropZone = ref(false)
const mediaDeleteAlertOpen = ref(false)
let response = ''

const mediaSort = reactive({
  field: 'name',
  order: '',
})
const mediaSortOptions = [
  { key: 'dateCreated', name: 'Date Created' },
  { key: 'sortOrder', name: 'Order' },
  { key: 'name', name: 'Name' },
  { key: 'mimetype', name: 'Mimetype' },
]

const params = computed(() => {
  return {
    match: '',
    project: 'name, filePath, url,mimetype, fileSize, originalFilename, dateCreated',
    lookup: '',
    page: page.value,
    limit: perPage.value,
    sort: `${mediaSort.order}${mediaSort.field}`,
    keyword: keyword.value ? keyword.value : '',
  }
})

const pages = computed(() =>
  totalCount.value % perPage.value
    ? parseInt(totalCount.value / perPage.value) + 1
    : parseInt(totalCount.value / perPage.value)
)

const fetchMedia = async () => {
  selectedMedia.value = []
  response = await fetchAll('media', params.value)
  console.log(response)
  if (!response) return
  media.value = response.docs
  count.value = response.results
  totalCount.value = response.totalCount
}

const uplodMedia = async (files) => {
  showDropZone.value = false
  if (files.length > config.maxFileUploads) return (errorMsg.value = '1000 files maximum')
  for (const prop in files) {
    media.value.unshift({
      name: 'spinner',
      mimetype: files[prop].type,
    })
  }
  if (!files.length) return
  const formData = new FormData()
  for (const prop in files) {
    formData.append('media', files[prop])
  }
  response = await saveMedia(formData)
  if (!response) {
    media.value = media.value.filter((m) => m.name !== 'spinner.gif')
  } else {
    await fetchMedia()
  }
}

const setPage = async (currentPage) => {
  page.value = currentPage
  await fetchMedia()
}

// const setPerPage = async (nwPerPage) => {
//   page.value = nwPerPage
//   await fetchMedia()
// }

const toggleMediaSort = async (event) => {
  mediaSort.field = event.field
  mediaSort.order = event.order
  // await fetchMedia()
}

const updateSelectedMedia = (file) => {
  const index = selectedMedia.value.findIndex((m) => m._id == file._id)
  if (index === -1) selectedMedia.value.push(file)
  else selectedMedia.value.splice(index, 1)
}

const removeFromSelectedMedia = (file) => {
  const index = selectedMedia.value.findIndex((m) => m._id == file._id)
  if (index !== -1) selectedMedia.value.splice(index, 1)
}

const deleteMedia = async () => {
  // if (!confirm('Are you sure you want to delete these files?')) return
  mediaDeleteAlertOpen.value = false
  response = await $fetch('/api/v1/media', { method: 'DELETE', body: selectedMedia.value })
  console.log('RES', response)
  if (!response) return
  await fetchMedia()
  message.value = 'Media deleted succesfully'
  selectedMedia.value = []
}

const saveSelectedImage = async () => {
  console.log(selectedMedia.value[0])
  const response = await saveDoc('media', selectedMedia.value[0])
  console.log(response)
  if (!response) return
  message.value = 'Media updated succesfully'
  toggleSlideout.value = false
}

const handleSearch = async (searchKeyword) => {
  // console.log(searchKeyword)
  page.value = 1
  keyword.value = searchKeyword
  // await fetchMedia()
}

// const setMedia = () => {
//   galleryMedia.value = selectedMedia.value
//   showMediaSelector.value = false
// }

const selectMediaType = async (event) => {
  // if (event === 'all') params.value.keyword = ''
  // else params.value.keyword = event
  // response = await fetchMedia()
}

const toggleSelectAll = (event) => {
  selectedMedia.value = event ? media.value : []
}

await fetchMedia()

watch(
  () => selectedMedia.value,
  debounce(async (newVal) => {
    emit('setMedia', newVal)
  }, 600),
  { deep: true }
)

watch(
  () => params.value,
  debounce(async (newVal) => {
    console.log(newVal)
    await fetchMedia()
    // emit('updateUser', newVal)
  }, 600),
  { deep: true }
)
</script>

<template>
  <div class="flex h-full flex-col justify-between gap-4 overflow-auto pb-4">
    <div class="bg-slate-100 px-8">
      <MediaFileActions
        :selectedMedia="selectedMedia"
        :sort="mediaSort"
        :sortOptions="mediaSortOptions"
        :page="page"
        :perPage="perPage"
        :totalCount="totalCount"
        :keyword="keyword"
        @toggleSort="toggleMediaSort"
        @toggleDropZone="showDropZone = true"
        @deleteMedia="mediaDeleteAlertOpen = true"
        @searchKeywordSelected="handleSearch"
        @toggleSelectAll="toggleSelectAll"
        @selectMediaType="keyword = $event === 'all' ? '' : $event"
        @toggleSlideout="toggleSlideout = !toggleSlideout"
        @setKeyword="keyword = $event"
        @setPerPage="perPage = $event"
      />
      <MediaDropZone
        :showDropZone="showDropZone"
        :fileTypes="['image/*', 'text/csv', 'application/pdf']"
        @toggleDropZone="showDropZone = $event"
        @cancelFileUpload="showDropZone = !showDropZone"
        @uploadItemsSelected="uplodMedia"
      />
      <!-- </transition> -->
      <Alert :alertOpen="mediaDeleteAlertOpen" @closeAlert="mediaDeleteAlertOpen = false" @ok="deleteMedia">
        <template #header>Are you sure?</template>
        <template #description
          >Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
          order.</template
        >
      </Alert>
    </div>

    <div class="m-4 flex flex-1 flex-col justify-between gap-4 rounded border border-slate-300 p-4">
      <MediaFileList
        :media="media"
        :selectedMedia="selectedMedia"
        @updateSelectedMedia="updateSelectedMedia"
        @removeFromSelectedMedia="removeFromSelectedMedia"
      />
      <transition name="slideout">
        <Slideout v-if="toggleSlideout" @closeSlideout="toggleSlideout = false">
          <template #header>
            <h3>Edit Image</h3>
          </template>
          <template #default>
            <div class="flex flex-row gap-4 p-4">
              <div class="w-sm h-sm">
                <img
                  class="contain h-full w-full"
                  :src="`${config.doSpaceEndpoint}/uploads/${selectedMedia[0].originalFilename}`"
                  :alt="`${selectedMedia[0].originalFilename} Photo`"
                />
              </div>
              <div class="mt-5 flex flex-1 flex-col gap-4">
                <div class="">
                  <FormsBaseInput
                    label="Alt Text"
                    placeholder="Alt Text"
                    :required="true"
                    v-model="selectedMedia[0].altText"
                  />
                </div>
                <div class="">
                  <FormsBaseInput
                    label="Caption"
                    placeholder="Caption"
                    :required="true"
                    v-model="selectedMedia[0].caption"
                  />
                </div>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="flex flex-row justify-end gap-2">
              <button class="btn btn-secondary px-4 py-1 text-xs" @click="toggleSlideout = !toggleSlideout">
                Cancel
              </button>
              <button class="btn btn-primary px-4 py-1 text-xs" @click="saveSelectedImage">Save</button>
            </div>
          </template>
        </Slideout>
      </transition>
    </div>
    <Pagination :page="page" :pages="pages" @setPage="page = $event" v-if="pages > 1" />
  </div>
</template>

<style lang="" scoped></style>
