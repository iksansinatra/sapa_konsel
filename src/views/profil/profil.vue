<template>
    <div>
            <div class="bgx_login">
                <div class="row" style="padding-top:60px">
                <div class="col-6 contain_center" style="padding-left:25px">
            <a class="clear_underline" href="javascript:void(0);" @click="routex(routerx)">
                <q-icon name="arrow_back_ios" style="color:white; font-size:20px" />
                <span class="h_back"> Kembali</span>
            </a>
        </div>
        <div class="col-6 contain_center text-right" style="padding-right:25px">
                <span class="h_namaAPP2">Profil</span>
            </div>
                </div>
        <div class="box_umum">
            <div class="borderList">
                    <div>
                        <div class="h_uraian">Nama pengguna</div>
                        <div class="h_value">XXX-XXXX-XXXX-X</div>
                    </div>
                    <div style="padding-top:10px">
                        <div class="h_uraian">Nomor HP</div>
                        <div class="h_value">XXX-XXXX-XXXX-X</div>
                    </div>
                    <div style="padding-top:10px">
                        <div class="h_uraian">Alamat</div>
                        <div class="h_value">XXX-XXXX-XXXX-X</div>
                    </div>
                    <div style="padding-top:10px">
                        <div class="h_uraian">Username</div>
                        <div class="h_value">XXX-XXXX-XXXX-X</div>
                    </div>
                </div>
                <div class="divSideButtom">

                <q-btn @click="routex('/profilEdit')" class="bottonSideButtom" icon="edit" round />
            </div>
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