import { defineStore } from 'pinia'
import getOptions from '../api/dataBase'
import { useQuasar } from 'quasar'
import directionAPI from 'src/api/direction'
import { Marker } from 'mapbox-gl'

const useStore = defineStore('storeID', {
  state: () => {
    return {
      friendsData: [],
      usersAvaible: {},
      token: localStorage.getItem('token'),
      friendsReceivedRequest: [],
      modal: false,
      modalRequest: false,
      mapHome: null,
      mapPerfil: null,
      usersResquet: [],
      $q: useQuasar(),
      myID: null,
      disableMapPerfil: true,
      newCoordinate: null,
      viewInfoFriend: null,
      receivedRequest: null,
      userCoordinate: null,
      newMarker: new Marker({ color: "#005", anchor: "center" }),
      coodinatesSource: null,
      sourceData: null
    }
  },
  actions: {

    /**
     *
     * @returns list of friends search
     */
    async getAllAvailableUsers(search = "") {
      this.usersAvaible = await (await getOptions.get('dataAll', {
        params: {
          q: search
        },
        headers: {
          authorization: `bearer ${this.token}`
        }
      })).data
    },

    async getUsersByID(search = "") {
      this.usersResquet = await (await getOptions.get('get_users', {
        params: {
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
      this.myID = await (await getOptions.get('myuser', {
        headers: {
          authorization: `bearer ${this.token}`,
        },
      })).data.data

      return this.myID
    },

    async friendsNumber() {
      this.receivedRequest = await (await getOptions.get('number_friends', {
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
      this.friendsReceivedRequest = await (await getOptions.post('search_users', { usersID }, {
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
    async acceptFriends(userID) {
      try {
        const { myUser, msg } = await (await getOptions.put('accept_friend', { userID }, {
          headers: {
            authorization: `bearer ${this.token}`,
          },
        })).data
        this.$q.notify({
          type: 'positive',
          message: msg

        })
        await this.getUsers(myUser.request_received)
        await this.getAllAvailableUsers()
        await this.friendsNumber()

      } catch {
        this.$q.notify({
          type: 'negative',
          message: 'no se pudo aceptar la solicitud'
        })
      }
    },

    /**
     *
     * @param {received ID users} userID
     * @returns object request decline
     */
    async declineRequest(userID) {
      try {
        const decline = await (await getOptions.put('decline_request', { userID }, {
          headers: {
            authorization: `bearer ${this.token}`,
          },
        })).data
        this.$q.notify({
          type: 'positive',
          message: decline.msg

        })

        return decline
      } catch {
        this.$q.notify({
          type: 'negative',
          message: 'no se pudo cancelar la solicitud'
        })
      }
    },

    async registerDirection(direction) {
      try {
        const register = await (await getOptions.put('edit_direction', { direction }, {
          headers: {
            authorization: `bearer ${this.token}`,
          },
        })).data

        this.$q.notify({
          type: 'positive',
          message: register.msg

        })

        return register

      } catch {
        this.$q.notify({
          type: 'negative',
          message: 'no se pudo registrar su direccion 1'
        })
      }
    },

    async changePublic(isPublic) {
      try {
        const returnPublic = await (await getOptions.put('edit_public', { isPublic }, {
          headers: {
            authorization: `bearer ${this.token}`,
          },
        })).data

        this.$q.notify({
          type: 'positive',
          message: returnPublic.msg

        })

        return returnPublic

      } catch (err) {
        console.log(err);
        this.$q.notify({
          type: 'negative',
          message: 'no se pudo registrar su direccion 2'
        })
      }
    },

    async directionInit(start, end) {
      this.coodinatesSource = await (await directionAPI.get(`/${start.lng}, ${start.lat}; ${end.lng}, ${end.lat}`)).data

    },

    addSourceData(coords) {



      this.sourceData = {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': coords
          }
        }
      }
    }


  }
})

export default useStore;
