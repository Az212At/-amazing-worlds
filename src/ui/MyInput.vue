<script>
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    inputId: {
      type: String,
      default: "input-" + Math.random().toString(36).substr(2, 9),
    },
  },
};
</script>

<template>
  <div class="input-group">
    <label :for="inputId" class="input-label">{{ label }}</label>
    <input
      :id="inputId"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input-field"
      :placeholder="placeholder"
    />
  </div>
</template>

<style scoped>
.input-group {
  margin-bottom: 1rem;
}

.input-label {
  display: block;
  margin-bottom: 0.5rem;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
