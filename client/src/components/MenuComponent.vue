<template>
<div class="menu bg-light">
    <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <router-link to="/" @click="activeHome" class="nav-link" :class="{'active': isActiveHome}" id="v-pills-home-tab" role="tab">
            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span></router-link>
            <router-link to="/simulpassado" @click="activePassado" class="nav-link" :class="{'active': isActivePassado}" id="v-pills-home-tab" role="tab">
            <i class="fs-4 bi-arrow-left-circle"></i> <span class="d-none d-sm-inline">Simular</span> Passado</router-link>
            <router-link to="/simulfuturo" @click="activeFuturo" class="nav-link" :class="{'active': isActiveFuturo}" id="v-pills-home-tab" role="tab">
            <i class="fs-4 bi-arrow-right-circle"></i> <span class="d-none d-sm-inline">Simular</span> Futuro</router-link>
            <router-link to="/sobre" @click="activeSobre" class="nav-link" :class="{'active': isActiveSobre}" id="v-pills-home-tab" role="tab">
            <i class="fs-4 bi-info-circle"></i> <span class="ms-1 d-none d-sm-inline">Sobre</span></router-link>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        name: 'MenuComponent',
        data() {
        return {
            isActiveHome: "active",
            isActivePassado: "",
            isActiveFuturo: "",
            isActiveSobre: ""
        }
        }, 
        methods:{
            activeHome: function(){
                this.isActiveHome = "active";
                this.isActiveFuturo = "";
                this.isActivePassado = "";
                this.isActiveSobre ="";

            },
            activePassado: function(){
                this.isActiveHome = "";
                this.isActiveFuturo = "";
                this.isActivePassado = "active";
                this.isActiveSobre ="";

            },
            activeFuturo: function(){
                this.isActiveHome = "";
                this.isActiveFuturo = "active";
                this.isActivePassado = "";
                this.isActiveSobre ="";

            },
            activeSobre: function(){
                this.isActiveHome = "";
                this.isActiveFuturo = "";
                this.isActivePassado = "";
                this.isActiveSobre ="active";

            }
        }

        /*props:{
            Mensagem: String
        }*/
    }

</script>

<style scoped>

</style>
