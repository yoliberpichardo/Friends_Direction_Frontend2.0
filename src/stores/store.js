import {defineStore} from 'pinia'

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
    }
    }
  })
  
  export default useStore;