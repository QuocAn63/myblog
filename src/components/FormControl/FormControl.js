import PropTypes from 'prop-types'
import { useForm } from 'reacr-hook-form'


function FormControl({register, error, ...props}) {

   return (
      <>
         <input ref={register} {...props}/>
         {error && <div className="error_message">{error.message}</div>}
      </>
   )
}

export default FormControl