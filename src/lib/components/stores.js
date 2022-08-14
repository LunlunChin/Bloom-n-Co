import { writable } from 'svelte/store';

export let items= writable([{
    'name' : "apple",
    'price' : 1001,
    'seller' : "Ah Beng",
    'category': "Computer & Accessories",
    'rating' : 5,
    'quantity': 1,

},
{
    'name' : "samsung",
    'price' : 1020,
    'seller' : "Ah Beng",
    'category': "Computer & Accessories",
    'rating' : 3,
    'quantity': 0,
},
{
    'name' : "asus",
    'price' : 1100,
    'seller' : "Ah Beng",
    'category': "Computer & Accessories",
    'rating' : 4,
    'quantity': 0,
}

])

export let searched_items = writable([
    
])

export let filtered_items = writable([
    
])

export let selected_items = writable([
    
])

export let cart_items = writable([
    {'name':"test"}
    
    
   
])

export const isOverlay = writable(false);