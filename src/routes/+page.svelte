<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Personal website" />
</svelte:head>

<section>
	<h1>{data.greeting}</h1>

	{#each data.paragraphs as paragraph}
		<p>{paragraph}</p>
	{/each}
</section>
