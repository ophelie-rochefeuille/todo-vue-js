<template>
  <div class="task">
    <h2 class="task__title">{{ title }}</h2>
    <p class="task__place-time">{{ place }} - {{ time }}</p>
    <p class="task__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Un titre",
      place: "Paris",
      time: "12h12",
      description: "Id ut enim quis quis aute velit sint veniam ad elit velit cillum. Esse culpa duis nostrud fugiat aliquip proident veniam laborum ullamco."
    }
  }
}
</script>