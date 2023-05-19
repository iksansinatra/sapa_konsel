<template>
    <div class="divBottomBar">
            <div class="divBottomBarCol contain_center_full" >
                <a href="javascript:void(0);" @click="routex('/tentang')">
                    <i class="material-icons" style=" font-size: 40px; color: #1D5982">comment</i>
                </a>
                <!-- <div class="text-center">
                    <span class="h_titleBottomBar">PROFILE</span>
                </div> -->
            </div>
            <div class="divBottomBarCol contain_center_full" style="">
                <a href="javascript:void(0);" @click="routex('/history')">
                    <i class="material-icons" style=" font-size: 40px; color: #1D5982">history</i>
                </a>
                <!-- <div class="text-center">
                    <span class="h_titleBottomBar">SETTING</span>
                </div> -->
            </div>
            <div class="divBottomBarCol contain_center_full">
                <div class="divBottomBarColCenter contain_center_full">
                    <a href="javascript:void(0);" @click="routex('/login')">
                        <!-- <div icon="send" text-color="blue" /> -->
                         <i class="material-icons" style="transform: rotate(-45deg); font-size: 50px; color: white">send</i>
                    </a>
                </div>
            </div>
            <div class="divBottomBarCol contain_center_full">
                <a href="javascript:void(0);" @click="routex('/profil')">
                    <i class="material-icons" style=" font-size: 40px; color: #1D5982">person</i>
                </a>
                <!-- <div class="text-center">
                    <span class="h_titleBottomBar">Riwayat</span>
                </div> -->
            </div>
            <div class="divBottomBarCol contain_center_full" style="">
                <a href="javascript:void(0);" @click="routex('/login')">
                    <i class="material-icons" style=" font-size: 40px; color: #1D5982">logout</i>
                </a>
                <!-- <div class="text-center">
                    <span class="h_titleBottomBar">LOGOUT</span>
                </div> -->
            </div>
        </div>
</template>

<script>

export default {
    name: 'bottomBar',
    data() {
        return {
            key: ''
        }
    },
    methods: {
        routex(route) {
            this.$router.push(route);
        }
    },
}
</script>

<style lang="scss" scoped>

</style>