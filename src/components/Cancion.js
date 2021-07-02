import React, {Fragment} from 'react'

const Cancion = ({lyric}) => (
    <Fragment>
        <h2>Letra canción</h2>
        <p className='letra'>{lyric}</p>
    </Fragment>
)

export default Cancion
