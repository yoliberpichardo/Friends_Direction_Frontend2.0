
<script>
import { onMounted, ref, watch } from "vue-demi";
import useStore from "src/stores/store";
export default {
  setup() {
    const isPublic = ref(null);
    const use = useStore();

    const handlerClick = watch(isPublic, async (value) => {
      await use.changePublic(value);
    });

    onMounted(async () => {
      await use.myUser();
      isPublic.value = use.myID.public;
    });

    const editMap = () => {
      use.disableMapPerfil = false
    };

    return {
      isPublic,
      use,
      handlerClick,
      editMap,
    };
  },
};
</script>

<template>
  <div class="perfilConfig">
    <div class="bodyPerfilConfig">
      <h4>Configurar perfil</h4>
      <div class="btnController">
        <div class="contentPublic">
          <h6>Publico</h6>
          <q-toggle
            v-model="isPublic"
            checked-icon="check"
            @updated:model-value="handlerClick(isPublic)"
            color="green"
            unchecked-icon="clear"
          />
        </div>
        <div class="contentDirection">
          <q-btn
            label="Editar direccion"
            @click="editMap()"
            style="width: 100%"
            color="blue"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perfilConfig {
  width: 40%;
  height: 100%;
}

.bodyPerfilConfig {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btnController {
  width: 70%;
}

.contentPublic,
.contentDirection {
  min-width: 255px;
  display: flex;
  justify-content: space-between;
}
</style>
