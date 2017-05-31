import Vue from 'vue'

const state = {
  events: [],
  temp: [],
  skip: 0,
  eventItem: []
}

const mutation = {
  getEvent (state, payload) {
    state.events = payload.res
  },
  loadEvent (state, payload) {
    state.skip += 2
    state.events = state.events.concat(payload.res)
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
  }
}
