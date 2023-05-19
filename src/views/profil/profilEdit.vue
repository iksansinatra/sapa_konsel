<template>
    <div>
            <div class="bgx_login">
                <div class="row" style="padding-top:60px">
                <div class="col-6 contain_center" style="padding-left:25px">
            <a class="clear_underline" href="javascript:void(0);" @click="routex('/profil')">
                <q-icon name="arrow_back_ios" style="color:white; font-size:20px" />
                <span class="h_back"> Kembali</span>
            </a>
        </div>
        <div class="col-6 contain_center text-right" style="padding-right:25px">
                <span class="h_namaAPP2"> Edit Profil</span>
            </div>
                </div>
        <div class="box_umum">
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

            <q-btn class="btn_login" style="margin-top:30px" flat>
                <span style="color:white">EDIT DATA</span>
            </q-btn>
      </div>
      </div>

        <bottomBar />
    </div>
</template>

<script>
export default {
    data() {
        return {
            key: ''
        }
    },
    methods: {
        routex(route) {
            this.$store.state.halamanKini = this.$route.name;
            this.$router.push(route);
        }
    },
}
</script>

<style lang="scss" scoped>

</style>