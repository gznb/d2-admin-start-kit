export default {
  namespace: true,
  state: {
    info: {}
  },
  actions: {
    set ({ state, dispatch }, info) {
      return Promise(async resolve => {
        state.info = info
        // 持久化
        await dispatch(
          'd2admin/db/set',
          {
            dbName: 'sys',
            path: 'mydata.info',
            value: info,
            user: true
          },
          {
            root: true
          }
        )
        // end
        resolve()
      })
    },
    load ({ state, dispatch }) {
      return new Promise(async resolve => {
        // store 赋值
        state.info = await dispatch(
          'd2admin/db/get',
          {
            dbName: 'sys',
            path: 'mydata.info',
            defaultValue: {},
            user: true
          },
          {
            root: true
          }
        )
        // end
        resolve()
      })
    }
  }
}
