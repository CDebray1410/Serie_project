<template>
  <div id="modal_overlay">
    <section class="show_container modal flex flex-wrap" id="modal_serie">
      <span id="modal_serie_close" v-on:click="closeSerieModal()">
        X
      </span>
      <img src="" alt="image de série" class="show_image" id="modal_show_image" />
      <h1 class="text-center text-xl" id="modal_show_title"></h1>
      <div class="flex flex-wrap show_container_details">
        <p class="show_container__description w-1/2" id="modal_show_description">
        </p>
        <div class="show__platforms w-1/2" id="modal_show_platforms">
          <p>Disponible sur :</p>
        </div>
      </div>
      <div class="show__details flex">
        <div class="show__details__seasons w-1/2" id="modal_show_details_seasons">
        </div>
        <ul class="show__details__genre w-1/2" id="modal_show_details_genre">
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "SerieDetailModal",
  components: {},
  data() {
    return {
      show: null,
    };
  },
  methods: {
    closeSerieModal: function () {
      document.getElementById('modal_overlay').classList.toggle('active');
      this.emptySerieModal()
    },
    emptySerieModal: function () {
      let sampleVar = setTimeout(() => {
        document.getElementById('modal_show_image').src = "";
        document.getElementById('modal_show_title').innerText = "";
        document.getElementById('modal_show_description').innerText = "";
        document.getElementById('modal_show_platforms').innerText = "";
        document.getElementById('modal_show_details_seasons').innerHTML = "";
        document.getElementById('modal_show_details_genre').innerHTML = "";
      }, 200)
    }
  }
};
</script>
