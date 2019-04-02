import { shallowMount } from '@vue/test-utils'
import ListRessources from '@/components/Ressources/ListRessources.vue'

describe('ListRessources.vue', () => {
    it('list is diplayed', () => {
        const ressources = [
            {
                id: 1,
                name: "GitHub"
            },
            {
                id: 2,
                name: "VueJS"
            },
            {
                id: 3,
                name: "Jest"
            }
        ]
        const wrapper = shallowMount(ListRessources, {
            propsData: { ressources }
        })

        expect(wrapper.find('ul').element.children).toHaveLength(ressources.length)
    })
})
