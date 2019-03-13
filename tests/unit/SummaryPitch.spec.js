import {shallowMount} from '@vue/test-utils'
import SummaryPitch from '@/components/ProjectPresentation/SummaryPitch.vue'

describe('SummaryPitch.vue', () => {
    it('summary text passed', () => {

        //const wrapper = mount(SummaryPitch)

        //expect(wrapper.find('.textSummary p').text()).toEqual('Nihil est enim virtute amabilius');

       const summaryText = 'Nihil est enim virtute amabilius'
        const wrapper = shallowMount(SummaryPitch, {
            propsData: { summaryText }
        })
        expect(wrapper.text()).toMatch(summaryText)
    })
})
