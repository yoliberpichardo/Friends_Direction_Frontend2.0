
<script>
import useStore from 'src/stores/store';
import { onMounted, onUnmounted, ref } from 'vue-demi';
export default {
    setup() {
        const use = useStore();
        let requestInterval;

        onMounted(async () => {
            await use.friendsNumber();
            requestInterval = setInterval(async () => {
              await use.friendsNumber();
            }, 12000);
        });

        onUnmounted(() => {
            clearInterval(requestInterval);
        });

        return {
            use,
            modal: ref(false)
        };
    }
};
</script>
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn dense color="black" round icon="notifications" class="q-ml-md" @click="use.getUsers(use.receivedRequest?.data?.request_received), use.modal = !use.modal">
    <span v-if="use.receivedRequest?.data">
      <q-badge floating v-if="use.receivedRequest?.data?.request_received.length > 0">{{use.receivedRequest?.data?.request_received?.length}}</q-badge>
    </span>
    </q-btn>
  </div>
</template>
<style>
</style>
