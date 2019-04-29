import { shallowMount } from '@vue/test-utils'
import InfosLink from '@/components/Ressources/InfosLink.vue'

describe('ProjectPresentation.vue', () => {
    it('the project presentation contains the link to a media social', () => {

        const link = 'https://sleepy-lalande-c0efaa.netlify.com/'
        const wrapper = shallowMount(InfosLink, {
            propsData: { link }
        })

        expect(wrapper.find('.infos-link a').text()).toEqual(link);

    })
})
