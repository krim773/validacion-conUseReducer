import React, {useReducer} from 'react'

const FormUseReducer = () => {



    // validacion del formulario
    
    const initialState = {
        firstName: {
            value: '',
            error: null
        }, 

        lastName: {
            value:'',
            error: null
        },

        email:{
            value:'',
            error: null
        }
        
        
    };

    const [state, dispatch] = useReducer(formReducer, initialState)


    // se declara una funcion 

    function formReducer(state, action){
        let errorAux = null;

        // type sirve para apuntar a los atributos de los eventos de tipo main para saber a que input se trata 
        // atencion playloads action
        if (action.type == "firstName" && action.playload.length < 3 && action.playload.length > 0 ) errorAux = "Nombre debe tener mas de tres caracteres";
        if (action.type == "lastName" && action.playload.length < 3 ) errorAux = "Apellido debe tener mas de tres caracteres";

        return{
            // se usa el spread operator. copia del estado
            ...state,
            //va a estar ligado al atributo name y se diferenciara de firsName, lastName
            [action.type] : {value:action.playload, error : errorAux}
        }


    }

    function adminForm(evento){
        // hacemos una desesructuracion del elemento que va a disparar la desestructuracion
        const{name, value} = evento.target
        // creacion de objeto
        dispatch({
            type: name,
            playload: value
        });
        
    }

  return (
    <>
    <form >
        <div className="form-group">
            <label htmlFor="exampleInputNombre">Nombre</label>
            <input onChange={adminForm} type="text" name= "firstName" className="form-control" id="exampleInputNombre" aria-describedby="emailHelp" placeholder="Nombre" />
            {/* validar campo nombre */}
            {/* {(getNombre.length < 3 && getNombre !== "") ? <p className= 'text-danger'>Nombre debe tener mas de tres caracteres</p>: null }*/}
            {state.firstName.error !== null && (<p className='text-danger'>{state.firstName.error}</p>)}

            

        </div>
        <div className="form-group">
            <label htmlFor="exampleInputApellido">Apellido</label>
            <input onChange={adminForm} type="text" className="form-control" id="exampleInputApellido" aria-describedby="emailHelp" placeholder="Apellido" />
            {/* validar apellido */}
            {/* {(getApellido.length < 3 && getApellido !== "") ? <p className = 'text-danger'> Apellido debe tener mas de tres caracteres</p>: null} */}
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input onChange={adminForm} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" />


        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input onChange={adminForm} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            {/* validar password */}
            {/* {(getPassword.length < 7 ) ? <p className = 'text-danger'> La Contraseña es demasiado corta </p>: null} */}
            
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword2">Confirm Password</label>
            <input onChange= {adminForm}  type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
            {/* valida confirmacion de password */}
            {/* {( getConfirmPass != getPassword ) ? <p className = 'text-danger'> Las Contraseñas no coincide </p>: null} */}

        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    
    <div>
        <p>Nombre: </p>
        <p>Apellido: </p>
        <p>Email: </p>
        <p>Password: </p>
        <p>Confirm Password: </p>
        

        

    </div>
    </>
    )
}

export default FormUseReducer