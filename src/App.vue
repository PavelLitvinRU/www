<template>
<v-dark>
 <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    height="1000"
  >
   <v-container style="max-width: 600px;">
    <v-timeline dense clipped>
      <v-timeline-item
        fill-dot
        class="white--text mb-5"
        color="orange"
        large
      >
        <span slot="icon">JL</span>
        <v-text-field
          v-model="input"
          hide-details
          flat
          label="Leave a comment..."
          solo
          @keydown.enter="comment"
        >
          <template slot="append">
            <v-btn
              class="mx-0"
              depressed
              @click="comment"
            >
              Post
            </v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>

      <v-slide-x-transition
        group
      >
        <v-timeline-item
          v-for="event in timeline"
          :key="event.id"
          class="mb-3"
          color="pink"
          small
        >
          <v-layout justify-space-between>
            <v-flex xs7 v-text="event.text"></v-flex>
            <v-flex xs5 text-xs-right v-text="event.time"></v-flex>
          </v-layout>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item
        class="mb-4"
        hide-dot
      >
        <span>TODAY</span>
      </v-timeline-item>
    </v-timeline>
  </v-container>
  </v-parallax>
</v-dark>
   
</template>

<script>
  export default {
    data: () => ({
      events: [],
      input: null,
      nonce: 0
    }),

    computed: {
      timeline () {
        return this.events.slice().reverse()
      }
    },

    methods: {
      comment () {
        const time = (new Date()).toTimeString()
        this.events.push({
          id: this.nonce++,
          text: this.input,
          time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          })
        })
        localStorage.events = this.events
        this.input = null
      }
    }
  }
</script>
