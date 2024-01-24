import { useCounterStore } from "./Counter"

function Controls() {
    const increaseCount = useCounterStore((state)=>state.increaseCountByOne)
    const decreaseCount = useCounterStore((state)=>state.decreaseCountByOne)
    const reset = useCounterStore((state)=>state.resetCount)
    const increment = useCounterStore((state)=>state.increment)
    const decrement = useCounterStore((state)=>state.decrement)
    const inputIncrement = useCounterStore((state)=>state.inputIncrement)
    const inputDecrement = useCounterStore((state)=>state.inputDecrement)
    const qtyInc = useCounterStore((state)=>state.qtyInc)
    const qtyDec = useCounterStore((state)=>state.qtyDec)
    const resetDecInput = useCounterStore((state)=>state.resetDecInput)
    const resetIncInput = useCounterStore((state)=>state.resetIncInput)
    
    const increaseByUserInputHandler = (qty) =>{
          increment(qty)
          resetIncInput()
    }
    
    const decreaseByUserInputHandler = (qty) =>{
          decrement(qty)
          resetDecInput()
    }

  return (
    <div>
        <button onClick={increaseCount}>Increase By One</button>
        <button onClick={decreaseCount}>Decrease By One</button>
        <button onClick={reset}>Reset</button>
        <input type="text" value={qtyInc} onChange={e=>inputIncrement(+e.target.value)} />
        <input type="text" value={qtyDec} onChange={e=>inputDecrement(+e.target.value)} />
        <button onClick={()=>increaseByUserInputHandler(qtyInc)}>Increase</button>
        <button onClick={()=>decreaseByUserInputHandler(qtyDec)}>Decrease</button>
    </div>
  )
}

export default Controls