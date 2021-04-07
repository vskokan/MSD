import Simple from './simple.js'

class Vigenere {
    formVigenereTable(alphabet) {
        let table = []
        let alphabetString = alphabet
        for (let i = 0; i <= alphabet.length / 2; i++) {
            table.push(alphabetString)
            alphabetString += ' ' + alphabetString[0]
            alphabetString = alphabetString.substring(2, alphabetString.length)
        }
    
        return table
    }

    findStringInTable(symbol, table) {
        for (let i = 0; i < table.length; i++) {
            if (table[i][0] == symbol.toUpperCase()) {
                return table[i]
            }
        }
    }

    formReplacementTable(key, vigenere) {
        const vigenereTable = vigenere
        const replacementTable = {
            text: vigenereTable[0],
            strings: []
        }
    
        for (let i = 0; i < key.length; i++) {
            replacementTable.strings.push(this.findStringInTable(key[i], vigenereTable))
        }
        return replacementTable
    
    }

    findReplacement(symbol, table) {
        for (let i = 0; i < table.length; i++) {
            if (symbol == table[i].symbol.toUpperCase()) {
                return table[i].replacement.toUpperCase()
            } else if (symbol == table[i].symbol.toLowerCase()) {
                return table[i].replacement.toLowerCase()
            }
        }
    }

    vigenereReplacement(stringToReplace, key, alphabet) {
        const vigenereTable = this.formVigenereTable(alphabet)
        const keyTable= this.formReplacementTable(key, vigenereTable).strings 
        console.log(keyTable)
        let replacedString = ''
        let log = []
        let pos = 0

        for (let i = 0; i < stringToReplace.length; i++) {
            if (pos == keyTable.length) {
                pos = 0
            }
            const table = Simple.formReplacementTable(alphabet, keyTable[pos])
            console.log(keyTable.pos)
            const char = this.findReplacement(stringToReplace[i], table)
            replacedString += char
            log.push(`Замена ${stringToReplace[i]} на ${char}`)
            pos++
        }

        return {replacedString, log}

    }
}

export default new Vigenere();