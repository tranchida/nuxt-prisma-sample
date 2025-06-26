<template>
    <Usertable :title="title" :data="data" :status="status" :switchState="switchState" />
</template>

<script setup lang="ts">

import type { User } from '@prisma/client';

const title = ref("Users");
const { data, status, refresh } = await useFetch<User[]>(`/api/user`);

const switchState = async (id: number,) => {
    await $fetch(`/api/user/switchstate/${id}`);
    title.value = "Users updated";
    refresh();
}
</script>