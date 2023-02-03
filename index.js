export default function(arity) {

        return function(array, callback, initial=Array(arity).fill(0)) {
                for (let input of array) {
                        output = callback(input, ...initial)

                        initial.shift()
                        initial.push(output)
                }

                return output
        }
}
