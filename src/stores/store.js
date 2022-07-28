import {defineStore} from 'pinia'
import getOptions from '../api/dataBase'

const useStore = defineStore('storeID', {
    state: () => {
      return {
        friendsData: [],
        friendsSearch: ''
      }
    },
    actions: {
      friendsUpdate() {
        if(this.friendsSearch){
            return this.friendsData.filter((element) =>{
                return String(element["name"]).includes(this.friendsSearch)
            })
        }
        return this.friendsData
    },
    async dataGet () {
      const token = localStorage.getItem('token')
      return await( await getOptions.post('/user',{},{
        headers:{
          authorization:`bearer ${token}`
        }
      })).data.dataFilter
    }
    }
  })

  export default useStore;
