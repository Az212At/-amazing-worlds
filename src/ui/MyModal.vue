<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },

  title: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["close"]);
const modalRef = ref<HTMLElement | null>(null);

const closeModal = () => {
  emit("close");
};

// Фокус на модальное окно при открытии
onMounted(() => {
  if (modalRef.value) {
    modalRef.value.focus();
  }
});

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleEscape);
});
</script>

<template>
  <div
    v-if="props.show"
    aria-hidden="false"
    role="dialog"
    class="modal-overlay"
    @click.self="closeModal"
  >
    <div class="modal-content">
      <button
        type="button"
        aria-label="Close"
        class="modal-close"
        @click="closeModal"
      >
        ✖
      </button>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Полупрозрачный черный фон */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  position: relative;
  width: 600px;
  height: 600px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
