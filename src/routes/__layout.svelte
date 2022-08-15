<script>
    import Header from '$lib/components/header/Header.svelte'
    import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
</script>
<div class="min-height-200 bg-secondary position-absolute w-100"></div>
<Sidebar />

<main class="main-content position-relative border-radius-lg ps">
    <!-- Navbar -->
<Header/>
<div class='container-fluid'>
<slot></slot>
</div>
</main>