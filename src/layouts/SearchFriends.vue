
<script>
    import { ref } from '@vue/reactivity'
    import {watch} from '@vue/runtime-core'
    import useStore from '../store/store'
    import getOptions from '../api/dataBase'
    export default {
        setup(){
            const use = useStore()
            const result = ref('')
            const token = localStorage.getItem('token')

            const sendResquet = async (uid) => {
               const resquet_send = await getOptions.post('resquet_send', {friendID: uid},{
                headers:{
                    authorization:`bearer ${token}`
                }
               })
               console.log(resquet_send);
            }

            return{
                use,
                sendResquet
            }
        }
    }
</script>

<template>
    <div class="bodySearch">
        <div class="inputContent">
            <input type="text" v-model="use.friendsSearch">
        </div>
        <div class="resutlFriends" v-for="friend in use.friendsUpdate()" :key="friend.uid">
            <div class="bodyResult">
                <div class="descriptContent">
                    <div class="nameContent">
                        <h2>{{friend.name}}</h2>
                    </div>
                    <div class="imgContent" @click="sendResquet(friend.uid)">
                        <img src="../assets/user.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bodySearch{
    margin: 3.1rem 0 0 0;
    color: #000;
}

.inputContent {
    background-color: aqua;
}

.inputContent input{
    border: solid #000 .1px;
}

.descriptContent{
    display: flex;
    justify-content: center;
    margin: 2rem;
}

.imgContent img {
    width: 35px;
    height: 35px;
    margin: 0 3rem;
}

</style>