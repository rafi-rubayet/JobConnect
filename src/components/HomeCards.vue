<script setup>
import { RouterLink } from 'vue-router';
import Card from '@/components/Card.vue';
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">{{ t('label.for_developer') }}</h2>
          <p class="mt-2 mb-4">
            {{ t('label.for_developer_subtitle') }}
          </p>
          <RouterLink
            to="/jobs"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            {{ t('button.search_jobs') }}
          </RouterLink>
        </Card>
        <Card bg="bg-sky-100">
          <h2 class="text-2xl font-bold">{{ t('label.for_employer') }}</h2>
          <p class="mt-2 mb-4">
            {{ t('label.for_employer_subtitle') }}
          </p>
          <RouterLink
            to="/jobs/add"
            class="inline-block bg-sky-500 text-white rounded-lg px-4 py-2 hover:bg-sky-600"
          >
            {{ t('button.add_job') }}
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
