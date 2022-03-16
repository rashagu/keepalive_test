import {defineComponent, ref, h, Fragment, KeepAlive} from 'vue'
import Comp from './Comp1'
import Comp2 from './Comp2'

interface ExampleProps {
  name?: string
}

export const vuePropsType = {
  name: String
}
const App = defineComponent<ExampleProps>((props, {slots}) => {


  const showNoExcludeFirst = ref(true)
  const showExcludeFirst = ref(true)
  return () => (
    <div>
      <KeepAlive>
        <KeepAlive>
          {showNoExcludeFirst.value?<Comp />:<Comp2 />}
        </KeepAlive>
      </KeepAlive>
      <button onClick={()=>{
        showNoExcludeFirst.value = !showNoExcludeFirst.value
      }}>
      switch
    </button>
    </div>
  )
})

App.props = vuePropsType

export default App

