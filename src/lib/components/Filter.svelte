<script>
    import { searched_items, filtered_items, items } from "./stores";


    let filter_criteria = [...new Set($searched_items.map((a) => a.category))];
     //generate distinct filter criteria based on searched_albums
     let filter_criteria2 = [...new Set($searched_items.map((a) => a.seller))];


    function updateFilterCriteria($items) {
        filter_criteria = [...new Set($items.map((a) => a.category))];
    }
    function updateFilterCriteria2($items) {
        filter_criteria2 = [...new Set($items.map((a) => a.seller))];
    }



    let selected_filters = {};
    function filter_list(searched_list, selected_filters) {
        let selected_filter_keys = Object.keys(selected_filters).filter(
            function (k) {
                return selected_filters[k] !== false;
            }
        );
        let filter_results;
        if (selected_filter_keys.length) {
            filter_results = $searched_items.filter((obj) => {
                for (let key of selected_filter_keys) {
                    if (obj["category"] === key) {
                        return true;
                    }
                }
                return false;
            });
        } else {
            filter_results = $searched_items;
        }
        filtered_items.set(filter_results);
    }

    
    $: filter_list($searched_items, selected_filters, $items);
    $: updateFilterCriteria($searched_items); 
    $: updateFilterCriteria2($searched_items);
</script>


<div
    class="btn-group"
    role="group"
    aria-label="Basic radio toggle button group"
>

    {#each filter_criteria as criteria}
        <input
            type="checkbox"
            class="btn-check"
            name="btnradio"
            id={criteria}
            autocomplete="off"
            bind:checked={selected_filters[criteria]}
        />
        <label class="btn btn-outline-primary" for={criteria}>{criteria}</label>
    {/each}

    
    

</div>
<div class="row">
<div
    class="btn-group"
    role="group"
    aria-label="Basic radio toggle button group"
>

{#each filter_criteria2 as criteria}
        <input
            type="checkbox"
            class="btn-check"
            name="btnradio"
            id={criteria}
            autocomplete="off"
            bind:checked={selected_filters[criteria]}
        />
        <label class="btn btn-outline-primary" for={criteria}>{criteria}</label>
    {/each}

    
    

</div>
</div>
