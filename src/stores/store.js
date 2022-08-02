import { defineStore } from 'pinia'
import getOptions from '../api/dataBase'

const useStore = defineStore('storeID', {
  state: () => {
    return {
      friendsData: [],
      friendsSearch: '',
      token: localStorage.getItem('token'),
      friendsReceivedResquet: [],
      modal: false
    }
  },
  actions: {
    friendsUpdate() {
      if (this.friendsSearch) {
        return this.friendsData.filter((element) => {
          return String(element["name"]).includes(this.friendsSearch)
        })
      }
      return this.friendsData
    },
    async friendsGet() {
      return await (await getOptions.get('user', {
        headers: {
          authorization: `bearer ${this.token}`
        }
      })).data.dataFilter
    },

    async verifyResquet() {
      return await (await getOptions.get('myuser', {
        headers: {
          authorization: `bearer ${this.token}`,
        },
      })).data
    },
    async friendsNumber() {
      return await (await getOptions.get('number_friends', {
        headers: {
          authorization: `bearer ${this.token}`,
        },
      })).data
    },
    async getUsers(usersID) {
      this.friendsReceivedResquet = await (await getOptions.post('get_users',{usersID}, {
        headers: {
          authorization: `bearer ${this.token}`,
        },
      })).data
      console.log(this.friendsReceivedResquet);

      return this.friendsReceivedResquet
    },
  }
})

export default useStore;
