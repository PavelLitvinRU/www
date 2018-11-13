<template>
  <v-app>
    <v-toolbar :height="80">
      <v-toolbar-items>
        <v-img :src="logo" :width="100" :height="80"></v-img>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title class="h1_custom">GBAS Российская Федерация</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-layout wrap>
      <v-container fluid>
        <v-layout style="box-shadow: 0 10px 25px #303030; height: 87vh;">
          <v-map style="height: 100%;" :zoom="zoom" :minZoom="minZoom" :maxZoom="maxZoom" :center="center">
            <v-tilelayer :url="url"></v-tilelayer>
            <v-marker v-for="c in icaoCoordinate" :lat-lng="[c.latitude, c.longitude]" :key="c.latitude" :icon="icon" @click="changedIcao(c)">
            </v-marker>
            <v-circle v-for="(point, index) in icaoCoordinate" :lat-lng="[point.latitude, point.longitude]" :color="optionsCircle.color" :opacity="optionsCircle.opacity" :weight="optionsCircle.weight" :fillColor="optionsCircle.fillColor" :radius="optionsCircle.radius"
              :key="index">
            </v-circle>
            <div style="position: absolute; bottom: 10px; left: 0; z-index: 1001; ">
              <div class="text-xs-center">
                <v-menu transition="slide-x-transition" top :nudge-width="200"
      offset-y>
                  <v-btn slot="activator" color="secondary">Легенда</v-btn>
                  <v-list >
                    <v-list-tile v-for="n in 5" :key="n">
                      <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </v-map>
        </v-layout>
      </v-container>
      <v-navigation-drawer v-model="drawer" absolute style="z-index: 1001;" right>
        <icao-wrapper></icao-wrapper>
      </v-navigation-drawer>
    </v-layout>
  </v-app>
</template>

<script>
  import L from 'leaflet'
  import * as Vue2Leaflet from 'vue2-leaflet'
  import iconUrl from './img/icon/rtm-g.png'
  import IcaoWrapper from './components/changeIcaoWrapper.vue'
  import nppf from './img/nppf-icon.png'
  let icon = L.icon({
    iconUrl: iconUrl,
    iconSize: [24, 24]
  })
  export default {
    data: () => ({
      legend: false,
      drawer: false,
      items: [{
          title: 'Home',
          icon: 'dashboard'
        },
        {
          title: 'About',
          icon: 'question_answer'
        }
      ],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 3,
      minZoom: 3,
      maxZoom: 18,
      center: [64, 100],
      icaoCoordinate: [],
      optionsCircle: {
        color: "green",
        fillColor: "green",
        radius: 350000,
        weight: 0.6,
        opacity: 0.5
      },
      icon: icon,
      logo: nppf
    }),
    beforeCreate() {
      this.axios.get('./gbas.json').then((response) => {
        this.icaoCoordinate = response.data
        this.$emit('getCoordinate', this.icaoCoordinate)
      })
    },
    methods: {
      changedIcao(gbas) {
        this.$store.state.changeIcao = gbas
        console.log(this.$store.state.changeIcao)
        this.drawer = true
      }
    },
    // methods: {
    //     iconText (icao, name) {
    //         return this.icon = L.divIcon({
    //             html: `<div class="mt-1 my-label">${icao}<br>(${name})</div>`  
    //         })
    //     }
    // },
    components: {
      'v-map': Vue2Leaflet.LMap,
      'v-tilelayer': Vue2Leaflet.LTileLayer,
      'v-marker': Vue2Leaflet.LMarker,
      'v-popup': Vue2Leaflet.LPopup,
      'v-circle': Vue2Leaflet.LCircle,
      IcaoWrapper
    },
  }
</script>

<style>
  @import "~leaflet/dist/leaflet.css";
  .h1_custom {
    font-family: "Times New Roman", "Times CY", "Nimbus Roman No9 L", serif;
    color: #184369;
    text-shadow: -2px 4px 6px rgba(22, 22, 24, 0.35);
    font-size: 40px;
    font-weight: 500;
    line-height: 1.2;
  }
</style>

