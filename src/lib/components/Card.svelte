<script>
	import { selected_items,items,cart_items } from "./stores";

	export let name;
	export let price;
	export let cate;
	export let rating;
	export let cart= [];

	let img_src = '/favicon.png';
;

let selected;
    function updateSelection(selected) {
        if (selected) {
            if (!$selected_items.includes(name)) {
                selected_items.set([...$selected_items, name]);
            }
        } else {
            let selection = $selected_items.filter((x) => x != name);
            selected_items.set(selection);
        }
    }
    $: updateSelection(selected);

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
	$: addToCart()
$: cart_items	
</script>


<div class="container">

		<div class="column">
		<div class="card">
			<div class="title" />
			<input id="checkbox" type="checkbox" bind:checked={selected} />
			<div class="content">
				
				<img src={img_src} alt={'image of ' + name} />
				<h4>{name}</h4>
				<span class="price">RM {price}</span>
				<h6>{cate}</h6>
				
				<!-- <button on:click={addToCart}>Add to Cart</button> -->
				{#if rating == 5}
					<p>⭐⭐⭐⭐⭐</p>
				{:else if rating == 4}
                <p>⭐⭐⭐⭐</p>
				{:else}
                <p>⭐⭐⭐</p>
				{/if}
			</div>
		</div>
		</div>
	

</div>
<!-- {#each cart as item }
<p>{item.name}</p>
{/each} -->




	


<style>
	.container {
		padding-left: 20px;
		padding-right: 20px;
		
	}
	.card {
		padding: 10px;
		width: 200px;
		height: 250px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		text-align: center;
		display: grid;
		
		
	}
	img {
		height: 50px;
		width: 50px;
	}
	
	.column {
		float: left;
		padding: 10px 10px;
		display: grid;
		
	}
	h6 {
		color: grey;
		font-weight: 100;
	}
	span.price {
		color: rgb(246, 80, 80);
		font-weight: 700;
	}
	#checkbox{
		color:rgb(0, 0, 0);
		margin-left: 160px;
		margin-top: 0px;
	}

	/* Responsive columns */
	@media screen and (max-width: 600px) {
		.column {
			width: 100%;
			display: block;
			margin-bottom: 20px;
		}
	}

	button {
		display: inline-block;
		outline: none;
		cursor: pointer;
		font-size: 12px;
		line-height: 25px;
		font-weight: 700;
		border-radius: 8px;
		padding: 7px 20px;
		margin: 10px;
		border: none;
		transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s,
			transform 0.1s ease 0s;
		background: linear-gradient(
			to right,
			rgb(255, 85, 18) 0%,
			rgb(232, 27, 96) 50%,
			rgb(215, 4, 102) 100%
		);
		color: #fff;
	}
	

	.item-list, .cart-item{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
</style>

