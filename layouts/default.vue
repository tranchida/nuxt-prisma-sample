<template>
	<div class="min-h-screen flex flex-col">
		<nav class="bg-blue-500 dark:bg-blue-900 mt-auto sticky top-0">
			<div class="flex justify-between h-16">
				<div class="flex items-center space-x-1">
					<a href="/">
						<div class="flex items-center space-x-2">
							<img src="~/assets/svelte.svg" width="10" height="10" alt="logo" class="w-10 h-10" />
							<span class="text-white text-2xl font-bold">Svelte Sample</span>
						</div>
					</a>
				</div>
				<div class="flex items-center space-x-4">
					<ClientOnly v-if="!colorMode?.forced">
						<UButton :icon="isDark ? 'lucide:moon' : 'lucide:sun'" color="neutral" variant="ghost"
							@click="isDark = !isDark" />

						<template #fallback>
							<div class="size-8" />
						</template>
					</ClientOnly>
					<UNavigationMenu :items="items" class="w-full justify-center" />
				</div>

			</div>
		</nav>
		<main>
			<slot />
		</main>
		<footer class="bg-gray-100 dark:bg-gray-800 mt-auto sticky bottom-0">
			<div class="flex justify-between h-16">
				<div class="flex items-center">
					©&nbsp;<NuxtTime year="numeric" :datetime="Date.now()" />
					&nbsp;Nuxt-Prisma-Sample version 1.0.0. Tous droits
					réservés.
				</div>
				<div class="flex items-center space-x-4">
					<ULink href="https://x.com/gtranchida" target="_blank">
						<UIcon name="grommet-icons:x" size="24" />
					</ULink>
					<ULink href="https://github.com/tranchida/nuxt-prisma-sample" target="_blank">
						<UIcon name="grommet-icons:github" size="24" />
					</ULink>
				</div>
			</div>
		</footer>
	</div>
	
</template>



<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'


const colorMode = useColorMode()

const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set(_isDark) {
		colorMode.preference = _isDark ? 'dark' : 'light'
	}
})


const items = ref<NavigationMenuItem[]>([
	{
		title: 'Home',
		href: '/',
		label: 'Home',
		icon: 'lucide:home',
	},
	{
		title: 'Admin',
		href: '/admin',
		label: 'Admin',
		icon: 'lucide:user-cog',
	},
	{
		title: 'About',
		href: '/about',
		label: 'About',
		icon: 'lucide:info',
	},
])
</script>
