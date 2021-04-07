<template>
  <div class="container">
    <div class="lab1">
      <div class="simple">
        <h2>Простая подстановка</h2>
        <Simple />
      </div>
      <hr />
      <div class="vig">
        <h2>Подстановка с помощью таблицы Виженера</h2>
        <Vigenere />
      </div>
    </div>
    <hr />
    <div class="lab2">
      <div class="gamma">
        <h2>Гаммирование</h2>
        <Gamma />
      </div>
      <hr />
      <div class="analythical">
        <h2>Аналитический метод (экспоненциальный шифр)</h2>
        <Analythical />
      </div>
      <hr />
      <div class="block">
        <h2>Перестановка блоков</h2>
        <Block />
      </div>
    </div>
  </div>
</template>

<script>
import Simple from "./lab1/Simple.vue";
import Vigenere from "./lab1/Vigenere.vue";
import Gamma from "./lab2/Gamma.vue";
import Analythical from './lab2/Analythical.vue'
import Block from './lab2/Block.vue'

export default {
  components: {
    Simple,
    Vigenere,
    Gamma,
    Analythical,
    Block
  },
};
</script>
