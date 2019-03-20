import { shallowMount } from '@vue/test-utils'
import ChallengeFeedback from '@/components/InfoTeam/ChallengeFeedback.vue'

describe('ChallengeFeedback.vue', () => {
  it('load the dribdat disqus and display it', () => {

    const id = 1
    const wrapper = shallowMount(ChallengeFeedback, {
      propsData: { id }
    })

    expect(wrapper.find('#disqus_thread').isVisible());
  })
})
