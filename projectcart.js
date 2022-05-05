let add_to_cart = document.getElementsByClassName('btn-primary')
let main_contain = document.getElementsByTagName('tbody')[0]

let quantity_fielld = document.getElementsByClassName('num')  // input which carry the number of pieces
let removeBtns = document.getElementsByClassName("uk-button-danger")




for(let i = 0; i<add_to_cart.length;i++){
    add_to_cart[i].addEventListener('click',addToCart)
}

function addToCart(event){
    let btn = event.target
    let btn_grandparent = btn.parentElement.parentElement.parentElement
    let btn_parent = btn.parentElement.parentElement
    let itemName = btn_parent.children[1].innerText
    let itemPrice = btn_parent.children[3].innerText
    let itemImage = btn_grandparent.children[0].src

    let itemContainer = document.createElement('tr');
    itemContainer.innerHTML = `<td><input class="uk-checkbox" type="checkbox"></td>
    <td><img class="uk-preserve-width uk-border-circle" width="40" src="${itemImage}"></td>
    <td class="uk=table-link">
      <h3 class="item-name"> ${itemName} </h3> 
    </td>
    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
    <td><input type="number" class="num" value="1"></td>
    <td class="uk-text-truncate total-price"><h3>$78</h3></td>
    <td><button class="uk-button uk-button-danger" type="button">remove</button> </td>`

    main_contain.append(itemContainer)

    for(let x = 0;x < quantity_fielld.length ; x++){
        quantity_fielld[x].addEventListener('click' , updateTotal)
    }
    
    
}
function updateTotal(event){
    number_of_items = event.target
    number_of_items_parent = number_of_items.parentElement.parentElement //tr of item details
    price_field = number_of_items_parent.getElementsByClassName('item-price')[0] //
    total_field = number_of_items_parent.getElementsByClassName('total-price')[0]
    price_field_content = price_field.children[0].innerText.replace('$','')   // content of h3 ( price without $ )
    total_field.children[0].innerText='$'+ number_of_items.value *price_field_content
    
    for(let rb = 0 ; rb <removeBtns.length ; rb++){
        removeBtns[rb].addEventListener('click', removeItems)
    }
    grandTotal()


}
function grandTotal(){
     let total = 0
    let grand_total = document.getElementsByClassName('grand-total')[0]
    let total_price = document.getElementsByClassName('total-price')
    for(let s = 0 ; s < total_price.length ; s++)
    {
        total_price_content = Number(total_price[s].innerText.replace('$', ''))
        total += total_price_content
    }
    grand_total.children[0].innerText = '$' + total    // h3 inside grand total
    grand_total.children[0].style.fontweight = 'bold'
    

}
function removeItems(event){
    remove_Btn = event.target
    Btn_parent = remove_Btn.parentElement.parentElement
    Btn_parent.remove()
    grandTotal()

}