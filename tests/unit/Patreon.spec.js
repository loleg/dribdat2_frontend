import { shallowMount } from '@vue/test-utils'
import Patreon from '@/components/InfoTeam/Patreon.vue'

describe('Patreon.vue', () => {
    it('if the link is www.patreon.com', () => {

        const link = 'www.patreon.com'
        const wrapper = shallowMount(Patreon, {
            propsData: { link }
        })

        expect(wrapper.find('a').text()).toEqual(link);

    })
})
