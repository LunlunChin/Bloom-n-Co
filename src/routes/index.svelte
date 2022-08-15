<script>
	import Items from '$lib/components/Items.svelte';
	import Form from '$lib/components/Form.svelte';
	import Search from '$lib/components/Search.svelte';
	import Filter from '$lib/components/Filter.svelte';
	import Cart from '$lib/components/Cart.svelte';

</script>
<nav>
<div class="row title1">
	<h1>Lun's Shop</h1>
	
<div class="searchBar">
	<Search />
	
</div>
</div>
<button><a href="/addItem"><i class="fa-solid fa-plus"></i>Add Item</a></button>


</nav>

<div class="row">
	<div class="box">
		<Filter />
	</div>
</div>


<div class="row">
	<div class="column-12">
		<Items />
	</div>
</div>

<!-- <div class="row">
	<div class="column-12">
		<Form />
	</div>
</div> -->


<style>

	nav{
		padding: 50px 20px 100px ;
		background-color: rgb(186, 129, 129);
	}
		.title1 h1{
		font-size: 40px;
		color: rgb(236, 83, 109);
		position: absolute;
		
	}
	
	.searchBar{
		padding-left: 100px;
	}
	
	button{
		background-color: white;
		border-radius: 7px;
		color: black;	
		position: absolute;
		margin-top: 0px;
		margin-left: 1000px;
		padding: 10px 10px;
		border: rgb(183, 175, 175);
		box-shadow: 0 0 10px rgb(104, 89, 89);
	} 
	a{
		color:black;
		text-decoration: none;
		font-weight: bold;

	}
	

</style>