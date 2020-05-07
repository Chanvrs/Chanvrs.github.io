<template>
  <div class="hello">
    <h1>{{ this.$store.state.count }}</h1>
    <h2>{{this.$store.getters.getStateCount}}</h2>
    <h1>{{ this.$store.state.count }}</h1>
    <h2>{{this.$store.getters.getStateCount}}</h2>
    <h1>{{ this.$store.state.count }}</h1>
    <h2>{{this.$store.getters.getStateCount}}</h2>
    <h1>{{ this.$store.state.count }}</h1>
    <h2>{{this.$store.getters.getStateCount}}</h2>
    <h1>{{ this.$store.state.count }}</h1>
    <h2>{{this.$store.getters.getStateCount}}</h2>
    <input type="button" value="add" @click="addCount">
    <button @click="reduceCount">reduce</button>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul> 
    <img class="lazy" src="../assets/loading.jpg" data-src="../assets/logo.png">
  </div>
</template>

<script>
import lazyloading from '../api/lazyload'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: this.$store.state.count
    }
  }, 
  mounted() {
    window.addEventListener('scroll',lazyloading)
  },
  methods: {
    addCount() {
      this.$store.commit("add");
    },
    reduceCount() {
      this.$store.commit("reduce");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
