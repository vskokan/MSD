<template>
  <div class="container">
    <div class="data">
      <div class="alphabet">
        <label for="alphabet">Используемый алфавит</label>
        <input type="text" v-model="alphabet" id="alphabet" />
      </div>
      <div class="replacement">
        <label for="replacement">Используемая строка замены</label>
        <input type="text" v-model="replacement" id="replacement" />
      </div>
    </div>
    
    <div class="input">
      <label for="input">Введите исходную строку</label>
      <input type="text" v-model="stringToReplace" id="input" />
    </div>
    <button class="getResult" @click="getResult">Получить результат</button>
    <div class="result">
      <div class="replacementTable">
          <div v-for="row, index in result.result.log" :key="index">
              {{ row }}
          </div>
      </div>
      <div class="replacedString">
          {{result.result.replacedString}}
      </div>
    </div>
  </div>
</template>

<script>

import Simple from './simple.js' 

export default {
  data() {
    return {
      alphabet:
        "А Б В Г Д Е Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ь Ы Ъ Э Ю Я",
      replacement:
        "М Л Д О Т В А Ч К Е Ж Х Щ Ф Ц Э Г Б Я Ъ Ш Ы З И Ь Н Ю У П С Р Й",
      stringToReplace: "",
      result: {
          table: '',
          result: ''
      },
    };
  },
  methods: {
      getResult() {
          this.result.table = Simple.formReplacementTable(this.alphabet, this.replacement)
          this.result.result = Simple.monoAlphabetReplacement(this.stringToReplace, this.result.table)
      }
  }
};
</script>

<style scoped>
.alphabet, .replacement, .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0px;
}

input {
    width: 630px;
    font-size: 20px;
    font-family: 'Ubuntu Mono', monospace;
}

</style>