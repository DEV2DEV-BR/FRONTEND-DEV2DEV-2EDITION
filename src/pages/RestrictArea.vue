<template>
  <q-page class="container full-height">
    <div>
      <ConversationArea />
    </div>
    <div class="column" v-if="1 === 1">
      <TopBar :title="'Daniel Lopes'" />
      <ChatArea />
      <MessageBar />
    </div>
    <Empty v-else />
  </q-page>
</template>

<script>
import Empty from "src/components/Empty/Index";
import ConversationArea from "src/components/ConversationArea/Index";
import TopBar from "src/components/TopBar/Index";
import ChatArea from "src/components/ChatArea/Index";
import MessageBar from "src/components/MessageBar/Index";
export default {
  name: "MainLayout",
  data() {
    return {};
  },
  components: {
    Empty,
    ConversationArea,
    TopBar,
    ChatArea,
    MessageBar
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  overflow: hidden;
  min-width: 1200px;
}
</style>
