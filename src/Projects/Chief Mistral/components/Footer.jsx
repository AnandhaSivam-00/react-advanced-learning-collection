const Footer = () => {
    return (
        <footer className='cm-footer mt-auto py-3 text-center'>
            <div className='container'>
                <p className='mb-0 small'>
                    Crafted with care &bull; Powered by GLM &bull; &copy; {new Date().getFullYear()} Little Thinker
                </p>
            </div>
        </footer>
    )
}

export default Footer;