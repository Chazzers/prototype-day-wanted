<script>
	import Logo from '../components/Logo.svelte';
</script>

<div class="wrapper">
	<nav>
		<div><Logo /></div>
	</nav>
	<slot />
</div>

<style>
	nav {
		display: flex;
		justify-content: center;
		padding: 1rem;
	}
	.wrapper {
		background-color: #f1eee9;
		min-height: 100vh;
	}
</style>
