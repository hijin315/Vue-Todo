// store.js
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todo: {
      namespaced: true,
      state: {
        todoItems: [
          {
            seq: '',
            todo: ''
          }
        ]
      },
      actions: {
        // -> 1. vue 파일에서 직접 dispatch('account/login') 호출
        // -> 2. vue 파일에서 helper 이용해서 메소드 호출.
        //axios
        getTodo({commit}) {
          axios.get('http://localhost:8443/todo').then(res => {
            if (res.data.success === true) {
              console.log(res.data);
              commit('getTodo', res.data.response);
            }
          })
        },
        addTodo({commit}, todoItem) {
          axios.post('http://localhost:8443/todo', {"todo": todoItem}).then(res => {
            if (res.data.success === true) {
              // 문제있음!
              commit('addTodo', res.data);
            }
          })
        },
        clearAll({commit}) {
          axios.delete('http://localhost:8443/todo/').then(res => {
            if (res.data.success === true) {
              commit('clearAll')
            }
          })
        },
        removeTodo({commit}, seq) {
          axios.delete('http://localhost:8443/todo/' + seq).then(res => {
            if (res.data.success === true) {
              commit('removeTodo', seq)
            }
          })
        },
        editTodo({commit}, payload) {
          axios.put('http://localhost:8443/todo/' + payload.seq, {"todo": payload.todo}).then(res => {
            if (res.data.success === true) {
              commit('editTodo', payload)
            }
          })
        }
      },
      mutations: {
        getTodo(state, data) {
          // state 변경
          state.todoItems = []
          for (let i = 0; i < data.length; i++) {
            state.todoItems.push(data[i])
          }
        },
        addTodo(state, data) {
          state.todoItems.push(data.response)
        },
        clearAll(state) {
          state.todoItems = [];
        },
        removeTodo(state, seq) {
          for (let i = 0; i < state.todoItems.length; i++) {
            if (state.todoItems[i].seq === seq) {
              state.todoItems.splice(i, 1)
            }
          }
        },
        editTodo(state, payload) {
          for (let i = 0; i < state.todoItems.length; i++) {
            if (state.todoItems[i].seq === payload.seq) {
              state.todoItems[i].todo = payload.todo
            }
          }
        }
        // vue 파일에서 직접 mutations 호출 => commit('account/login')
        // vuex 안에서 actions => commit 메소드 호출 (29라인)
      },
    }
  }
})
