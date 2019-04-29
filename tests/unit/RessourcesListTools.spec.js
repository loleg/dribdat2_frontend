import { shallowMount} from '@vue/test-utils'
import ListTools from '@/components/Ressources/ListTools.vue'

describe('ListTools.vue', () => {
  it('list is diplayed', () => {
    const tools = [
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
    const wrapper = shallowMount(ListTools, {
      propsData: { tools }
    })

    expect(wrapper.find('ul').element.children).toHaveLength(tools.length)
  })
})

/*describe('ListTools.vue edit mode', () => {
  it('input field displayed', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    let store = new Vuex.Store({
      state: {
        editMode: true
      },
      actions: {
        setModeEdit: jest.fn()
      }
    })
    const tools = [
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
      propsData: { tools },
      store: store,
      localVue: localVue
    })

    expect(wrapper.find('input-tools input'))
  })
})*/