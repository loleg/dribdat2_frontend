import { shallowMount } from '@vue/test-utils'
import ListTools from '@/components/Ressources/ListTools.vue'

describe('ListTools.vue', () => {
  it('list is diplayed', () => {
    const list = [
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
    const wrapper = shallowMount(ListTools, {
      propsData: { list }
    })

    expect(wrapper.find('ul').element.children).toHaveLength(list.length)
  })
})
