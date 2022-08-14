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
        let product_list = $items;

        for (let selected_product of $selected_items) {
            product_list = product_list.filter((x) => {
                if (x.name == selected_product) {
                 cart_items= "hi";
                }
            });
        }
        
    }


</script>
<!-- <button on:click = {addToCart}><i class="fas fa-plus"></i></button> -->
<button on:click = {removeItems}><i class="fas fa-trash-alt"/></button>

<button on:click={addToCart}>Add to Cart</button>

{#each $filtered_items as item}
 <Card name={item.name} price={item.price} cate={item.category} rating={item.rating} carter={item}/>
 {:else}
    <p>No Item found</p>
{/each}



<Cart name={$cart_items.name}/>




