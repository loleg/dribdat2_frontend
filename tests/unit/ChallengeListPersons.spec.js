import { shallowMount } from '@vue/test-utils'
import ChallengeListPersons from '@/components/InfoTeam/ChallengeListPersons.vue'

describe('ChallengeListPersons.vue', () => {
  it('list is diplayed', () => {
    const list = [
      {
        firstname: "Mickaël",
        lastname: "Coluccia",
        link: "#"
      },
      {
        firstname: "Jonathan",
        lastname: "Schnyder",
        link: "#"
      },
      {
        firstname: "Endrit",
        lastname: "Haziri",
        link: "#"
      }
    ]
    const wrapper = shallowMount(ChallengeListPersons, {
      propsData: { list }
    })
    expect(wrapper.text()).toMatch(list)
  })
})
