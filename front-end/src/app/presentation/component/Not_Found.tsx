import React from 'react'
import {Title_1  } from "@project/presentation/element";
interface not_found_props {
    data: [];
    loading?:boolean
}
const Not_Found = (props: not_found_props) => {
    const { data, loading } = props;
    return (
        !loading && data.length === 0 ? (
            <figure className='not-found'>
                <img src="/not-found.svg" alt="" />
                <Title_1 css={"text-color-white-200"} name={"Aun no existen proyectos"} />
            </figure>
        ) : (
            null
        )

    )
}

export { Not_Found }
