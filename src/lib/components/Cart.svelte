<script>
	import { isOverlay } from "./stores";
    import Overlay from "./Overlay.svelte";
    import { selected_items,items,cart_items } from "./stores";
    //import {cart} from "./Items.svelte";
	import {fade, fly} from 'svelte/transition';

	export let products;

	function clear() {
        
        cart_items.set([]); //set selected item to null
		// for(let item in $cart_items){
		// item.quantity=0;
		// }
    }

	
</script>



<!-- HTML START -->



<button on:click={()=>{document.getElementById("overlay").style.display = "block";
}}><i class="fa-solid fa-cart-shopping">Open Cart</i></button>



<div in:fade out:fly={{y:-50, duration: 2000}}>
<div id="overlay">

	{#each products as item}

	<p>{item.name}   {item.price}  {item.quantity}</p>
	
	{/each}
     <!-- <div class="item-list">
{#each cart as item }
	{#if item.quantity > 0}
	<div class="cart-item">
		<img width="50" src={item.image} alt={item.name}/>
		<div>{item.quantity}
			<button on:click={() => plusItem(item)}>+</button>
			<button on:click={() => minusItem(item)}>-</button>
		</div>
		<p>₹{item.price * item.quantity}</p>
	</div>
	{/if}
{/each}
</div>  -->

<!-- {#each $cart_items.name as name}
<p>{name}</p>
{/each} -->

    <button on:click={()=>{document.getElementById("overlay").style.display = "none";
}}>Close</button>
<button on:click={clear}>Clear</button>
</div>
</div>







<!-- Styling start -->
<style>
	
    #overlay{
        position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
  width: 50%; /* Full width (cover the whole page) */
  height: 50%; /* Full height (cover the whole page) */
  top: 100px;
  left: 300px;
  right: 0;
  bottom: 0;
  background-color: rgba(62, 49, 54, 0.756); /* Black background with opacity */
  z-index: 2; 
  box-shadow: 0px 0px 10px rgb(219, 134, 7);
    }

	.item-list, .cart-item{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>

