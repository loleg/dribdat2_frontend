<template>
  <div class="edit_button">
    <div v-if="!editMode">
      <button type="button" class="btn btn-dark" @click="edit">
        <i class="icon-pencil"></i>
      </button>
    </div>
    <div v-else>
      <button type="button" class="btn btn-success" @click="save">
        <i class="icon-ok-sign"></i>
      </button>
      <button type="button" class="btn btn-danger" @click="discard">
        <i class="icon-remove"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditButton",
  props: ["editMode"],
  methods: {
    edit() {
      this.$store.dispatch("setModeEdit");
    },
    save() {
      this.$store.dispatch("setModeDisplay");
    },
    discard() {
      this.$store.dispatch("setModeDisplay");
    }
  }
};
</script>

<style scoped>


</style>


