import Overview from 'src/components/Dashboard/Views/Overview.vue'
import {mount, createLocalVue} from 'vue-test-utils'

const localVue = createLocalVue()
localVue.prototype.$Chartist = {
  Line: () => {},
  Bar: () => {},
  Pie: () => {},
  Interpolation: {
    simple: () => {}
  }
}

describe('Overview.vue', () => {
  it('should render starter template message', () => {
    const wrapper = mount(Overview, {localVue})
    const overviewText = wrapper.find('div').text()
    expect(overviewText).to.equal('Vue paper dashboard starter template')
  })
})
