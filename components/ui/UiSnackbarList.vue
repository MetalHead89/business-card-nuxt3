<template>
  <ul class="snackbar-list">
    <TransitionGroup
      name="list"
    >
      <li
        v-for="item in items"
        :key="item.id"
        class="item"
      >
        <UiSnackbar
          v-bind="item"
          @click="handleCloseClick(item)"
        />
      </li>
    </TransitionGroup>
  </ul>
</template>

<script setup lang="ts">
import { ISnackbar, ISnackbarArgs } from '@/types/ui'
import { v4 as uuidv4 } from 'uuid'

const { $eventBus } = useNuxtApp()

$eventBus.listen('snackbar-add', (args: ISnackbarArgs) => {
  add(args)
})

const items = ref<ISnackbar[]>([])

const handleCloseClick = (item: ISnackbar) => {
  items.value = items.value.filter(currentItem => currentItem !== item)
}

const add = (args: ISnackbarArgs) => {
  items.value.push({ ...args, id: uuidv4() })
}
</script>

<style lang="scss">
.snackbar-list {
  padding: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  bottom: 20px;
  margin: 0 auto;
  max-width: 50%;

  .item {
    list-style-type: none;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0)
}

// .list-leave-active {
//   position: absolute;
// }
</style>
