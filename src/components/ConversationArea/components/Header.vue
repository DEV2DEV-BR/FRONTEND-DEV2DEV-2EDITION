<template>
  <div class="container-header">
    <div class="row items-center justify-between container-actions">
      <q-avatar size="40px" class="q-px-md">
        <img src="https://i.pravatar.cc/40" />
      </q-avatar>
      <div class="row items-center justify-center">
        <q-btn
          round
          dense
          unelevated
          icon="history"
          text-color="grey"
          size="15px"
          class="q-mr-sm"
        >
        </q-btn>
        <q-btn
          round
          dense
          unelevated
          icon="chat"
          text-color="grey"
          size="12px"
          class="q-mr-sm"
        >
        </q-btn>
        <q-btn
          round
          dense
          unelevated
          icon="fas fa-ellipsis-v"
          text-color="grey"
          size="11px"
          class="q-mr-sm"
        >
        </q-btn>
      </div>
    </div>

    <div class="search full-width q-pa-sm">
      <q-input
        rounded
        outlined
        class="full-width"
        v-model="search"
        :dense="false"
        label="pesquisar ou começar uma nova conversa"
        bg-color="white"
      >
        <template v-slot:prepend>
          <q-icon name="search" size="20px"></q-icon>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.container-header {
  height: 118px;
  background-color: $grey-whats;
  border-bottom: 1px solid $border-grey;
}
.container-actions {
  border-right: 1px solid $border-grey;
  height: 59px;
}
.search {
  background-color: $light-grey;
}
</style>
