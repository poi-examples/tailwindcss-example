import Vue from 'vue'

import './style.css'

new Vue({
  el: '#app',
  render() {
    return <div>
      <button class="bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow">
        Button
      </button>
    </div>
  }
})