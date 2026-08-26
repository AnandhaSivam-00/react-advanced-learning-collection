import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

const MistralRecipe = ({ recipeIdea = '' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if(recipeIdea) {
            navigator.clipboard.writeText(recipeIdea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <>
            {recipeIdea ? (
                <section className='cm-recipe-card' aria-live='polite'>
                    <div className='cm-recipe-card-header d-flex justify-content-between align-items-center flex-wrap gap-2'>
                        <div className='d-flex align-items-center gap-2'>
                            <h3 className='mb-0'>Chef Mistral's Recipe Recommendation</h3>
                        </div>
                        <button
                            type='button'
                            className='btn btn-sm btn-outline-light rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1'
                            onClick={handleCopy}
                            title='Copy recipe to clipboard'
                        >
                            {copied ? '✓ Copied to Clipboard' : 'Copy Recipe'}
                        </button>
                    </div>
                    <div className='p-4 p-md-5'>
                        <div className='recipe-container'>
                            <ReactMarkdown>{recipeIdea}</ReactMarkdown>
                        </div>
                    </div>
                </section>
            ) : (
                <div className='text-center p-4 text-muted'>
                    <p className='mb-0'>No recipe idea generated yet.</p>
                </div>
            )}
        </>
    )
}

MistralRecipe.propTypes = {
    recipeIdea: PropTypes.string
}

export default MistralRecipe;