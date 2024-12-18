<script setup>
import { RouterLink } from 'vue-router';
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/jobs"
        class="text-sky-500 hover:text-sky-600 flex items-center"
      >
        <i class="pi pi-arrow-circle-left mr-3"></i> {{ t('button.back_btn_msg') }}
      </RouterLink>
    </div>
  </section>
</template>
