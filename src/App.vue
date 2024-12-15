<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar
      :isOverlay="isMobile"
      :sidebarOpen="!isMobile || sidebarOpen"
      @closeSidebar="sidebarOpen = false"
    />

    <!-- Main Content -->
    <div
      class="flex-1"
      :class="{
        'ml-64': !isMobile, // Always allocate space for the sidebar on desktop
        'px-4': !isMobile,       // Add padding for spacing on desktop
      }"
    >
      <!-- Mobile Hamburger Menu -->
      <button
        v-if="isMobile"
        class="absolute top-4 left-4 text-2xl p-2 rounded-md bg-sky-700 text-white"
        @click="sidebarOpen = !sidebarOpen"
      >
        <i class="pi pi-bars"></i>
      </button>

      <!-- Main Content Components -->
      <Hero />
      <HomeCards />
      <JobListings :limit="3" :showButton="true" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Sidebar from "./components/Sidebar.vue";
import Hero from "./components/Hero.vue";
import HomeCards from "./components/HomeCards.vue";
import JobListings from "./components/JobListings.vue";

// State for theme and language
const isDarkMode = ref("light");

// Sidebar visibility state
const sidebarOpen = ref(false);
const isMobile = ref(window.innerWidth < 1024);

// Handle screen resizing
const handleResize = () => {
  isMobile.value = window.innerWidth < 1024; // Determine if screen is mobile
  if (!isMobile.value) sidebarOpen.value = true; // Always show sidebar on desktop
};

// Toggle dark/light mode
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  const root = document.documentElement;
  if (isDarkMode.value) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};


onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.ml-64 {
  margin-left: 16rem; /* Matches the width of the sidebar */
}
</style>
