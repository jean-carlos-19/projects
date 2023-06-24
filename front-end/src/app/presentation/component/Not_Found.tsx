import React from 'react'

interface not_found_props {
    data: []
}
const Not_Found = (props: not_found_props) => {
    const { data } = props;
    return (
        data.length === 0 ? (
            <figure>
                <img src="/not-found.svg" alt="" />
            </figure>
        ) : (
            null
        )

    )
}

export { Not_Found }
