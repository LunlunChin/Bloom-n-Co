<script>
	import { items, searched_items } from './stores';
	import { filter_by_search } from './helper';
	let search_term;

	function search_list(search_term, items) {
		if (search_term) {
			let results = filter_by_search(items, search_term);
			searched_items.set(results);
		} else {
			searched_items.set(items);
		}
	}
	$: search_list(search_term, $items);
</script>

<body>
	<div class="box">
		<input class="box" type="search" bind:value={search_term} placeholder="Search..." />
	</div>
</body>

<style>
	.box {
		position: absolute;
		/* background-color: rgb(186, 129, 129); */
	}
	body {
        background-image: url("../assets/florist.jpg");
        
    }
	input {
		/* margin-left: 150px; */
		position: absolute;
		margin-bottom: 30px;
		/* padding-right: 30px; */
		display: flex;
		padding: 10px;
		height: 50px;
		border: 2px solid #c0bcbe;
		width: 700px;
		background: rgb(255, 250, 250);
		background-color: rgb(255, 250, 250);
		border-radius: 6px;
		box-sizing: border-box;
		font-family: Comic Sans MS;
		font-size: 18px;
		color: #514721;
		outline: none;
		transition: 0.5s;
		box-shadow: 2px 2px 10px rgb(145, 145, 145);
	}
	/* .box:hover input{
    width: 350px;
    background: #3b3640;
    border-radius: 10px;
}
.box i{
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translate(-50%,-50%);
    font-size: 26px;
    color: #ffd52d;
    transition: .2s;
}
.box:hover i{
    opacity: 0;
    z-index: -1;
} */
</style>
