import React, { useState } from 'react'

const Formulario = ({setSearchLyric}) => {

    const [search, setSearch] = useState({cancion:'', artista:''});
    const [error, setError] = useState(false)

    const saveSearch = e => {
        setSearch({
            ...search,
            [e.target.name]:e.target.value
        });
    };


    const handleSubmit = e => {
        e.preventDefault();

        if(search.cancion === '' || search.artista === 0){
            setError(true);
            return;
        }

        setError(false);

        setSearchLyric(search)

    };


    return (
        <div className='bg-info'>
            <div className='container'>
                <div className='row'>
                    <form 
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend className='text-center'>Buscador Letras Canciones</legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor="">Artista</label>
                                        <input
                                            className='form-control'
                                            type="text"
                                            name="artista"
                                            placeholder="Nombre artista"
                                            onChange={saveSearch}
                                        />

                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor="">Canción</label>
                                        <input
                                            className='form-control'
                                            type="text"
                                            name="cancion"
                                            placeholder="Nombre canción"
                                            onChange={saveSearch}
                                        />

                                    </div>
                                </div>


                            </div>
                            {error ?<p className='alert alert-danger text-center p-2'>Todos los campos son obligatorios</p> : null }

                            <button 
                                className='btn btn-primary float-right'
                                type="submit"
                            >Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario
