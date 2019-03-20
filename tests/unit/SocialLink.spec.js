import { shallowMount } from '@vue/test-utils'
import SocialLink from '@/components/ProjectPresentation/SocialLink.vue'

describe('ProjectPresentation.vue', () => {
    it('the project presentation contains the link to a media social', () => {

        const link = 'www.facebook.com'
        const wrapper = shallowMount(SocialLink, {
            propsData: { link }
        })

        expect(wrapper.find('.social-link a').text()).toEqual(link);


    })
})
