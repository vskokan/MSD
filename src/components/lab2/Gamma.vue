<template>
  <div class="container">
    <div class="input">
      <label for="input">Введите исходное сообщение</label>
      <input type="text" v-model="input" id="input" />
    </div>
    <button @click="getResult">Получить результат</button>
    <div v-if="binaryInput.length > 0">
    <div class="binary" >
      <h4>Сообщение в бинарном коде</h4>
      <div class="code">{{binaryInput}}</div>
    </div>
    <div class="gamma" >
      <h4>Сгенерированная гамма</h4>
      <div>{{gamma}}</div>
    </div>
    <div class="output" >
      <h4>Закодированное сообщение</h4>
      <div class="output">{{output}}</div>
    </div>
        Проверка расшифровки: исходные данные = {{decodedResult}}
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      binaryInput: "",
      gamma: "",
      output: "",
      decodedResult: ""
    };
  },
  methods: {
    stringToBinary(string) {
      let characters = string.split("");
      this.binaryInput = characters.map((char) => { return char.charCodeAt(0).toString(2) }).join("");
    },
    generateGamma(binaryString) {
        this.gamma = binaryString.split('').map(() => { return  Math.floor(Math.random() * 2) }).join("")
    },
    getResult() {
        this.output = ''
        this.decodedResult = ''
        this.stringToBinary(this.input)
        this.generateGamma(this.binaryInput)

        for (let i = 0; i < this.binaryInput.length; i++) {
            this.output += Boolean(+this.binaryInput.charAt(i)) ^ Boolean(+this.gamma.charAt(i))
        }

        for (let i = 0; i < this.output.length; i++) {
            this.decodedResult += Boolean(+this.output.charAt(i)) ^ Boolean(+this.gamma.charAt(i))
        }
    },
  },
};
</script>

<style scoped>
    .binary, .gamma, .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0px;
}
</style>