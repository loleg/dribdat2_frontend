import { shallowMount } from '@vue/test-utils'
import ChallengePitch from '@/components/ProjectPresentation/ChallengePitch.vue'

describe('ChallengePitch.vue', () => {
  it('iframe loaded', () => {
    const pitch = 'https://www.youtube.com/watch?v=zihJTimjdls'
    const wrapper = shallowMount(ChallengePitch, {
      propsData: { 
        pitch 
      }
    })
    expect(wrapper.isVisible())
  })
})
