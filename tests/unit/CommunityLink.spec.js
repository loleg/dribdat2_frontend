import { shallowMount } from '@vue/test-utils'
import CommunityLink from '@/components/Ressources/CommunityLink.vue'

describe('CommunityLink.vue', () => {
    it('the ressource page contains the link to the slack', () => {

        const urlCommunity = 'https://dataletsch.slack.com/messages'
        const wrapper = shallowMount(CommunityLink, {
            propsData: { urlCommunity }
        })


    expect(wrapper.find('a').attributes('href')).toEqual(urlCommunity);

    })
})
