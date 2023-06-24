import React from 'react'
import { Paragraph } from "@project/presentation/element";

const Social_Media = () => {
    return (
        <ul className="list">
            <li>
                <Paragraph css={"text-color-white-200"} name={"Instgram"} />
            </li>
            <li>
                <Paragraph css={"text-color-white-200"} name={"Linkedin"} />
            </li>
            <li>
                <Paragraph css={"text-color-white-200"} name={"Githubº"} />
            </li>
        </ul>
    )
}

export {Social_Media}
