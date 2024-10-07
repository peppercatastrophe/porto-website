<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact page" />
</svelte:head>

<div class="text-column">
	<h1>Contact</h1>

	<!-- Email -->
	<p>
		Email: <a href="mailto:{data.emailAddress}">{data.emailAddress}</a>
	</p>

	<!-- Github -->
	<p>
		Github: <a href={data.githubLink}>{data.githubLink}</a>
	</p>

	<!-- Linkedin -->
	<p>
		Linkedin: <a href={data.linkedinLink}>Abyan Setia Asa Putra</a>
	</p>
</div>
