
<script>
import useStore from 'src/stores/store';
import { onMounted, onUnmounted, ref } from 'vue-demi';
export default {
    setup() {
        const use = useStore();
        const receivedRequest = ref(Object);
        let requestInterval;

        onMounted(async () => {
            receivedRequest.value = await use.friendsNumber();
            requestInterval = setInterval(async () => {
                receivedRequest.value = await use.friendsNumber();
            }, 20000);
        });

        onUnmounted(() => {
            clearInterval(receivedRequest);
        });

        return {
            use,
            receivedRequest,
            modal: ref(false)
        };
    }
};
</script>
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn dense color="black" round icon="notifications" class="q-ml-md" @click="use.getUsers(receivedRequest.data?.request_received), use.modal = !use.modal">
    <span v-if="receivedRequest.data">
      <q-badge floating v-if="receivedRequest.data?.request_received.length > 0">{{receivedRequest.data?.request_received?.length}}</q-badge>
    </span>
    </q-btn>
  </div>
</template>
<style>
</style>
