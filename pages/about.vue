<template>
    <Usertable title="Managers" :data="managers" :status="status" :switchState="switchState" />
    <Usertable title="Developers" :data="developers" :status="status" :switchState="switchState" />
</template>

<script setup lang="ts">

import type { User } from '@prisma/client';

const title = ref("Users");
const { data, status, refresh } = await useFetch<User[]>(`/api/user`);
const managers = computed(() => data.value ? data.value.filter(user => user.employed === 'Manager') : null);
const developers = computed(() => data.value ? data.value.filter(user => user.employed === 'Developer') : null);

const switchState = async (id: number,) => {
    await $fetch(`/api/user/switchstate/${id}`);
    title.value = "Users updated";
    refresh();
}
</script>