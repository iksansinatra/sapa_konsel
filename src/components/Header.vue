<template>
  <q-header reveal elevated class="">
      <q-toolbar>
        <q-btn style="margin-bottom:-30px; margin-left:-15px" flat @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="fas fa-bars"/>
        <q-toolbar-title style="margin-top:10px">
          Quasar App
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
</template>

<script>
export default {

}
</script>

<style>

</style>