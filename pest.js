/**Pricing:**

- Goombas: 5 Coins
- Bob-ombs: 7 Coins
- Cheep-cheeps: 11 Coins

**Baddies Caught:**

The number of baddies caught will be entered into thier input fields. Each baddies type will have their own input feild.

**Total Price**

This will be *dynamicly* depending on how many baddies were caught.*/

const bForm = document["bomb"]
const cForm = document['cheep']
const gForm = document["goomba"]
const fullAmount = []


gForm.addEventListener("submit",function(event){
    event.preventDefault()
    // alert("so far so good")
    // console.log("so far so good")
    // take value of the input, and set it to be multiplied by 5
    let gInput = Number(gForm.gCount.value)
    console.log(gInput)
    let gValue = gInput * 5
    console.log(gValue)
    gForm.gCount.value = ""
    fullAmount[0] = gValue
    //  -   -   create an element that displays this amount -   -
    const h4Amount = document.createElement('h4')
    h4Amount.textContent = `The Goombas will cost ${gValue} coins`
    document.getElementById("goomba").append(h4Amount)
    h4Amount.previousSibling.remove()
})
//  -   -   -  Next is the Cheep cheep   -   -

cForm.addEventListener('submit', function(event){
    event.preventDefault()
    let cInput = Number(cForm.cCount.value)
    // console.log(cInput)
    let cValue = cInput * 11
    console.log(cValue)
    fullAmount[1] = cValue
    cForm.cCount.value = ""
    //  -   -   create an element that displays this amount -   -
    const h4Amount = document.createElement('h4')
    h4Amount.textContent = `The Cheep-cheeps will cost ${cValue} coins`
    document.getElementById("cheep").append(h4Amount)
    h4Amount.previousSibling.remove()
})

//  -   -   -   Next Bob-omb    -   -   -

bForm.addEventListener("submit", function(event){
    event.preventDefault()
    let bInput = Number(bForm.bCount.value)
    // console.log(cInput)
    let bValue = bInput * 7
    console.log(bValue)
    fullAmount[2] = bValue
    bForm.bCount.value = ""
    //  -   -   create an element that displays this amount -   -
    
    const h4Amount = document.createElement('h4')
    h4Amount.textContent = `The Bob-ombs will cost ${bValue} coins`
    document.getElementById("bomb").append(h4Amount)
    h4Amount.previousSibling.remove()
})

let grandButton = document.getElementById("grandTotal")
grandButton.addEventListener("click", function(){
    // alert("it works")
    console.log(fullAmount[0])
    let allCost = fullAmount[0] + fullAmount[1] + fullAmount[2]
    const h4Amount = document.createElement('h4')
    h4Amount.textContent = `The grand total is ${allCost} coins`
    document.getElementById("total").prepend(h4Amount)
    console.log(grandButton.previousSibling)
    grandButton.previousSibling.remove()
    // h4Amount.firstElementChild.remove()
    // console.log(fullAmount)
})