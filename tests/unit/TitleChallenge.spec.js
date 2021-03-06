import { shallowMount } from '@vue/test-utils'
import TitleChallenge from '@/components/ProjectPresentation/TitleChallenge.vue'

describe('TitleChallenge.vue', () => {
    it('Title challenge passed', () => {

        const title = '1'
        const wrapper = shallowMount(TitleChallenge, {
            propsData: {title}
        })
        expect(wrapper.find('.challenge-title h2').text()).toMatch(title)
    })
})
