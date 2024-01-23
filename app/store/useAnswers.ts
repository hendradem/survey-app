import { create } from 'zustand'

type State = {
  answers: Object
}
type Action = {
    updateAnswers: (answers: State['answers']) => void
}

const useAnswers = create<State & Action>()((set) => ({
    answers: {},
    updateAnswers: (answers) => {
        set(() => ({ answers: answers }));
    },
}))

export default useAnswers
 