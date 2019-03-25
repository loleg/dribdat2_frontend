import { shallowMount } from '@vue/test-utils'
import ButtonFeedback from '@/views/InfoTeam.vue'

describe('InfoTeam.vue', () => {
    it('the page infoteam contains the button to a feedback ', () => {
        const wrapper = shallowMount(ButtonFeedback);
        expect(wrapper.find('.button-copy'));
    })
})
