import create from 'zustand'

type storeType = {
    username: string | null,
    setUsername: (val: string) => void,
}


export const store = create<storeType>((set)=>({
    username: null,
    setUsername: (val) => set((state)=> ({username: val}))
}))