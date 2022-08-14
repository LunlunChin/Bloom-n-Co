export function filter_by_search(list, search_term){
    let searchTermRegExp = new RegExp(search_term,'i')
    let search_results = list.filter((obj)=>{
        let keys = Object.keys(obj)
        for (let key of keys){
            if(searchTermRegExp.test(obj[key])){
                return true;
            }
        }
    })
    return search_results
}
