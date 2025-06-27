<template>
    <div>
        <h1 class="text-3xl font-bold text-black dark:text-white text-center">
            {{ title ?? 'Users' }}
        </h1>
        <div v-if="data && data.length > 0">
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
                            <UBadge
                                size="xl"
                                :class="['text-white transition-colors duration-1000', user.active ? 'bg-green-500' : 'bg-red-500']">
                                {{ user.active ? 'Yes' : 'No' }}
                            </UBadge>
                        </td>
                        <td class="p-3">
                            <UButton color="secondary" icon="lucide-arrow-right-left" @click="switchState(user.id)" :disabled="status === 'pending'">
                                active
                            </UButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <p class="text-center text-slate-500">No data</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { User } from '@prisma/client';

defineProps<{
    title?: string;
    data: User[] | null;    
    status: string;
    switchState: (id: number) => Promise<void>;
}>();

</script>