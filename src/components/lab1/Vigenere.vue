<template>
  <div class="container">
    <div class="data">
      <div class="alphabet">
        <label for="alphabet">Используемый алфавит</label>
        <input type="text" v-model="alphabet" id="alphabet" />
      </div>
      <div class="replacement">
        <label for="replacement">Используемый ключ</label>
        <input type="text" v-model="key" id="replacement" />
      </div>
    </div>
    
    <div class="input">
      <label for="input">Введите исходную строку</label>
      <input type="text" v-model="stringToReplace" id="input" />
    </div>
    <button class="getResult" @click="getResult">Получить результат</button>
    <div class="result">
      <div class="vigenereTable" v-if="result.table.length !== 0">
          <h4>Таблица Виженера</h4>
          <div v-for="row, index in result.table" :key="index">
              {{row}}
          </div>
      </div>
      
      <div class="keyTable" v-if="result.keyTable.length !== 0">
          <h4>Таблица ключа</h4>
          <div class="alphabet">
          {{ alphabet }}
      </div>
          <div v-for="row, index in result.keyTable" :key="index">
              {{row}}
          </div>
      </div>
      <h4>Результаты</h4>
      <div class="log">
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

import Vigenere from './vigenere.js' 

export default {
  data() {
    return {
      alphabet:
        "А Б В Г Д Е Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ь Ы Ъ Э Ю Я",
      key:
        "Ключ",
      stringToReplace: "",
      result: {
          table: [],
          keyTable: [],
          result: ''
      },
    };
  },
  methods: {
      getResult() {
          this.result.table = Vigenere.formVigenereTable(this.alphabet)
          this.result.keyTable = Vigenere.formReplacementTable(this.key, this.result.table).strings
          this.result.result = Vigenere.vigenereReplacement(this.stringToReplace, this.key, this.alphabet)
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
    width: 400px;
}

</style>