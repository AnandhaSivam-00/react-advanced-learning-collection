import ChiefMistralLogo from '../../../assets/ChiefMistralLogo.jpg'

const Header = () => {
    return (
        <header className='cm-header sticky-top py-2 px-3 mb-4'>
            <div className='container d-flex justify-content-between align-items-center' style={{ maxWidth: '900px' }}>
                <div className='d-flex align-items-center gap-3'>
                    <div className='cm-logo-wrapper'>
                        <img src={ChiefMistralLogo} alt='Chief Mistral Logo' className='cm-logo' />
                    </div>
                    <div>
                        <div className='d-flex align-items-center gap-2'>
                            <h1 className='cm-brand-title'>Chief Mistral</h1>
                        </div>
                        <p className='text-muted mb-0 small d-none d-md-block' style={{ fontSize: '0.8rem' }}>
                            Pantry-to-Plate Recipe Assistant
                        </p>
                    </div>
                </div>
                <div className='d-flex align-items-center text-muted small'>
                    <span className='cm-badge-ai d-none d-sm-inline-block'>AI Chef</span>
                </div>
            </div>
        </header>
    )
}

export default Header;