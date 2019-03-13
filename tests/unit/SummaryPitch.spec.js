import { shallowMount } from '@vue/test-utils'
import SummaryPitch from '@/components/ProjectPresentation/SummaryPitch.vue'

describe('SummaryPitch.vue', () => {
    it('summary text passed', () => {

        const summary = 'Nihil est enim virtute amabilius'
        const wrapper = shallowMount(SummaryPitch, {
            propsData: { summary }
        })
        expect(wrapper.text()).toMatch(summary)
    })
})
