<template>
    <div class="serie flex-auto mx-2">
      <div class="serie__image">
        <img :src="serie.images.show" :alt="serie.title" />
      </div>
      <div class="serie__overlay">
        <RouterLink :to="{ name: 'serie', params: { serieId: serie.id }}">
          <p class="serie__overlay__title text-lg">
            {{serie.title}}
          </p>
          <p class="serie__overlay__seasons text-sm">
            S {{ serie.seasons }} | E {{ serie.episodes }}
          </p>
        </RouterLink>
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
