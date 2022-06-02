<template>
  <main>
    <h1 class="text-center text-xl">Bienvenue sur Serie Project</h1>
    <section class="show_container">
      <SerieCardMd v-for="serie in shows.shows" :key="serie.id" :serie="serie" />
    </section>
  </main>
</template>

<script>
//import '../../tailwind.config.js';
import SerieCardMd from '../components/serie/SerieCardMd.vue';
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    SerieCardMd,
  },
  data() {
    return {
      shows: {
        shows: [
          {
            id: 28533,
            thetvdb_id: 395494,
            imdb_id: "tt10638036",
            themoviedb_id: 124834,
            slug: "heartstopper",
            title: "Heartstopper",
            original_title: "Heartstopper",
            description:
              "Dans cette s\u00e9rie initiatique sur fond d'histoires d'amour et d'\u00e9tudes, les ados Charlie et Nick d\u00e9couvrent une facette inattendue de leur amiti\u00e9 improbable.",
            seasons: "1",
            seasons_details: [{ number: 1, episodes: 9 }],
            episodes: "9",
            followers: "4476",
            comments: "17",
            similars: "5",
            characters: "0",
            creation: "2022",
            showrunner: {
              id: "186237",
              name: "Alice Oseman",
              picture:
                "https://pictures.betaseries.com/persons/1Eru1xdPcRmFjaBGQSVcEBNtYzt.jpg",
            },
            genres: { Drama: "Drame", Romance: "Romance" },
            length: "29",
            network: "Netflix",
            country: "Royaume-Uni",
            rating: "",
            status: "Continuing",
            language: "en",
            notes: {
              total: 211,
              mean: 4.791470000000000339923644787631928920745849609375,
              user: 0,
            },
            in_account: false,
            images: {
              show: "https://pictures.betaseries.com/fonds/show/28533_1647513294.jpg",
              banner:
                "https://pictures.betaseries.com/fonds/banner/28533_1650815783.jpg",
              box: "https://pictures.betaseries.com/fonds/box/28533_1650815783.jpg",
              poster:
                "https://pictures.betaseries.com/fonds/poster/5a86041f17cdaf811aa50c2dc2e22ab6.jpg",
            },
            aliases: {
              70065: "Heartstopper",
              86341:
                "\u0422\u0440\u0435\u043f\u0435\u0442 \u0441\u0435\u0440\u0434\u0446\u0430",
            },
            social_links: [],
            user: {
              archived: false,
              favorited: false,
              remaining: 0,
              status: 0,
              last: "S00E00",
              tags: null,
              next: {
                id: null,
                code: "S00E00",
                date: null,
                title: null,
                image: null,
              },
              friends_watching: [],
            },
            next_trailer: "x89ztn8",
            next_trailer_host: "dailymotion",
            resource_url: "https://www.betaseries.com/serie/heartstopper",
            platforms: {
              svods: [
                {
                  id: 1,
                  name: "Netflix",
                  tag: null,
                  color: "#000000",
                  link_url: "https://www.betaseries.com/link/28533/1/fr",
                  available: { last: 1 },
                  logo: "https://pictures.betaseries.com/platforms/1.jpg",
                },
                {
                  id: 278,
                  name: "Canal+ S\u00e9ries",
                  link_url: "https://www.betaseries.com/link/58248492",
                  logo: "https://pictures.betaseries.com/platforms/278.jpg",
                  tag: "https://ad.doubleclick.net/ddm/trackimpj/N6600.3901133BETASERIES_FRA6600/B26981763.323082354;dc_trk_aid=515289035;dc_trk_cid=163051073;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=?",
                  partner: true,
                  color: "#000000",
                },
              ],
              svod: {
                id: 1,
                name: "Netflix",
                tag: null,
                color: "#000000",
                link_url: "https://www.betaseries.com/link/28533/1/fr",
                available: { last: 1 },
                logo: "https://pictures.betaseries.com/platforms/1.jpg",
              },
            },
          },
        ],
        errors: [],
      },
    };
  },
  props: {
    msg: String,
  },
  created() {
    this.shows.shows.map(show => {
      console.log(show)
    });
    //this.getShowDiscovery();
  },
  methods: {
    getShowDiscovery: function () {
      let fetchUrl =
        import.meta.env.VITE_API_URL +
        "shows/discover?limit=20&" +
        import.meta.env.VITE_API_URL_INFOS;
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };
      axios
        .get(fetchUrl, config)
        .then((response) => {
          console.log(response);
          this.shows = response.data.reverse();
        })
        .catch((error) => {
          this.errored = true;
          console.log(error);
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>
