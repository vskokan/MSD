<template>
<div class="container">
    <div class="input">
        <label for="input">Введите исходную строку</label>
        <input type="text" id="input" v-model="input">
    </div>
    <button @click="getResult">Получить результат</button>
    <div class="result" v-if="output.length > 0">
        <div>Будем разбивать сообщение на блоки длиной {{ blockLength }} символов</div>
        <div class="blocks">
          Получили блоки:  {{blocks}}
        </div>

        <div class="key">
            Ключ: {{key}}
        </div>

        <div class="output">
             <pre class="output-string">{{output}}</pre>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            blocks: [],
            output: '',
            blockLength: 6,
            //key: [2, 6, 1, 4, 3, 5]
            key: []
        }
    },
    methods: {
        getBlocks() {
            let string = this.input

            const blocksAmount = Math.ceil(this.input.length / this.blockLength)

            for (let i = 0; i < blocksAmount; i++) {
                this.blocks.push(string.substr(0, this.blockLength))
               string = string.substring(this.blockLength)
            }
        },

        genetateKey() {
            for (let i = 0; i < this.blockLength; i++) {
                this.genetateKeyPart()
                //this.key.push(keyPart)
            }
        },
        genetateKeyPart() {
            let keyPart = Math.floor(Math.random() * (this.blockLength)) + 1;
            console.log(keyPart)
            if (this.key.includes(keyPart)) {
                return this.genetateKeyPart()
            } else {
                this.key.push(keyPart)
                return
            }
        },

        getCodedString() {
            // this.key.forEach((elem) => {
                
            //     // this.blocks.forEach(block => {
            //     //     console.log(elem)
            //     //     console.log(block.charAt(elem - 1))
            //     //     this.output += block.charAt(this.key.indexOf(elem) - 1)
            //     // })
            // })

            for (let i = 1; i <= this.blockLength; i++) {
                let pos = this.key.indexOf(i)
                this.blocks.forEach(block => {
                    console.log(block)
                    console.log(`char = [${block.charAt(pos)}], pos = ${pos}`)
                    this.output = this.output.concat(String(block.charAt(pos))) 
                })
                console.log(`i = ${i}, pos = ${pos}`)
            }
        },

        getResult() {
            this.blocks = []
            this.key = []
            this.output = ''
            this.getBlocks()
           this.genetateKey()
            this.getCodedString()
            
        }
    }
}
</script>

<style scoped>

    .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0px;
}
    .output-string {
        font-size: 20px;
    }
</style>