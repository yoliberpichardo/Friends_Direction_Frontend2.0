<script>
import { ref } from "vue";
import useStore from 'src/stores/store';

export default {
  setup() {
    const use = useStore()
    return {
      use
    };
  },
};
</script>
<template>
  <div id="bodyModal" class="q-pa-md q-gutter-sm">
      <q-card>
        <q-toolbar class="btnContent">
          <q-btn flat round dense icon="close" @click="use.modal = !use.modal"></q-btn>
        </q-toolbar>

        <q-card-section style="max-height: 50vh" class="scroll">
          sdfguuuuuuuusduihiufhsdihiufhiojors
        </q-card-section>
      </q-card>
  </div>
</template>

<style scoped>
  #bodyModal{
    display: flex;
    position: fixed;
  }
  .btnContent{
    display: flex;
    justify-content: end;
  }
</style>
