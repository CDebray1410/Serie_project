<template>
    <div class="serie">
        <div class="serie__image">
          <img :src="serie.images.show" :alt="serie.title" />
        </div>
        <div class="serie__bar">
          <p class="serie__bar__title">
            {{serie.title}}
          </p>
        </div>
      </div>
</template>

<script>
export default {
  name: 'SerieCardMd',
  props: [
    'serie'
  ],
}
</script>
