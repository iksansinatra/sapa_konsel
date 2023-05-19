<template>
    <div class="row shadow-2" style="height:110px; background:#FFFFFF" >
        <div class="col-6 contain_center" style="padding-left:31px">
            <span class="h_namaAPP">{{namaApp}}</span>
        </div>
            <div class="col-6 contain_center_full text-center">
            <a href="javascript:void(0);" @click="routex(routerx)">
                <q-img style="width:147px; height:42px" src="/img/logo.png" no-native-menu />
            </a>
            </div>
    </div>
</template>


<script>

export default {
    name: 'headerType1',
    props: ['namaApp', 'routerx'],
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