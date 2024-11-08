import { useState, Children, HTMLAttributes, FC } from "react"
import { CardWrapper } from "./CardWrapper"

// basic default styles for container
// const Frame = styled.div`
//   width: 100%;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// `

interface IStack extends HTMLAttributes<HTMLDivElement> {
  onVote: Function
}

type ChildrenType = Array<Exclude<React.ReactNode, boolean | null | undefined>>

export const Stack: FC<IStack> = ({ onVote, children, ...props }) => {
  const [stack, setStack] = useState<ChildrenType>(Children.toArray(children))

  // return new array with last item removed
  const pop = (array: ChildrenType) => {
    return array.filter((_, index) => {
      return index < array.length - 1
    })
  }

  const handleVote = (item: any, vote: any) => {
    // update the stack
    console.log(item);
    console.log(vote);
    let newStack = pop(stack)
    setStack(newStack)

    // run function from onVote prop, passing the current item and value of vote
    onVote(item, vote)
  }

  return (
    <>
      <div {...props} className="w-full flex justify-center items-center relative overflow-hidden">
        {stack.map((item, index) => {
          let isTop = index === stack.length - 1
          return (
            <CardWrapper
            index={index}
              drag={isTop} // Only top card is draggable
              key={index}
              onVote={(result: any) => handleVote(item, result)}
            >
              {item}
            </CardWrapper>
          )
        })}
      </div>
    </>
  )
}
