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
                <span class="h_namaAPP2">Artikel</span>
            </div>
                </div>
        <div class="box_umum">
            <q-card flat bordered class="my-card q-my-md" v-for="(data, index) in 8" :key="index">
                <q-card-section class="row items-center">
                    <div class="col-4">
                        <q-icon name="done" style="color:blue; font-size:50px" />
                    </div>
                    <div class="col-8">
                        <div class="h_value text-no-wrap text-justify" style="width: 190px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ">
                            Pemukulan Terhadap Anak Dalam Rumah Tangga</div>
                        <div class="h_uraian"
                            style="width: 190px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; ">
                            Selesai</div>
                            <div class="h_uraian" style="">25 Januari 2023</div>
                    </div>
                </q-card-section>
            </q-card>
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