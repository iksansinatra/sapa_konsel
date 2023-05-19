<template>
<q-drawer v-model="leftDrawerOpen" show-if-above class="bg-grey-2">
  <q-list>
        <q-img src="https://www.thevinylcorporation.co.uk/wp-content/uploads/2019/08/Blue-white-reflective.jpg" style="width: 100%">
    <!-- <q-img src="images/banner.png" style="width: 100%"> -->
      <div class="absolute-bottom text-subtitle1">
        <div class="col col-md-10" style="padding-left:%">
                  <b>Ver 0.1.4</b>
                  <span class="h_card_sidebar2" style="font-size:60%"> Beta</span>
              </div>
      </div>
    </q-img>

    <!-- <q-item-label class="bg-blue-6" header><span style="color:white">{{nama}}</span></q-item-label> -->
        







        
        <br><br>

        <!-- <q-item-label class="bg-blue-6" header><span style="color:white">Aplikasi Admin</span></q-item-label> -->

        <q-item clickable to="/" exact >
          <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="h_sidebar_menu">Home</q-item-label>
            <q-item-label caption lines="2">Dashboard</q-item-label>
          </q-item-section>
        </q-item>

   
    <!-- <q-expansion-item :content-inset-level="1">

      <template v-slot:header>
        <q-item-section avatar>
          <q-avatar icon="place" color="blue" text-color="white" />
        </q-item-section>
        <q-item-section>Verifikasi Lokasi</q-item-section>
      </template>
      
      <q-list :content-inset-level="0.5" > 

        <q-item clickable to="/usulanLokasiAbsen" :content-inset-level="0.5"  >
          <q-item-section>Usulan Lokasi Absen</q-item-section>
        </q-item>

      </q-list>
    </q-expansion-item> -->

    <q-expansion-item :content-inset-level="1">

      <template v-slot:header>
        <q-item-section avatar>
          <q-avatar icon="place" color="blue" text-color="white" />
        </q-item-section>
        <q-item-section class="h_sidebar_menu">Surat Masuk</q-item-section>
      </template>
      
      <q-list :content-inset-level="0.5" > 

        <q-item clickable to="/agendaSuratMasuk" :content-inset-level="0.5"  >
          <q-item-section class="h_sidebar_sub_menu">Agenda Surat Masuk</q-item-section>
        </q-item>

        <q-item clickable to="/verifikasiDisposisi" :content-inset-level="0.5"  >
          <q-item-section class="h_sidebar_sub_menu">Verifikasi / Disposisi</q-item-section>
        </q-item>

        <q-item clickable to="/disposisiSuratMasuk" :content-inset-level="0.5"  >
          <q-item-section class="h_sidebar_sub_menu">Surat Masuk</q-item-section>
        </q-item>

        <q-item clickable to="/laporanDisposisi" :content-inset-level="0.5"  >
          <q-item-section class="h_sidebar_sub_menu">Laporan Disposisi</q-item-section>
        </q-item>

      </q-list>
    </q-expansion-item>


    <q-expansion-item :content-inset-level="1">

      <template v-slot:header>
        <q-item-section avatar>
          <q-avatar icon="place" color="blue" text-color="white" />
        </q-item-section>
        <q-item-section class="h_sidebar_menu">Surat Keluar</q-item-section>
      </template>
      
      <q-list :content-inset-level="0.5" > 

        <q-item clickable to="/konsepSuratKeluar" :content-inset-level="0.5"  >
          <q-item-section class="h_sidebar_sub_menu">Konsep Surat Keluar</q-item-section>
        </q-item>

        <q-item clickable to="/verifikasiSuratKeluar" :content-inset-level="0.5"  >
          <q-item-section class="h_sidebar_sub_menu">Verifikasi Surat Keluar</q-item-section>
        </q-item>

        <q-item clickable to="/ttdSuratKeluar" :content-inset-level="0.5"  >
          <q-item-section class="h_sidebar_sub_menu">Penandatanganan Surat Keluar</q-item-section>
        </q-item>

        <q-item clickable to="/agendaSuratKeluar" :content-inset-level="0.5"  >
          <q-item-section class="h_sidebar_sub_menu">Agenda Surat Keluar</q-item-section>
        </q-item>

      </q-list>
    </q-expansion-item>

 


    <q-item clickable to="/about" exact>
        <q-item-section top avatar>
            <q-avatar color="primary" text-color="white" icon="priority_high" />
        </q-item-section>
        <q-item-section>
            <q-item-label class="h_sidebar_menu">About</q-item-label>
        </q-item-section>
    </q-item>


    <q-item clickable @click="logout" exact>
      <q-item-section top avatar>
        <q-avatar color="red" text-color="white" icon="lock" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="h_sidebar_menu">Keluar</q-item-label>
        <q-item-label caption lines="2">Logout</q-item-label>
      </q-item-section>
    </q-item>


    <q-item clickable exact>
      <q-item-section top avatar>
        <q-avatar color="red" text-color="white" icon="lock" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="h_sidebar_menu">xxxxxx</q-item-label>
        <q-item-label caption lines="2">Logout</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable exact>
      <q-item-section top avatar>
        <q-avatar color="red" text-color="white" icon="lock" />
      </q-item-section>
      <q-item-section>
        <q-item-label class="h_sidebar_menu">xxxxxx</q-item-label>
        <q-item-label caption lines="2">Logout</q-item-label>
      </q-item-section>
    </q-item>


















      </q-list>
      </q-drawer>

</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>


.q-item {
    padding-top: 2px !important;
    padding-bottom: 2px !important;
    /* background-color: red; */
    margin-top : -10px;
}
</style>