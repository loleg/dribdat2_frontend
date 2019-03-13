import {shallowMount} from '@vue/test-utils'
import TitleChallenge from '@/components/TitleChallenge.vue'

describe('TitleChallenge.vue', () => {
    it('Title challenge passed', () => {

        const titleChallenge = 'Title du challenge'
        const wrapper = shallowMount(TitleChallenge, {
            propsData: { titleChallenge}
        })
        expect(wrapper.text()).toMatch(titleChallenge)
    })
})
