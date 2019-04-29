import { shallowMount } from '@vue/test-utils'
import HeadlineStatus from '@/components/InfoTeam/HeadlineStatus.vue'

describe('HeadlineStatus.vue', () => {
    it('Headline status passed', () => {

        const status = 'Title du challenge'
        const wrapper = shallowMount(HeadlineStatus, {
            propsData: {status}
        })

        expect(wrapper.find('i').text()).toEqual(status)
    })
})
