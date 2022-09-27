<script>
	import fx_hexagon from '$lib/assets/lunlogo.png';
</script>

<aside
	class="sidenav has-bg-img bg-white opacity-9 navbar navbar-vertical navbar-expand-xs border-0 border-radius my-0 fixed-start ms-0 ps"
	id="sidenav-main"
>
	<div class="sidenav-header">
		<i
			class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
			aria-hidden="true"
			id="iconSidenav"
		/>
		<a class="navbar-brand m-0" href="/">
			<img src={fx_hexagon} class="navbar-brand-img bg-img h-100" alt="main_logo" />
			<span class="ms-1 font-weight-bold">Bloom' & Co.</span>
		</a>
	</div>
	<hr class="horizontal dark mt-0" />
	<div class="collapse navbar-collapse w-auto ps ps--active-y" id="sidenav-collapse-main">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link " href="/">
					<div
						class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center"
					>
						<i class="ni ni-tv-2 text-primary text-sm opacity-10" />
					</div>
					<span class="nav-link-text ms-1">Shop</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/addItem">
					<div
						class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center"
					>
						<i class="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
					</div>
					<span class="nav-link-text ms-1">Add Item</span>
				</a>
			</li>
		</ul>
		<div class="ps__rail-x" style="left: 0px; bottom: 0px;">
			<div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;" />
		</div>
		<div class="ps__rail-y" style="top: 0px; height: 362px; right: 0px;">
			<div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 270px;" />
		</div>
	</div>
	<div class="sidenav-footer mx-3 ">
		<div class="card card-plain shadow-none" id="sidenavCard">
			<div class="card-body text-center p-3 w-100 pt-0">
				<p>Feel the blossom.<br> by Bloom' & Co.</p>
			</div>
		</div>
	</div>
	<div class="ps__rail-x" style="left: 0px; bottom: 0px;">
		<div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;" />
	</div>
	<div class="ps__rail-y" style="top: 0px; right: 0px;">
		<div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;" />
	</div>
</aside>
