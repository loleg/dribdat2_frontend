import {shallowMount} from '@vue/test-utils'
import SummaryPitch from '@/components/SummaryPitch.vue'

describe('SummaryPitch.vue', () => {
    it('summary text passed', () => {

        const summaryText = 'Nihil est enim virtute amabilius'
        const wrapper = shallowMount(SummaryPitch, {
            propsData: { summaryText }
        })
        expect(wrapper.text()).toMatch(summaryText)
    })
})
