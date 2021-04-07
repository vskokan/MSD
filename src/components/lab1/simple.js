class Simple {
    
    formReplacementTable(alphabet, replacement) { // Формируем таблицу замен символов
        let replacementTable = [];
        for (let i = 0; i < alphabet.length; i++) {
            if (alphabet[i] !== " ") {
                replacementTable.push({
                    symbol: alphabet[i],
                    replacement: replacement[i],
                });
            }
        }

        replacementTable.push({
            symbol: " ",
            replacement: " ",
        });

        return replacementTable;
    }

    findReplacement(symbol, table) { // Вспомогательная функция, которая ищет для каждого символа соответствующую ему замену в талблице
        for (let i = 0; i < table.length; i++) {
            if (symbol == table[i].symbol.toUpperCase()) {
                return table[i].replacement.toUpperCase()
            } else if (symbol == table[i].symbol.toLowerCase()) {
                return table[i].replacement.toLowerCase()
            }
        }
    }

        monoAlphabetReplacement(stringToReplace, replacementTable) {
            let replacedString = ''
            let log = []
            for (let i = 0; i < stringToReplace.length; i++) {
                log.push(`Замена: ${stringToReplace[i]} на ${this.findReplacement(stringToReplace[i], replacementTable)}`)
                replacedString += this.findReplacement(stringToReplace[i], replacementTable)
            }

            return {
                replacedString,
                log
            }
        }
    }

    export default new Simple();