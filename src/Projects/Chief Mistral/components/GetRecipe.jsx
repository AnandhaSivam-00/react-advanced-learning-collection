import { forwardRef, useState } from 'react'
import { getRecipeFromMistral } from '../AiModel'
import PropTypes from 'prop-types'

const GetRecipe = forwardRef((props, ref) => {
    // Functional components cannot directly accept refs the way class 
    // components can. Instead, you need to use React.forwardRef() 
    // to handle refs within functional components
    const [loading, setLoading] = useState(false);

    async function handleSubmitAPI() {
        setLoading(true);
        const markdownResponse = await getRecipeFromMistral(props.ingredientList);
        props.setRecipeIdea(markdownResponse);

        props.setRecipeShown(prevState => !prevState);
        setLoading(false);
        return;
    }

    return (
        <section className='my-4' ref={ref}>
            <div className='cm-recipe-banner p-4'>
                {props.showBtn ? (
                    <div className='row align-items-center g-3'>
                        <div className='col-12 col-md-8'>
                            <div className='d-flex align-items-center gap-2 mb-1'>
                                <span style={{ fontSize: '1.25rem' }}>🍳</span>
                                <h4 className='h5 fw-bold mb-0' style={{ color: 'var(--cm-text-primary)' }}>
                                    Ready for a custom recipe?
                                </h4>
                            </div>
                            <p className='text-secondary mb-0 small'>
                                Generate a step-by-step recipe tailored directly to your ingredients list.
                            </p>
                        </div>
                        <div className='col-12 col-md-4 text-md-end'>
                            <button 
                                type='button' 
                                className='btn btn-primary px-4 w-100 w-md-auto' 
                                onClick={handleSubmitAPI} 
                                disabled={loading}
                                aria-label='Generate a recipe from ingredient list'
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        <span>Cooking up idea...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Generate Recipe</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='text-center py-2'>
                        <p className='mb-0 text-muted small'>
                            💡 Add at least 3 ingredients to unlock AI recipe generation.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
})

GetRecipe.displayName = 'GetRecipe';

GetRecipe.propTypes = {
    ingredientList: PropTypes.arrayOf(PropTypes.string),
    setRecipeIdea: PropTypes.func,
    setRecipeShown: PropTypes.func,
    showBtn: PropTypes.bool
}

export default GetRecipe;