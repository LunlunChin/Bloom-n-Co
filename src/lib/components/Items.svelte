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
                if (x.name == selected_product) {
                 existing_cart.push({'name':x.name});
                 cart_items.set(existing_cart)
                }
            });
        }
        
    }
    // let existing_items = $items;
	// 	existing_items.push(new_item);
	// 	items.set(existing_items);

$: addToCart()
$: cart_items
</script>
<!-- <button on:click = {addToCart}><i class="fas fa-plus"></i></button> -->
<button on:click = {removeItems}><i class="fas fa-trash-alt"/></button>

<button on:click={addToCart}>Add to Cart</button>
<Cart products={$cart_items}/>

{#each $filtered_items as item} 
 <Card name={item.name} price={item.price} cate={item.category} rating={item.rating} carter={item}/>
 {:else}
    <p>No Item found</p>
{/each}


{#each $cart_items as tester}
{tester.name}
{/each}






