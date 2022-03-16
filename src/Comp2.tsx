import {defineComponent, ref, h, Fragment} from 'vue'

interface ExampleProps {
  name?: string
}

export const vuePropsType = {
  name: String
}
const Comp2 = defineComponent<ExampleProps>((props, {slots}) => {


  return () => (
    <div>
      Comp2asdasdasd
    </div>
  )
})

Comp2.props = vuePropsType

export default Comp2

