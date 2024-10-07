<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Portofolio</title>
	<meta name="description" content="List of portofolios" />
</svelte:head>

<h1>Portofolio</h1>

<div class="text-column">
	{#each data.portofolios as porto}
		<h1>{porto.title}</h1>

		{#each porto.description as paragraph}
			<p>{paragraph}</p>
		{/each}

		{#if porto.githubLink.length > 0}
			<p>Github Link: <a href={porto.githubLink}>{porto.githubLink}</a></p>
		{/if}
	{/each}
</div>
