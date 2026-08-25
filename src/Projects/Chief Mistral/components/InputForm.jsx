import PropTypes from 'prop-types'
import { PlusIcon } from '../../../assets/Icons'

const InputForm = ({ addIngredient }) => {

    const handleSumbit = (event) => {
        event.preventDefault(); // Prevent the page refresh after the form submitted
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");

        addIngredient(newIngredient);

        event.currentTarget.reset(); // Clear the form after the submit
    }

    // If you are using the <label /> tag then use the htmlFor property to associate 
    // the input with an id, because we are directly working with an virtual DOM

    // Instead of using the onSubmit property, use the action property that automatically 
    // create the formData object

    return (
        <section className='mb-4 text-center'>
            <div className='mb-3'>
                <h2 className='h4 fw-bold mb-1' style={{ color: 'var(--cm-text-primary)' }}>
                    What ingredients do you have?
                </h2>
                <p className='text-muted small mb-0'>
                    Add ingredients from your pantry or fridge to discover creative recipes.
                </p>
            </div>
            
            <form onSubmit={handleSumbit} className='mx-auto' style={{ maxWidth: '640px' }}>
                <div className='d-flex flex-column flex-sm-row gap-2 justify-content-center align-items-stretch'>
                    <div className='flex-grow-1'>
                        <input
                            type='text'
                            className='form-control cm-input w-100'
                            aria-label='Add ingredient'
                            placeholder='e.g., Cherry tomatoes, garlic, olive oil...'
                            name='ingredient'
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div>
                        <button 
                            type='submit' 
                            className='btn btn-primary w-100 px-4'
                            aria-label='Click to add an ingredient to the list for the recipe'
                        >
                            <PlusIcon width={18} height={18} />
                            <span>Add Ingredient</span>
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default InputForm;

InputForm.propTypes = {
    addIngredient: PropTypes.func
}