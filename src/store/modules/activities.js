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

const action = {
  getEvent ({commit}) {
    Vue.http.jsonp('https://api.douban.com/v2/event/list?loc=108288&count=5')
              .then(res => {
                commit({
                  type: 'getEvent',
                  res: res.body.events
                })
              })
  },
  loadMore ({commit, state}) {
    Vue.http.jsonp('https://api.douban.com/v2/event/list?loc=108288&start=' +
                      state.skip + '&counts=5')
              .then(res => {
                commit({
                  type: 'loadMore',
                  res: res.body.events
                })
              })
  },
  getSingleEvent ({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      Vue.http.jsonp('https://api.douban.com/v2/event/' + payload.id)
              .then(res => { // 这个res指的是jsonp请求返回的response
                commit({
                  type: 'getSingleEvent',
                  res: res.body
                })
                resolve(res)
              })
    })
  }
}

export default {
  state,
  mutation,
  action
}
