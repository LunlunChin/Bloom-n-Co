<script>
	import { items } from './stores';
	export let show = false;
	let name;
	let price;
	let seller;
	let category;
    
    let questions = [
        '',
		'Computer & Accessories' ,
		'Food & Beverage' ,
        'Pets Accessories' ,
	];

	function addProduct() {
		let count = $items.length;
		let new_item = {
			name: name,
			seller: seller,
			price: price,
			category: category
		};
		// update store with new list
		let existing_items = $items;
		existing_items.push(new_item);
		items.set(existing_items);

		//clear the form fields
		name = null;
		price = null;
		category = null;
		seller = null;
	}
</script>

<div class="form-container">
	<form on:submit|preventDefault={addProduct}>
		<div class="row mb-3">
			<label class="col-sm-2 col-form-label" for="product_name">Name</label>
			<div class="col-sm-10">
				<input class="form-control" required id="product_name" type="text" bind:value={name} />
			</div>
		</div>
		<div class="row mb-3">
			<label class="col-sm-2 col-form-label" for="seller">Seller</label>
			<div class="col-sm-10">
				<input class="form-control" required id="seller" type="text" bind:value={seller} />
			</div>
		</div>
		<div class="row mb-3">
			<label class="col-sm-2 col-form-label" for="genre">Price</label>
			<div class="col-sm-10">
				<input
					required
					class="form-control"
					id="product_price"
					type="number"
					step="0.01"
					bind:value={price}
				/>
			</div>
		</div>

        <!-- <div class="row mb-3">
			<label class="col-sm-2 col-form-label" for="category">Category</label>
			<div class="col-sm-10">
				<input
					required
					class="form-control"
					id="product_category"
					type="text"
					step="0.01"
					bind:value={category}
				/>
			</div>
		</div> -->

		<div class="row mb-3">
			<label class="col-sm-2 col-form-label" for="category">Category</label>

			<div class="col-sm-10">
				
                <select bind:value={category} required>
					{#each questions as question}
						<option value={question}>
							{question}
						</option>
                        
					{/each}
				</select>
				
			</div>
		</div>

		<button class="btn btn-primary" type="submit">Add</button>
	</form>
</div>

<style>
	.form-container {
		padding: 1rem;
		margin-right: 0;
		margin-left: 0;
		margin-bottom: 10px;
		margin-top: 10px;
		border-width: 1px;
		border: 1px solid grey;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
	}
</style>
