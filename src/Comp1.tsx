import {defineComponent, ref, h, Fragment, onActivated, onMounted} from 'vue'

interface ExampleProps {
  name?: string
}

export const vuePropsType = {
  name: String
}
const Comp1 = defineComponent<ExampleProps>((props, {slots}) => {


  onActivated(()=>{
    console.log('asd')
  })
  onMounted(()=>{
    console.log('onMounted')
  })
  return () => (
    <div>
      <input />asd
    </div>
  )
})

Comp1.props = vuePropsType

export default Comp1

