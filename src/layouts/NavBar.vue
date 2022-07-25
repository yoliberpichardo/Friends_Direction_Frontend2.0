<script>
import useStore from 'src/stores/store'

export default {
    setup(){
        const use = useStore()

        return{
            use
        }
    }

}
</script>

<template>
    <div class="bodyNav">
        <div class="contentRouter">
            <router-link to="/home">Inicio</router-link>
            <router-link to="/home/search">Amigos</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>

    .bodyNav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        background-color: #000;
    }
    .contentRouter {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contentRouter a {
        color: #fff;
        font-size: 1.5rem;
        text-decoration: none;
        margin: 0 10px;
    }
</style>
