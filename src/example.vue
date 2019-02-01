<template>
    <div>
        Clicked: {{ $store.state.count }} times.
        <br />
        <button @click="increment">+</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  const p = new Promise(resolve => {
    setTimeout(() => resolve("done"), 1000)
  });
  p.then(console.log);

  export default {
    methods: mapActions([
      'increment',
    ]),
  }
</script>