<template>
  <dir>
    <q-page-container>

      <div class="bgx_login">
        <div style="">
            <img src="/img/logosapa.png" style="display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45px;
  width: 219px;">
            <!-- <div style="position:absolute; top:56px; right:14px; ">
                <img src="/img/logo_konsel.png" alt="" style="height:36px">
            </div> -->
        </div>
        <div class="box_login">
            <div style="width:100%">
              <input type="text" placeholder="Nama Lengkap" class="inputbs">
            </div>

            <div style="width:100%">
              <input type="text" placeholder="No. Hp" class="inputbs" style="margin-top:20px">
            </div>

            <div style="width:100%">
              <input type="email" placeholder="Email" class="inputbs" style="margin-top:20px">
            </div>

            <div style="width:100%">
              <input type="text" placeholder="Username" class="inputbs" style="margin-top:20px">
            </div>

            <div style=" width:100%">
              <input type="password" placeholder="Password" class="inputbs" style="margin-top:20px">
            </div>

            <div style=" width:100%">
              <input type="password" placeholder="Konfirmasi Password" class="inputbs" style="margin-top:20px">
            </div>

            <q-btn class="btn_regis" style="margin-top:30px" flat @click="login('/registrasi')">
                <span style="color:white">REGISTRASI</span>
            </q-btn>
            <div class="use_login">
            Sudah Punya Akun?<a href="javascript:void(0);" style="text-decoration:none" @click="routex('/login')"> Log In</a>
            </div>
      </div>
      </div>
    </q-page-container>

  </dir>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'login',
  components: {
    HelloWorld
  },
  data() {
    return {
      key: ''
    }
  },
  methods: {
    routex(route) {
      this.$router.push(route);
    },

    login(route) {
      this.$router.push(route);
    }
  },
  mounted () {
    ;
  },
}
</script>

<style lang="">
  
</style>
