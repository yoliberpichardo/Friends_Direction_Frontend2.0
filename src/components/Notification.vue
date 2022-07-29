
<script>
import useStore from 'src/stores/store';
import { onMounted, onUnmounted, ref } from 'vue-demi';
import ModalsResquet from './ModalsResquet.vue';
export default {
    setup() {
        const use = useStore();
        const receivedResquet = ref(Object);
        let resquetInterval;
        onMounted(async () => {
            receivedResquet.value = await use.friendsNumber();
            resquetInterval = setInterval(async () => {
                receivedResquet.value = await use.friendsNumber();
            }, 20000);
        });
        onUnmounted(() => {
            clearInterval(receivedResquet);
        });
        return {
            use,
            receivedResquet,
            modal: ref(false)
        };
    },
    components: { ModalsResquet }
};
</script>
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn dense color="black" round icon="notifications" class="q-ml-md" @click="use.getUsers(receivedResquet.data.request_received), modal = true">
      <q-badge floating v-if="receivedResquet.data">{{receivedResquet.data.request_received.length}}</q-badge>
    </q-btn>
  </div>
  <q-dialog v-model="modal">
    <ModalsResquet v-model="modal" />
  </q-dialog>
</template>
<style>
</style>
