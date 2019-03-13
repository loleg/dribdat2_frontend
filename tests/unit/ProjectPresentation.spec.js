import {mount} from '@vue/test-utils'
import ProjectPresentation from '@/views/ProjectPresentation.vue'

describe('ProjectPresentation.vue', () => {
    it('the project presentation contains the components summaryPitch', () => {

        const wrapper = mount(ProjectPresentation)

        expect(wrapper.find('.projectPresentation .textSummary p').html()).toEqual('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu nunc, sollicitudin eget semper eget, lobortis sit amet tellus. Morbi mauris est, tincidunt ut tortor vel, aliquam condimentum risus. Nam molestie viverra ex sit amet tincidunt. Cras nunc quam, sagittis et congue at, ultrices a risus. Vestibulum tincidunt leo vitae auctor posuere. Nullam congue purus at ligula porta gravida. Ut vitae sapien nec nisi varius tempus auctor sed est. Maecenas laoreet aliquet odio tempor blandit. Nam sodales vehicula aliquet. Proin non egestas purus, sit amet feugiat nisi. Sed urna dolor, molestie molestie scelerisque sed, maximus egestas neque. Donec vehicula odio vitae massa hendrerit, dapibus mollis quam cursus. Pellentesque id sollicitudin eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse enim dolor, facilisis a porta in, tempor ac purus. Donec erat eros, lobortis eget dictum sollicitudin, luctus ac tellus.</p>');


    })
})
