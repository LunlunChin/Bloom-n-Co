<script>
	import Items from '$lib/components/Items.svelte';
	import Form from '$lib/components/Form.svelte';
	import Filter from '$lib/components/Filter.svelte';
	import Search from '$lib/components/Search.svelte';
	import Cart from '$lib/components/Cart.svelte';

</script>



<!-- <div class="searchBar">
	<Search />
</div> -->
<!-- <button><a href="/addItem"><i class="fa-solid fa-plus"></i>Add Item</a></button> -->



	<div class="box">
		<Filter />
	</div>



<div class="row">
	<div class="column-12">
		<Items />
	</div>
</div>



<style>
	

	
	.searchBar{
		padding-left: 10px;
	}
	
	button{
		background-color: white;
		border-radius: 7px;
		color: black;	
		position: relative;
		margin-top: 0px;
		margin-left: 900px;
		padding: 10px 10px;
		border: rgb(183, 175, 175);
		box-shadow: 0 0 10px rgb(104, 89, 89);
	} 
	a{
		color:black;
		text-decoration: none;
		font-weight: bold;

	}
	.box{
		margin-top:50px;
	}
	

</style>