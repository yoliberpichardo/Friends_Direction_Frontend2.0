<template>
  <q-card-section
      class="resultFriends"
      v-for="friend in dataMyUser.data"
      :key="friend.uid"
  >
    <q-card  class="bodyResult"  >
      <div class="descriptContent">
        <div class="nameContent">
          <h3>Perfil privado</h3>
          <p>19.499832, -70.741350</p>
        </div>
        <div>
          <q-icon  name="share_location" :icon="'ion-ios-gear-outline'" size="2.7rem" />
        </div>
      </div>
    </q-card>
  </q-card-section>
</template>

<script>
export default {

}
</script>

<style>

</style>
