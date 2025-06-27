<template>
	<div class="min-h-screen flex flex-col transition-colors duration-200">
		<nav class="bg-blue-500 dark:bg-blue-900 shadow-md sticky top-0">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
			</div>
		</nav>
		<main>
			<slot />
		</main>
		<footer class="bg-gray-100 dark:bg-gray-800 mt-auto sticky bottom-0">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<div class="flex justify-between items-center">
					<div class="text-gray-600 dark:text-gray-300 text-sm">
						©
						<NuxtTime year="numeric" :datetime="Date.now()" /> NusxtPrismaSample version 1.0.0. Tous droits
						réservés.
					</div>
					<div class="flex space-x-4">
						<a href="https://x.com/gtranchida" target="_blank"
							class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
							<span class="sr-only">X</span>
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 300 271">
								<path fill-rule="evenodd"
									d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
									clip-rule="evenodd" />
							</svg>
						</a>
						<a href="https://github.com/tranchida/nuxttest" target="_blank"
							class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
							<span class="sr-only">GitHub</span>
							<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
								<path fill-rule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clip-rule="evenodd" />
							</svg>
						</a>
					</div>
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
