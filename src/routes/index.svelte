<script>
	import Items from '$lib/components/Items.svelte';
	import Form from '$lib/components/Form.svelte';
	import Search from '$lib/components/Search.svelte';
	import Filter from '$lib/components/Filter.svelte';
	import Cart from '$lib/components/Cart.svelte';

</script>

<div class="row title1">
	<h1>Lun's Shop</h1>
	
</div>

<a href="/addItem">Add Item</a>



<div class="row">
	<div class="box">
		<Search />
		<Filter />
	</div>
</div>

<div class="row">
	<div class="column-12">
		<Items />
	</div>
</div>

<div class="row">
	<div class="column-12">
		<Form />
	</div>
</div>


<style>
		.title1 h1{
		font-size: 40px;
		color: rgb(236, 83, 109);
	}

	


</style>