import { defineStore } from 'pinia'
import getOptions from '../api/dataBase'

const useStore = defineStore('storeID', {
  state: () => {
    return {
      friendsData: [],
      usersAvaible: {},
      token: localStorage.getItem('token'),
      friendsReceivedRequest: [],
      modal: false,
      map: null,
      usersResquet: []
    }
  },
  actions: {

    /**
     *
     * @returns list of friends search
     */
    async getAllAvailableUsers(search = "") {
      this.usersAvaible = await (await getOptions.get('dataAll', {
        params:{
          q: search
        },
        headers: {
          authorization: `bearer ${this.token}`
        }
      })).data
    },

    async getUsersByID(search = "") {
      this.usersResquet = await (await getOptions.get('get_users', {
        params:{
          q: search
        },
        headers: {
          authorization: `bearer ${this.token}`
        }
      })).data
    },

    /**
     *
     * @returns list of friends in my user
     */
    async friendsGet() {
      return await (await getOptions.get('user', {
        headers: {
          authorization: `bearer ${this.token}`
        }
      })).data.dataFilter
    },

    /**
     *
     * @returns my user
     */
    async myUser() {
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

     /**
     *
     * @param {received ID users} userID
     * @returns objects friends
     */

    async getUsers(usersID) {
      this.friendsReceivedRequest = await (await getOptions.post('search_users',{usersID}, {
        headers: {
          authorization: `bearer ${this.token}`,
        },
      })).data
    },
    /**
     *
     * @param {received ID users} userID
     * @returns object if request is accepted
     */
    async acceptFriends(userID){
      return await (await getOptions.put('accept_friend',{userID}, {
        headers: {
          authorization: `bearer ${this.token}`,
        },
      })).data
    },

  }
})

export default useStore;
