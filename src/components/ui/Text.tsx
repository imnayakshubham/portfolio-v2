import React from 'react'
import { HyperText } from '@/components/HyperText/HyperText'

const Text = () => {
    return (
        <span className="uppercase flex items-center gap-2 font-thin text-gray-500">
            <HyperText
                className={"font-thin"}
                text="Manifesting"
            />
            &
            <HyperText
                className={"font-thin"}
                text="Working"
            />
        </span>
    )
}

export default Text