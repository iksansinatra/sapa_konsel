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
                <span class="h_namaAPP2">SapaKonsel</span>
            </div>
                </div>
        <div class="box_umum">
        <div class="h_uraian">Tentang Aplikasi SAPA KONSEL
SAPA KONSEL merupakan aplikasi yang dibangun sebagai media pelaporan tindak kekerasan terhadap perempuan dan anak.
Selain itu, aplikasi ini juga berfungsi sebagai media khusus yang memuat informasi dan edukasi mengenai Hak-hak serta perlindungan perempuan dan anak yang dapat bertindak sebagai media penumbuhan kesadaran terhadap kepedulian masyarakat terkait tindak kekerasan perempuan dan anak.
Tata Cara Melakukan Pengaduan Kekerasan Pada Aplikasi Sapa Konsel DPPA
> Kirim Pengaduan
    1. Pilih Menu Aduan
    2. Setelah itu akan muncul form pengaduan
    3. Isi form Pengaduan
    4. Tekan tombol Kirim Aduan untuk
         menyelesaikan proses pelaporan</div>
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