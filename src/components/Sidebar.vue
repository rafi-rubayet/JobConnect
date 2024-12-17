<template>
  <div>
    <!-- Mobile Overlay -->
    <div
      v-if="isOverlay && sidebarOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40"
      @click="$emit('closeSidebar')"
    ></div>

    <!-- Sidebar -->
    <div
      :class="[
        'bg-sky-700 text-white h-full fixed transition-transform duration-300 z-50',
        isOverlay && sidebarOpen
          ? 'translate-x-0'
          : isOverlay
          ? '-translate-x-full'
          : '',
        'w-64',
      ]"
    >
      <!-- Sidebar Header -->
      <div
        class="flex items-center justify-center h-16 border-b border-sky-800"
      >
        <i class="pi pi-objects-column text-lg"></i>
        <span class="ml-2 font-bold">JobConnect</span>
      </div>

      <!-- Sidebar Links -->
      <ul class="mt-4">
        <RouterLink
          to="/"
          :class="[
            isActiveLink('/') ? 'bg-sky-900' : '',
            'text-white',
            'rounded-md',
          ]"
          ><li class="p-4 hover:bg-sky-600 cursor-pointer flex items-center">
            <i class="pi pi-home mr-3"></i>
            <span>{{ t("home") }}</span>
          </li>
        </RouterLink>
        <RouterLink
          to="/jobs"
          :class="[
            isActiveLink('/') ? 'bg-sky-900' : '',
            'text-white',
            'rounded-md',
          ]"
          ><li class="p-4 hover:bg-sky-600 cursor-pointer flex items-center">
            <i class="pi pi-briefcase mr-3"></i>
            <span>{{ t("jobs") }}</span>
          </li>
        </RouterLink>
        <RouterLink
          to="/jobs/add"
          :class="[
            isActiveLink('/') ? 'bg-sky-900' : '',
            'text-white',
            'rounded-md',
          ]"
          ><li class="p-4 hover:bg-sky-600 cursor-pointer flex items-center">
            <i class="pi pi-plus-circle mr-3"></i>
            <span>{{ t("addJob") }}</span>
          </li>
        </RouterLink>
        <RouterLink
          to="/jobs/liked"
          :class="[
            isActiveLink('/') ? 'bg-sky-900' : '',
            'text-white',
            'rounded-md',
          ]"
          ><li class="p-4 hover:bg-sky-600 cursor-pointer flex items-center">
            <i class="pi pi-star mr-3"></i>
            <span>{{ t("likedJobs") }}</span>
          </li>
        </RouterLink>
      </ul>
      <div class="mt-auto p-4">
        <!-- Theme Toggle -->
        <!-- <div class="flex items-center justify-between">
          <span>{{ t('darkMode') }}</span>
          <input
            type="checkbox"
            class="toggle-switch"
            @change="$emit('toggleTheme')"
            :checked="theme === 'dark'"
          />
        </div> -->
        <!-- Language Toggle -->
        <div class="flex items-center justify-between mt-4">
          <span>{{ t("languageToggle") }}</span>
          <!-- <input
            type="checkbox"
            class="toggle-switch"
            @change="toggleLanguage"
            :checked="locale.value === 'ja'"
          /> -->
          <label class="switch">
            <input type="checkbox" @change="toggleLanguage" :checked="locale.value === 'ja'">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { useI18n } from "vue-i18n";
import { RouterLink, useRoute } from "vue-router";
import logo from "@/assets/img/logo.png";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

const { t, locale } = useI18n({ useScope: "global" });

// Toggle language function
const toggleLanguage = () => {
  locale.value = locale.value === "en" ? "ja" : "en"; // Toggle between locales
  localStorage.setItem('user-locale', locale.value); // Save to localStorage
};

defineProps({
  isOverlay: Boolean, // Mobile overlay mode
  sidebarOpen: Boolean, // Sidebar visibility
});

defineEmits(["closeSidebar"]);
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 23px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}



/* Styling for the toggle switches */
.toggle-switch {
  width: 40px;
  height: 20px;
  background-color: #ccc;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
}
.toggle-switch::before {
  content: "";
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
}
.toggle-switch:checked::before {
  transform: translateX(20px);
}
</style>
