<template>
	<header>
		<ul>
			<li>
				<a href="/" v-scroll-to="{ el:'#projects', offset: -100 }">Projects</a>
			</li>
			<li>
				<a href="/" v-scroll-to="{ el:'#skills', offset: -100 }">Skills</a>
			</li>
			<li>
				<a href="/" v-scroll-to="{ el:'#hobbies', offset: -100 }">Hobbies</a>
			</li>
		</ul>
	</header>
</template>

<style scoped lang="scss">
@import 'style';
</style>
