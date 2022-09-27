import { add_attribute } from 'svelte/internal';
import { writable } from 'svelte/store';

export let items= writable([{
    'name' : "High DANDELION",
    'price' : 60,
    'seller' : "Agent Ah Beng",
    'category': "Rainbow",
    'rating' : 5,
    'quantity': 0,
    'img_src':'./src/lib/assets/flower1',

},
{
    'name' : "Water Lagoon",
    'price' : 78,
    'seller' : "Agent Ah Beng",
    'category': "Blue",
    'rating' : 3,
    'quantity': 0,
    'img_src':'./src/lib/assets/flower1',

},
{
    'name' : "Belleville",
    'price' : 90,
    'seller' : "Agent Ah Beng",
    'category': "Pink",
    'rating' : 4,
    'quantity': 0,
    'img_src':'./src/lib/assets/flower1',

}

])

export let searched_items = writable([
    
])

export let filtered_items = writable([
    
])

export let selected_items = writable([
    
])

export let cart_items = writable([
    
    
    
   
])

export const isOverlay = writable(false);