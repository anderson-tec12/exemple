class Challenges{

  calcMedia(...props){
  
    const values = props
      .reduce((acc, el) => {
        acc.some += el
        acc.qtd ++

        return acc
      },{some: 0,qtd:0})

    return values.some / values.qtd
  }

  chunks(number){
    return new Array(number).fill('chunk').join('-')
  }

  reverseArray(dataArray){
    const reverseArray = []
    const positionQTD = dataArray.length

    for( let initial = positionQTD ; initial > 0 ; initial--){
      const currentValue = dataArray[initial - 1]

      reverseArray.push(currentValue)
    }

    return reverseArray
  }

  orderOfMagnitude(value){
    const letter =  value
      .split('')
      .filter(letter => !!letter)
      .sort()
      .reverse()[0]
    
    return letter
      
  }

}

// const a = new Challenges()

// console.log(a.reverseArray([3,2,1]))

module.exports = Challenges

