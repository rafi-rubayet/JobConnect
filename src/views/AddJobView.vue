<script setup>
import router from '@/router';
import { reactive } from 'vue';
import { useToast } from 'vue-toastification';
import axios from 'axios';
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });

const form = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
});

const toast = useToast();

const handleSubmit = async () => {
  const newJob = {
    title: form.title,
    type: form.type,
    location: form.location,
    description: form.description,
    salary: form.salary,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone,
    },
  };

  try {
    const response = await axios.post('/api/jobs', newJob);
    toast.success('Job Added Successfully');
    router.push(`/jobs/${response.data.id}`);
  } catch (error) {
    console.error('Error fetching job', error);
    toast.error('Job Was Not Added');
  }
};
</script>

<template>
  <section class="bg-sky-50">
    <div class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">{{ t('addJob') }}</h2>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2"
              >{{ t('label.jobType') }}</label
            >
            <select
              v-model="form.type"
              id="type"
              name="type"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"
              >{{ t('label.jobListingName') }}</label
            >
            <input
              type="text"
              v-model="form.title"
              id="name"
              name="name"
              class="border rounded w-full py-2 px-3 mb-2"
              :placeholder="t('placeholder.jobListingName')"
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2"
              >{{ t('label.description') }}</label
            >
            <textarea
              id="description"
              v-model="form.description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              :placeholder="t('placeholder.description')"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2"
              >{{ t('label.salary') }}</label
            >
            <select
              id="salary"
              v-model="form.salary"
              name="salary"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option value="Under ￥5M">under ￥5M</option>
              <option value="￥5M - ￥6M">￥50 - ￥6M</option>
              <option value="￥6M - ￥7M">￥60 - ￥7M</option>
              <option value="￥7M - ￥8M">￥70 - ￥8M</option>
              <option value="￥8M - ￥9M">￥80 - ￥9M</option>
              <option value="￥9M - ￥10M">￥90 - ￥10M</option>
              <option value="￥10M - ￥12M">￥10M - ￥12M</option>
              <option value="￥125K - ￥15M">￥12M - ￥15M</option>
              <option value="￥15M - ￥17M">￥15M - ￥17M</option>
              <option value="￥175K - ￥20M">￥17M - ￥20M</option>
              <option value="Over ￥20M">Over ￥20M</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"> {{ t('label.location') }} </label>
            <input
              type="text"
              v-model="form.location"
              id="location"
              name="location"
              class="border rounded w-full py-2 px-3 mb-2"
              :placeholder="t('label.location')"
              required
            />
          </div>

          <h3 class="text-2xl mb-5">{{ t('label.companyInfo') }}</h3>

          <div class="mb-4">
            <label for="company" class="block text-gray-700 font-bold mb-2"
              >{{ t('label.companyName') }}</label
            >
            <input
              type="text"
              v-model="form.company.name"
              id="company"
              name="company"
              class="border rounded w-full py-2 px-3"
              ::placeholder="t(':placeholder.companyName')"
            />
          </div>

          <div class="mb-4">
            <label
              for="company_description"
              class="block text-gray-700 font-bold mb-2"
              >{{ t('label.companyDescription') }}</label
            >
            <textarea
              id="company_description"
              v-model="form.company.description"
              name="company_description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              :placeholder="t('label.companyDescription')"
            ></textarea>
          </div>

          <div class="mb-4">
            <label
              for="contact_email"
              class="block text-gray-700 font-bold mb-2"
              >{{ t('label.contactEmail') }}</label
            >
            <input
              type="email"
              v-model="form.company.contactEmail"
              id="contact_email"
              name="contact_email"
              class="border rounded w-full py-2 px-3"
              :placeholder="t('label.contactEmail')"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="contact_phone"
              class="block text-gray-700 font-bold mb-2"
              >{{ t('label.contactPhone') }}</label
            >
            <input
              type="tel"
              v-model="form.company.contactPhone"
              id="contact_phone"
              name="contact_phone"
              class="border rounded w-full py-2 px-3"
              :placeholder="t('placeholder.contactPhone')"
            />
          </div>

          <div>
            <button
              class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
            {{ t('addJob') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
