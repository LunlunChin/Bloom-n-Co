<script>
    import Card from './Card.svelte';
    import Cart from './Cart.svelte';
    import {filtered_items, items, selected_items, cart_items} from './stores';

   
	
    

    function removeItems() {
        let product_list = $items;

        for (let selected_product of $selected_items) {
            product_list = product_list.filter((x) => {
                if (x.name == selected_product) {
                    return false;
                } else {
                    return true;
                }
            });
        }
        selected_items.set([]); //set selected item to null
        items.set(product_list);
    }


    //FIX 
        function addToCart() {
            let existing_cart = $cart_items;
            let product_list = $items;
            for (let selected_product of $selected_items) {
                product_list = product_list.filter((x) => {
                    if (x.name == selected_product){
                        x.quantity+=1;
                    existing_cart.push({'name':x.name, 'price':x.price, 'quantity':x.quantity});
                    console.log("SUCCESS");


                    } 
                });
        //         let existing_cart = $cart_items;
        //         let product_list = $items;
        //         console.log($selected_items)
        //        for (let selected_product of $selected_items) {
        //         product_list = product_list.filter((x) => {
        //             if (x.name == selected_product){
        //         // for (let existing_cart_name of existing_cart) {
        //         //     if(selected_product != existing_cart_name.name){
        //                 existing_cart.push({'name':selected_product});
        //                 cart_items.set(existing_cart);
        //                 console.log(selected_product);
        //     //         }
        //     //    }
        //         }}
        //     }
        // }
        
        }
        cart_items.set(existing_cart);
    }

          
        


    // let existing_items = $items;
	// 	existing_items.push(new_item);
	// 	items.set(existing_items);

$: addToCart()
$: cart_items

</script>
<!-- <button on:click = {addToCart}><i class="fas fa-plus"></i></button> -->
<button on:click = {removeItems}><i class="fa-solid fa-trash text-danger">Delete</i></button>

<button on:click={addToCart}><i class="fa-solid fa-cart-plus">Add To Cart</i></button>
    <Cart products={$cart_items} />



{#each $filtered_items as item} 
 <Card name={item.name} price={item.price} cate={item.category} rating={item.rating} carter={item}/>
 {:else}
    <p>No Item found</p>
{/each}

<!-- 
{#each $cart_items as tester}
{tester.name}
{/each} -->






