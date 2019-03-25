<template>
  <div>
    <p>ABOUT</p>
    <br/>
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage() }}"</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data: function () {
    return {
      message: '111222'
    }
  },
  methods: {
    reversedMessage:function () {
      return this.message.split('').reverse().join('')
    }
  }
}

</script>

<style scoped>

</style>
