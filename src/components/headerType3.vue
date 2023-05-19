<template>
    <div class="row shadow-2" style="height:76px; background:#FFFFFF; border: 1px; border-radius: 30px" >
        <div class="col-6 contain_center" style="padding-left:31px">
             <a class="clear_underline" href="javascript:void(0);" @click="routex(routerx)">
                <q-icon name="arrow_back_ios" style="color:gray; font-weight:bold; font-size:24px" />
                <span class="h_back">BACK</span>
            </a>
        </div>
            <div class="col-6 contain_center text-right" style="padding-right:12px">
                <span class="h_namaAPP1">{{namaApp}}</span>
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