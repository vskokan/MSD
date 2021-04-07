<template>
    <div class="container">
         <div class="input">
      <label for="input">Введите исходное сообщение</label>
      <input type="text" v-model="input" id="input" />
    </div>
    <button @click="getResult">Получить результат</button>
    <div class="result" v-if="output.length > 0">
        <h4>Закодированное сообщение</h4>
      <div class="output">{{output}}</div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            base: 13,
            simple: 991,
            output: ''
        }
    },
    methods: {
        getResult() {
            this.output = this.input.split('').map((char) => { return (this.base ** String(char).charCodeAt(0)) % this.simple} ).join('')
        }
    }
}
</script>

<style scoped>
    .result, .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0px;
}
</style>