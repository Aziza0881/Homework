let name2 = 'Alex'
let money = 10000
let account = 7777

let names = prompt('Как вас зовут?')

if (names == name2) {

    let num = prompt('Номер счета')
    if (num == account) {
        
        let amount = prompt('Сколько обналичить?')
        if (amount <= money) {
            
            alert(amount)
            alert(money - amount)

        } else {
            alert('Недостаточно')
        }

    } else {
        alert('good bye man!')
    }

} else {
    alert('good bye man!')
}