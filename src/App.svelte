<script>
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	import PollList from './components/PollList.svelte'
	import CreatePollForm from './components/CreatePollForm.svelte'
	import Tabs from './shared/Tabs.svelte'

	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = items[0];

	const tabChange = (e) => {
		activeItem= e.detail;
	}

	const handleAdd = (e) => {
		activeItem = items[0];
	}

</script>

<Header/>
<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
		<PollList/>
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm on:add={handleAdd}/>
	{/if}
</main>
<Footer/>

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>