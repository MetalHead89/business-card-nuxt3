<template>
  <ul class="snackbar-list">
    <TransitionGroup
      name="list"
    >
      <li
        v-for="item in items"
        :key="item"
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
import { SnackbarType } from './UiSnackbar.vue'

const items = ref<SnackbarType[]>([
  {
    title: 'First',
    text: 'First text'
  },
  {
    title: 'Second',
    text: 'Second text'
  },
  {
    title: 'Third',
    text: 'Third text'
  }
])

const handleCloseClick = (item: SnackbarType) => {
  items.value = items.value.filter(currentItem => currentItem !== item)
}
</script>

<style lang="scss" scoped>
.snackbar-list {
  padding: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  bottom: 20px;
  margin: 0 auto;
  max-width: 50%;

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}

  .item {
    list-style-type: none;
  }
}
</style>
