<script>
    import { items, searched_items } from "./stores";
    import { filter_by_search } from './helper';
    let search_term;
    
    
    function search_list(search_term, items) {
        if (search_term) {
            let results = filter_by_search(items, search_term);
            searched_items.set(results);
        }
        else{
            searched_items.set(items)
        }
    }
    $: search_list(search_term, $items);
</script>
<body>
<div class="box">
<input class="box" type="search" bind:value={search_term} placeholder="Search" />

</div>
</body>
<style>

    
    .box{
    position: relative;
}

input {
    margin-left: 150px;
    margin-bottom :30px;
    display: flex;
    padding: 10px;
   
    height: 50px;
    
    border: 2px solid #553c4b;
    width: 900px;
    background: rgb(255, 250, 250);
    border-radius: 10px;
    box-sizing: border-box;
    font-family: Comic Sans MS;
    font-size: 20px;
    color: #ffd52d;
    outline: none;
    transition: .5s;
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