<template>
  <div class="top-bar row items-center justify-between">
    <div class="container-avatar q-ml-md">
      <q-avatar size="40px" class="q-mr-sm">
        <img src="https://i.pravatar.cc/40" alt="" />
      </q-avatar>
      <span>{{ title }}</span>
    </div>
    <div class="container-actions">
      <q-icon name="search" size="22px" color="grey" class="q-r-md"></q-icon>
      <q-icon name="fas fa-ellipsis-v" size="15px" color="grey"></q-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  name: "TopBar",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.top-bar {
  height: 59px;
  background-color: $grey-whats;
  .container-avatar {
    width: 90%;
  }
  .container-actions {
    width: 8%;
  }
}
</style>
