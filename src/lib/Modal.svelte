<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
	 
	let modal;
	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}
		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);
			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;
			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;
			tabbable[index].focus();
			e.preventDefault();
		}
	};
	const previously_focused = typeof document !== 'undefined' && document.activeElement;
	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background" on:click={close} transition:fade></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal} transition:fly="{{y: -200, duration: 500}}">
	<!-- <header>
		<h2><slot name="title"></slot></h2>
		<button on:click={close}>X</button>
	</header>
	
	<hr/> -->

	<div class="content">
		<slot></slot>
	</div>
</div>

<style lang="scss">
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}
	.modal {
		z-index: 999;
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 0;
		border-radius: 1em;
		background: white;
		overflow: hidden;
		hr {
			color: #f3f3f3;
			background: #f3f3f3;
		}
		.content{
			padding: 1em;
			position: relative;
		}
	}
	header {
		padding: 1em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.4em;
		button {
			background: none;
			border: none;
			font-size: 1em;
			color: #ccc;
		}
	}
	button {
		display: block;
	}
</style>