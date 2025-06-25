<template>
    <div>
        <h1 class="text-3xl font-bold text-black dark:text-white text-center">
            {{ title }}
        </h1>
        <div class="w-1/2 mx-auto">
            <table class="w-full table-auto">
                <thead
                    class="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-slate-100">
                    <tr>
                        <th class="p-3 text-start font-medium"> Last Name </th>
                        <th class="p-3 text-start font-medium"> First Name </th>
                        <th class="p-3 text-start font-medium"> Email </th>
                        <th class="p-3 text-start font-medium"> Employed </th>
                        <th class="p-3 text-start font-medium"> Date </th>
                        <th class="p-3 text-start font-medium"> Active </th>
                        <th class="p-3 text-start font-medium"> Actions </th>
                    </tr>
                </thead>
                <tbody class=" text-slate-800 dark:text-white">
                    <tr v-for="user in data" class="border-b border-slate-200 last:border-0">
                        <td class="p-3">{{user.lastName}}</td>
                        <td class="p-3">{{user.firstName}}</td>
                        <td class="p-3">{{user.email}}</td>
                        <td class="p-3">{{user.employed}}</td>
                        <td class="p-3"><NuxtTime :datetime="user.updatedAt" /></td>
                        <td class="p-3">
                            <span
                                :class="['transition-colors duration-1000', user.active ? 'text-green-500' : 'text-red-500']">
                                <span v-if="user.active">Yes</span>
                                <span v-else>No</span>
                            </span>
                        </td>
                        <td class="p-3">
                            <button @click="switchState(user.id)" :disabled="status === 'pending'"
                                class="bg-black text-white px-4 py-2 rounded-md hover:bg-indigo-600 hover:cursor-pointer transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed">
                                &#128259; active
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">

const title = "Users";
const { data, status, refresh } = await useFetch("/api/user");

const switchState = async (id: number,) => {
    await $fetch(`/api/user/switchstate/${id}`);
    refresh();
}
</script>