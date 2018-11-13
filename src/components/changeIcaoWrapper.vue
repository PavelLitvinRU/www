<template>
  <v-container fluid grid-list-md>
    <v-data-iterator
      :items="items"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      hide-actions
      content-tag="v-layout"
      column
      wrap
    >
      <v-flex
        slot="item"
        slot-scope="props"
        xs12
        sm6
        md4
        lg3
      >
        <v-card>
          <v-card-title><h2>{{ props.item.nameRus }}</h2></v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>ICAO:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.icao }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>ИКАО:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.icaoRus }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Последнее обновление:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.icaoRus }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Спутников GPS:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.icaoRus }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Спутников ГЛОНАСС:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.icaoRus }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      pagination: {
        rowsPerPage: 4
      },
      
    }),
    computed: {
        items() {
          return [
        {
          value: true,
          nameRus: this.$store.state.changeIcao.nameRus,
          icao: this.$store.state.changeIcao.icao,
          icaoRus: this.$store.state.changeIcao.icaoRus
        }
        ]
        } 
      }
  }
</script>