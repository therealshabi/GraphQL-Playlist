<template>
  <div id="main">
    <h1>Ninja's Reading List</h1>
    <BookList/>
  </div>
</template>

<script>

import BookList from './components/BookList'

export default {
  name: 'App',
  components: {
    BookList
  }
}
</script>

<style>
  body {
    background: #eee;
    font-family: cursive;
  }
</style>
