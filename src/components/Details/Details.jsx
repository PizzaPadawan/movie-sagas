import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"

export default function Details(){

    // retrieve our store to grab keys for render
    const detailsList = useSelector(store => store.details)

    // test div to make sure we're pushing correctly
    return (
        <div>
            <h2>Movie Details go here!</h2>
        </div>
    )
}