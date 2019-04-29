import { shallowMount } from '@vue/test-utils'
import ListRessources from '@/components/Ressources/ListRessources.vue'

describe('ListRessources.vue', () => {
    it('list is diplayed', () => {
        const ressources = [
            {
                link: "https://github.com/",
                name: "GitHub"
            },
            {
                link: "https://vuejs.org/",
                name: "VueJS"
            },
            {
                link: "https://jestjs.io/",
                name: "Jest"
            }
        ]
        const wrapper = shallowMount(ListRessources, {
            propsData: { ressources }
        })

        expect(wrapper.find('ul').element.children).toHaveLength(ressources.length)
    })
})
