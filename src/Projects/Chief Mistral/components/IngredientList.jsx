import PropTypes from 'prop-types'

const IngredientList = ({ 
    ingredientList = [], 
    deleteIngredient, 
    clearAllIngredients, 
    isRecipeGenerated = false 
}) => {
    const hasIngredients = ingredientList.length > 0;

    return (
        <section className='cm-card p-4 mb-4'>
            <div className='d-flex flex-wrap justify-content-between align-items-center mb-3 pb-2 border-bottom gap-2'>
                <div className='d-flex align-items-center gap-2'>
                    <h3 className='h5 mb-0 fw-bold' style={{ color: 'var(--cm-text-primary)' }}>
                        Ingredients on Hand
                    </h3>
                    {hasIngredients && (
                        <span className='badge bg-light text-dark border rounded-pill px-2 py-1'>
                            {ingredientList.length} {ingredientList.length === 1 ? 'item' : 'items'}
                        </span>
                    )}
                </div>

                <div className='d-flex align-items-center gap-2'>
                    {hasIngredients && isRecipeGenerated && (
                        <button
                            type='button'
                            className='cm-btn-clear-all'
                            onClick={clearAllIngredients}
                            title='Clear all ingredients'
                            aria-label='Clear all ingredients'
                        >
                            <span>✕</span>
                            <span>Clear All</span>
                        </button>
                    )}
                    {hasIngredients && (
                        <small className='text-muted d-none d-sm-inline-block'>
                            {ingredientList.length < 3 
                                ? `Add ${3 - ingredientList.length} more to unlock recipe generator` 
                                : 'Ready for recipe generation ✨'}
                        </small>
                    )}
                </div>
            </div>

            {hasIngredients ? (
                <div className='d-flex flex-wrap gap-2 pt-1'>
                    {ingredientList.map((item, index) => (
                        <div key={`${item}-${index}`} className='cm-ingredient-chip d-flex justify-content-start align-items-center'>
                            <span>{item}</span>
                            <button
                                type='button'
                                className='cm-chip-delete-btn'
                                onClick={() => deleteIngredient && deleteIngredient(index)}
                                title={`Remove ${item}`}
                                aria-label={`Remove ${item}`}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='text-center py-4 px-3 cm-hint-banner'>
                    <div className='mb-2' style={{ fontSize: '1.75rem' }}>🥗</div>
                    <h4 className='h6 fw-semibold text-dark mb-1'>No ingredients added yet</h4>
                    <p className='small text-muted mb-0'>
                        Type an ingredient above and press <span className='fw-semibold'>Add Ingredient</span> to start building your recipe.
                    </p>
                </div>
            )}
        </section>
    )
}

IngredientList.propTypes = {
    ingredientList: PropTypes.arrayOf(PropTypes.string),
    deleteIngredient: PropTypes.func,
    clearAllIngredients: PropTypes.func,
    isRecipeGenerated: PropTypes.bool
}

export default IngredientList;
