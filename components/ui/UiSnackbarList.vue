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
import { Snackbar } from './UiSnackbar.vue'

const items = ref<Snackbar[]>([
  {
    id: 1,
    title: 'First',
    text: 'First text'
  },
  {
    id: 2,
    title: 'Second',
    text: 'Second text'
  },
  {
    id: 3,
    title: 'Third',
    text: 'Third text'
  }
])

const handleCloseClick = (item: Snackbar) => {
  items.value = items.value.filter(currentItem => currentItem !== item)
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

.list-enter-active,
.list-move {
  transition: all 2s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: scale(1);
}

.list-leave-active {
  position: absolute;
}
</style>
