<template>
    <div class="serie flex-auto mx-2" :id="serie.id" v-on:click="displaySerieModal()">
      <div class="serie__image">
        <img :src="serie.images.show" :alt="serie.title" />
      </div>
      <div class="serie__overlay">
        <p class="serie__overlay__title text-lg">
          {{serie.title}}
        </p>
        <p class="serie__overlay__seasons text-sm">
          S {{ serie.seasons }} | E {{ serie.episodes }}
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
  methods: {
    displaySerieModal: function () {
      document.getElementById('modal_show_image').src = this.serie.images.show;
      document.getElementById('modal_show_title').innerText = this.serie.title;
      document.getElementById('modal_show_description').innerText = this.serie.description;
      document.getElementById('modal_show_platforms');
      let platforms = [];
      this.serie.platforms.svods.map(platform => {
        modal_show_platforms.innerHTML = modal_show_platforms.innerHTML + `<a href="${platform.link_url}">
          <img
            src="${platform.logo}"
            class="show__platforms__logo"
          />
        </a>`
      });
      document.getElementById('modal_show_details_seasons').innerHTML = `Nombre de saisons : ${this.serie.seasons} <br/>Nombre d'épisodes : ${this.serie.episodes}`;

      for (const [key, genre] of Object.entries(this.serie.genres)) {
        document.getElementById('modal_show_details_genre').innerHTML = document.getElementById('modal_show_details_genre').innerHTML + `<li>
          ${genre}
        </li>`
      }
      document.getElementById('modal_overlay').classList.toggle('active');
    },
  },
}
</script>
