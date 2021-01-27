<template>
  <div class="chat-area">
    <div class="image full-width full-height">
      <Message
        v-for="item in 10"
        :key="item"
        :text="'Nova mensagem'"
        :hour="'12:05'"
        :my="false"
      />
    </div>
  </div>
</template>

<script>
import Message from "src/components/Message/Index";
export default {
  name: "ChatArea",
  data() {
    return {};
  },
  components: {
    Message
  }
};
</script>

<style lang="scss" scoped>
.chat-area {
  height: calc(100vh - 59px - 62px);
  min-width: 800px;
  width: calc(100vw - 410px);
  background-color: $grey-background;
}
.image {
  background-image: url("../../assets/background.png");
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
}
</style>
