<template>
    <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="bg-light">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-black min-vh-100">
                <router-link to="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </router-link>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Home</span></router-link>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Simular</span></a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <router-link to="/simulpassado" class="nav-link px-0">
                                    <span class="d-none d-sm-inline">Simular</span> Passado</router-link>
                            </li>
                            <li>
                                <router-link to="/simulfuturo" class="nav-link px-0">
                                    <span class="d-none d-sm-inline">Simular</span> Futuro</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                       <router-link to="/sobre" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Sobre</span></router-link>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        name: 'MenuComponent',
        /*props:{
            Mensagem: String
        }*/
    }

</script>
